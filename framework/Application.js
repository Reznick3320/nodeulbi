const http = require('http');
const EventEmmiter = require('events');


module.exports = class Application {
	constructor() {
		this.emitter = new EventEmmiter();
		this.server = this._createServer();
	}

	listen(post, callback) {
		this.server.listen(post, callback)
	}

	addRouter(router) {
		Object.keys(router.endpoints).forEach(path => {
			const endpoint = router.endpoints[path];
			Object.keys(endpoint).forEach(method => {
				const handler = endpoint[method];
				this.emitter.on(this._getRouteMask(path, method), (req, res) => {
					handler(req, res)
				});
			})
		})
	}

	_createServer() {
		return http.createServer((req, res) => {
			const emited = this.emitter.emit(this._getRouteMask(req.url, req.method), req, res);
			if (!emited) {
				res.end();
			}
		});
	};

	_getRouteMask(path, method) {
		return `[${path}]:[${method}]`
	}

}