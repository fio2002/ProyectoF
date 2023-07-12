const crud  = require('./CrudMongo')
const log = require("./Login")

let cr = new crud.MongoCrud();
let init = new log.Login();

//console.log(cr.insertarUsuario({username:"elios",password:"magin"}));
init.iniciarSession({username:"chete",password:"hackstore"},(res)=>{
    console.log(res !==null ?"Encontrado":"No encontrado");
});