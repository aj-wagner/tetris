var api = require('./../controller/api.js')

module.exports = function(app){
	app.get('/', function(req, res){
		//res.render('index')

		api.index(req, res);
		//app.get('/', api.index);
	})


}