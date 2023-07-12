var mongo = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
mongo.connect(url,function(err,db){  
    if (err) throw err;
    console.log("Conexion exitosa!!");
    db.close();
});  
module.exports = mongo;    