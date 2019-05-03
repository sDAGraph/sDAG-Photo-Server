const nodes = require('./photo.js');
var request = require('request');
var contract = require('./contract.js');

module.exports = {
	casigo: function (req, res, next){
		res.send(Math.round(Math.random()*37).toString())
	},
	sDAGpixel: function(req, res, next){
		req.app.locals.sDAG_db.collection(req.query.collection||'pixelPhoto').find(req.query.target||{}).sort({ timestamp: parseInt(req.query.sort)||-1 }).limit(parseInt(req.query.limit)||300).toArray().then(response => {	res.status(200).json(response)}).catch(error => console.error(error));
		//res.send(nodes.Photos())
	},
	sDAGinfo: function(req, res, next){
		res.json(nodes.Infos())
        },
        sDAGprice: function(req, res, next){
		//console.log(contract.GetPrice(req.body.coordinate))
                //res.json([{"price":contract.GetPrice(req.body.coordinate)}])
		contract.GetPrice(res,req.body.coordinate)
	},
	sDAGinput: function(req, res, next){
		//res.json(nodes.InputToHex(req.body.coordinate, req.body.url, req.body.introduction))
		res.json([{"input":contract.Contract(req.body.coordinate, req.body.url, req.body.introduction)}])
	}
}


