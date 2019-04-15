var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.51.202:27017/";

MongoClient.connect(url, { useNewUrlParser: true },function(err, db) {
	if (err) throw err;
	var dbo = db.db("sDAG_scan");
	dbo.collection("sDAG_block").findOne({}, function(err, result) {
		if (err) throw err;
		console.log(result);
		db.close();
	});
});
