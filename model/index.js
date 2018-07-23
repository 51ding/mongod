var mongoose=require("mongoose");

mongoose.set("debug",true);

mongoose.connect("mongodb://127.0.0.1:27017/delivery",function(err){
    if(err){
        console.log(`数据库启动失败,失败原因:${err.message}`);
        process.exit(1);
    }
    else{
        console.log("数据库启动成功！");
    }
})