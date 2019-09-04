const nodes = require('./photo.js');
var request = require('request');
var contract = require('./contract.js');

module.exports = {
	casigo: function (req, res, next){
		res.send(Math.round(Math.random()*37).toString())
	},
	sDAGpixel: function(req, res, next){
		req.app.locals.sDAG_db.collection(req.query.collection||'pixelPhoto').find(req.query.target||{}).sort({ timestamp: parseInt(req.query.sort)||-1 }).limit(parseInt(req.query.limit)||300).toArray().then(response => {	res.status(200).json(response)}).catch(error => console.error(error));
	},
	sDAGinfo: function(req, res, next){
		req.app.locals.sDAG_db.collection(req.query.collection||'pixelInfo').find(req.query.target||{}).sort({ timestamp: parseInt(req.query.sort)||-1 }).limit(parseInt(req.query.limit)||300).toArray().then(response => {   res.status(200).json(response[0])}).catch(error => console.error(error));
		//res.json(nodes.Infos())
        },
        sDAGprice: function(req, res, next){
		contract.GetPrice(res,req.body.coordinate)
	},
	sDAGinput: function(req, res, next){
		res.json([{"input":contract.Contract(req.body.coordinate, req.body.url, req.body.introduction)}])
	},
	sDAGdecode: function(req, res ,next){
		res.send(contract.OutDecode(req.body.args, req.body.str))
	},
	sDAGbuyCoordinator: function(req, res, next){
		let inputHex = contract.buyCoordinatorHex(req.body.coor, req.body.coimage, req.body.introduction, req.body.tokens).replace("0x","");
		res.json([{"input":inputHex}]);
	},
	sDAGsymbol:function(req, res, next){
		res.json({"symbol":contract.GetSymbol(req.body.ret)});
	}
}


