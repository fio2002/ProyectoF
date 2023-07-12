//import dbData from './dbData.json';
const variablesEntorno = require("../model/dbData.json")
const mongo = require('mongodb').MongoClient;

class Login {

    iniciarSession(credenciales,callback){
       
        mongo.connect(variablesEntorno.URL,(err, db)=>{
            if (err) throw err;
            let mydb = db.db(variablesEntorno.DATABASE);
            mydb.collection(variablesEntorno.COLECCION).findOne(credenciales,(err,res)=>{
                if (err) throw err;
               
                db.close();
                return callback(res);
                
            })

        })
    }
}

module.exports = {
    Login : Login
}