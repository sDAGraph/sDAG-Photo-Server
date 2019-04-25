const raw = require('./raw.json');
module.exports = {
        Photos,
	Infos,
}

function Photos(){
	return raw;
}

function Infos(){
        return {
		"24Huser":5748,
		"totaluser":50698,
		"contactBalance":230.5,
		"24Htransaction":982365,
		"totalTransaction":43237439
	}
}
