const raw = require('./raw.json');
module.exports = {
        Photos,
	Infos,
	InputToHex,
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

function InputToHex(...args){
        var target = ""
        for(var i2=0; i2<args.length;i2++){
                if(typeof(args[i2])=="string"){
                        var hex = Buffer.from(args[i2], 'utf8').toString('hex');
                        var count = 64-hex.length
                        for(var i=0; i<count;i++){
                                hex = "0"+hex
                        }
                        target = target + hex
                }else if(typeof(args[i2])=="number"){
                        var hex = parseInt(args[i2], 16);;
                        var count = 64-hex.toString().length
                        for(var i=0; i<count;i++){
                                hex = "0"+hex
                        }
                        target = target + hex
                }
        }
        return {"input":target}
}
