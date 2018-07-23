## mongoDB的CRUD

####插入并保存文档

```shell
#单文档插入
db.dbName.insert({name:"houhanbin"});
#多文档插
db.dbName.insert([{name:"zhangsan"},{name:"wangwu"},{name:"lisi"}])
```

####删除文档

```shell
#删除所有文档
db.dbName.remove({})
#根据条件删除
db.dbName.remove({name:"zhangsan"})
#清空集合中的所有文档,速度比remove方法快的多
db.dbName.drop()
```
######在shell插入大量数据
```javascript
for(var i=0;i<1000000;i++){
    db.dbName.insert({name:'name'+i});
}
```

####文档修改

#####文档替换
```shell
#用一个新文档替换旧文档（完全）
#写法1
var data=db.dbName.findOne({name:"update"});
data.age=12;
data.address=["北京市","海淀区","西二旗"];
db.dbName.update({name:"update"},data);
#写法2
var data={name:"update",age:12,address:["北京市","海淀区","西二旗"]};
db.dbName.update({name:"houhanbin"},data)
```
#####使用修改器（原子性？）

###### $set修改器
> $set修改器用来修改指定字段的值，如果这个字段不存在，mongodb会创建
```
db.dbName.update({name:"update"},{$set:{age:14,shortName:"hou"}})
```
###### $unset
> 删除字段
```shell
db.dbName.update({name:"update"},{$unset:{shortName:1}})
```

