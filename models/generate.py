array = []
item = {
                "name": "July node",
                "owner": "0x1B5B5906306c96b842dc03105E3b38636A4EDa0b",
                "url": "",
                "price": "1000",
                "introduction": "my dream",
                "sort":1
            }
for i in range(0,350):
    item["url"] = "https://picsum.photos/id/"+str(i)+"/1000/1000"
    item["sort"] = i
    target = item
    array.append(str(target))
print(array)
fo = open("raw.json", "w+")
target = str(array).replace("'", '"')
target2 = str(target).replace('"{', '{')
target3 = str(target2).replace('}"', '}')
line = fo.write(target3)
fo.close()
