const fs = require('fs');
var array = []
var item = {
                "name": "July node",
                "owner": "0x1B5B5906306c96b842dc03105E3b38636A4EDa0b",
                "url": "",
                "price": "1000",
                "introduction": "my dream",
                "latitude": 1,
                "longitude": 1
        }
for(var i = 0;i<298;i++){
	i=i+1
	item["url"] = "https://picsum.photos/id/"+i.toString()+"/200/200?grayscale"
	array.push(item)
}
console.log(array)
fs.writeFileSync("raw.json", JSON.stringify(array));
