const Router = require('../framework/Router');


const router = new Router();

const users = [
	{ id: 1, name: 'Ruslan' },
	{ id: 2, name: 'Reznick' },
]

router.get('/users', (req, res) => {
	res.writeHead(200, {
		'Content-type': 'Application/json'
	})
	res.end(JSON.stringify(users));
})



module.exports = router