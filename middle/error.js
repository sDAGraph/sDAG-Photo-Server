class Msg{
	constructor(req, res){
		this.time = Date.now();
		this.url = req.url;
		this.result = {};
	}
}

module.exports = function (app) {
	app.use(function (err,req, res, next) {
		var msg = new Msg(req,res)
		res.status(500).send({"error":err,"status":500,"code":"500","response":msg})
	})

	app.use(function (req, res, next) {
		var msg = new Msg(req,res)
		res.status(404).send({"status":404,"code":"404","response":msg});
	})
}

