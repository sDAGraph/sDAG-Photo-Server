var flags = require('flags');
flags.defineString('port', null, 'serverport');
flags.defineInteger('ethrpc', null, 'ethRpc');
flags.defineInteger('thread', null, 'thread number');
flags.defineInteger('env', null, 'dev or prod');
flags.defineString('db', null, 'leveldbname');
flags.parse();

module.exports = {
        Config,
}

function Config(){
	var envset = flags.get('env');
	if(envset=="dev"){
		return {
                	port: flags.get('port')|| 3314,
                	thread: flags.get('thread')|| 1,
                	nodeRpc: flags.get('ethrpc')||"https://mainnet.infura.io/",
			vmdb: flags.get('db')||"devdb"
		}
	}else if (envset=="prod"){
                return {
                        port: flags.get('port')|| 4314,
                        thread: flags.get('thread')|| 1,
                        nodeRpc: flags.get('ethrpc')||"https://mainnet.infura.io/",
			vmdb: flags.get('db')||"prodb"
                }
	}else{
                return {
                        port: flags.get('port')|| 5314,
                        thread: flags.get('thread')|| 1,
                        nodeRpc: flags.get('ethrpc')||"https://mainnet.infura.io/",
                        vmdb: flags.get('db')||"randb"
                }
	}
}



