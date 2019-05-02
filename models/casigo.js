const nodes = require('./photo.js');
var request = require('request');

module.exports = {
	casigo: function (req, res, next){
		res.send(Math.round(Math.random()*37).toString())
	},
	sDAGpixel: function(req, res, next){
		res.send(nodes.Photos())
	},
	sDAGinfo: function(req, res, next){
		res.json(nodes.Infos())
        },
	sDAGinput: function(req, res, next){
		res.json(nodes.InputToHex(req.body.coordinate, req.body.url, req.body.introduction))
	}
}


