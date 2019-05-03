class Msg{
	constructor(req, res){
		this.time = Date.now();
		this.url = req.url;
		this.result = {};
	}
}

module.exports = function (app) {
	app.use(function (err, req, res, next) {
		var re = {}

		re["error"] = "500"
  		re["status"] = "5"
       	re["url"] = req.url
		re["time"] = Date.now()
		re["code"] = err.toString()

		console.error(re)
       	res.status(500).send(err)
	})

	app.use(function (req, res, next) {
		var msg = new Msg(req,res)
		res.status(404).send({"status":404,"code":"404","response":msg});
	})
}

