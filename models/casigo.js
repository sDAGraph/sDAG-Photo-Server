const nodes = require('./photo.js');
var request = require('request');

module.exports = {
	casigo: function (req, res, next){
		res.send(Math.round(Math.random()*37).toString())
	},
	sDAGpixel: function(req, res, next){
		res.send(nodes.Nodes())
	},
	sDAGinfo: function(req, res, next){
		console.log(nodes.Infos())
		res.json(nodes.Infos())
        }
}


