const web3 = require('web3');

web3js = new web3(new web3.providers.HttpProvider("https://kovan.infura.io"));
var address = "0x0c68b2e0f953c4907b5e743a55741996d2a65187"
var abi = [
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "coor",
                                "type": "uint256"
                        },
                        {
                                "name": "coimage",
                                "type": "string"
                        },
                        {
                                "name": "introduction",
                                "type": "string"
                        }
                ],
                "name": "buyCoordinator",
                "outputs": [],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
        },
        {
                "constant": false,
                "inputs": [
                        {
                                "name": "bal",
                                "type": "uint256"
                        }
                ],
                "name": "getBalance",
                "outputs": [
                        {
                                "name": "result",
                                "type": "bool"
                        }
                ],
                "payable": true,
                "stateMutability": "payable",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "name": "ImageData",
                "outputs": [
                        {
                                "name": "image",
                                "type": "string"
                        },
                        {
                                "name": "introduction",
                                "type": "string"
                        },
                        {
                                "name": "owner",
                                "type": "address"
                        },
                        {
                                "name": "time",
                                "type": "uint256"
                        },
                        {
                                "name": "dyn",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [
                        {
                                "name": "coor",
                                "type": "uint256"
                        }
                ],
                "name": "imagePrice",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        },
        {
                "constant": true,
                "inputs": [],
                "name": "price",
                "outputs": [
                        {
                                "name": "",
                                "type": "uint256"
                        }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
        }
]

var MyContract = new web3js.eth.Contract(abi, address);

module.exports = {
        Contract,
	GetPrice,
	OutDecode,
	buyCoordinatorHex,
	GetSymbol
}

function GetPrice(res,cor){
	MyContract.methods.imagePrice(cor).call({"from":"0xf8a6D36F5167d91949808a3F6e578506F0A167Aa"},function(e,v){res.json([{"price": parseInt(v["_hex"],16)}])})
}

function Contract(cor, url, intro){
	var hex = MyContract.methods.buyCoordinator(cor,url,intro).encodeABI()
	return hex
}

function OutDecode(args, str){
	return web3js.eth.abi.decodeParameters(args, str)
}

function buyCoordinatorHex(coor,coimage,introduction,tokens){
	//var abic = JSON.parse(fs.readFileSync("buyCoordinator.json"));
	let abic = require("./buyCoordinator");
	var input = web3js.eth.abi.encodeFunctionCall(abic,[coor,coimage,introduction,tokens]);
	return input;
}
function GetSymbol(ret){
	ret = "0x" + ret;
	return web3js.eth.abi.decodeParameter('string',ret);
}
