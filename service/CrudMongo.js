//import dbData from './dbData.json';
const variablesEntorno = require("../model/dbData.json")

var mongo = require('mongodb').MongoClient;

class MongoCrud{
    constructor(){};
    //La clase solo implementa el registrar

     insertarUsuario(usuario, callback){
        
        let respuesta = "Usuario registrado con exito";
        mongo.connect(variablesEntorno.URL, (err,db)=>{
            if(err) throw err;
            
            let mydb = db.db(variablesEntorno.DATABASE);
            mydb.collection(variablesEntorno.COLECCION).insertOne(usuario, (err, res)=>{
                db.close();
                return callback(res);
                
            });

        })
        
        
    }
}

module.exports = {MongoCrud: MongoCrud}


