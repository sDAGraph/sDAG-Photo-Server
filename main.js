var express = require('express');
var setting = require('./config/default');
var config = setting.Config();
var routes = require('./routes');
var cluster = require('cluster');
var middle_error = require('./middle/error');
var middle_normal = require('./middle/normal');
var cors = require('cors');
var app = express();
var basic = require('./basic.js');
const MongoClient = require('mongodb').MongoClient;

app.use(cors())
app.set('port', config.port);
var numCPUs = 1;

MongoClient.connect("mongodb://192.168.51.203:27017", { useNewUrlParser: true })
	.then(client => {
		const sDAG_db = client.db('sDAG_scan');
		app.locals.block_col = sDAG_db.collection('sDAG_block');
		app.locals.transaction_col = sDAG_db.collection('sDAG_transaction');
		app.locals.sDAG_db = client.db('sDAG_scan');
}).catch(error => console.error(error));

basic.portInUse(config.port, function(returnValue) {
	console.log("port is used:",returnValue)
	if(!returnValue){
		if (cluster.isMaster) {
			for (var i = 0; i < numCPUs; i++) {	
				cluster.fork();
			}	
			cluster.on('listening', (worker, address) => {
				console.log(config.port,address);
			});
			cluster.on('exit', (worker, code, signal) => {
				console.log('worker ' + worker.process.pid + ' died');
				cluster.fork();
			});
		} else {
			app.listen(app.get('port'));
		}
	}else{
		process.exit()
	}
});
console.log("node main --port 11111 --ethrpc 192.168.51.203:9999 --thread 5")
console.log("curl -X GET 'http://127.0.0.1:5314/casigo'")
middle_normal(app)
routes(app);
middle_error(app);
module.exports = app
