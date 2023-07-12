const express = require('express')
const login = require("./service/Login")
const crud = require("./service/CrudMongo")
const cors = require("cors")

//Definicion de variables
const app = express();
app.use(express.json());
app.use(cors());
const iniciar = new  login.Login();
const registrar = new crud.MongoCrud();

app.get('/', function (req, res) {
  res.send('Hello World')
})

//Método para iniciar sesion
app.post("/api/",function(req, res){
    const credenciales = {
        username: req.body.username,
        password:req.body.password
    }
    
    iniciar.iniciarSession(credenciales,(resp)=>{
        if (resp !== null) {
            res.send("Autorizado")
        }else{
            res.statusCode = 404;
            res.send("No autorizado");
        }
        
    })
})

//Método para registrar
app.post("/api/registrar", function (req, res){
    const data = {
        name: req.body.name,
        lastName: req.body.lastName,
        username: req.body.username,
        password: req.body.password,
    }
    let valido = true;
   Object.keys(data).forEach(k => {
        if (data[k] === undefined) {
            valido = false;
        }
   });

   if (valido) {
    registrar.insertarUsuario(data,(resp)=>{
        if (resp !== null) {
            res.send("registrado con exito");

        }else{
            res.statusCode = 500;
            res.send("Error al registrar");
        }
    });

   } else {
    res.statusCode = 400;
    res.send("Data invalida");
   }

    


});
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000
app.listen(port,host,()=>{
    console.log("api iniciada")
});