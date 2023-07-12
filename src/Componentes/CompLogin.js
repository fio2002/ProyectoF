import React,{Component} from "react";
//const mongo = require('mongodb').MongoClient;
import login  from "../service/apiConsume"

import { withRouter } from "../service/redirecciones";
import logo from "../logo192.png"
import "../App.css"

class CompLogin extends Component{
    
    state = {
        form : {
            username:"",
            password:""
        },
        error:false,
        msg:""
        
    }

    registrarForm = (e) =>{
        e.preventDefault();
        this.props.navigate("/registrar");

    }

    iniciarSesion = (e)=>{
        login(this.state.form,(res)=>{
            if (res.status === 200) {
                this.props.navigate("/home");
            }else{
                this.setState({
                    error : true,
                    msg:"Credenciales incorrectas"
                })
            }


           
            
        });
        
    }
    ver = (e)=>{
        
        console.log(this.state.form)
    }

    llenarData = async (e) => {
        await this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value
            }
        })
    }

    render(){
        return( 
        <div className="container-sm w-25 posicion shadow-lg p-5 mb-6 bg-dark rounded  ">
            
            <img className="w-75 ms-5 ronded-img p-3 mb-5 bg-body rounded"  src={logo}></img>
            
            <form onSubmit={this.iniciarSesion}>
                <div className="row">
                <input 
                type="text"
                placeholder="Usuario"
                className="form-control"
                name="username"
                onChange={this.llenarData}></input> 
                     
                </div>
<br/>
                <div className="row mt-1">
                <input 
                type="password"
                placeholder="Contraseña"
                className="form-control"
                name="password"
                onChange={this.llenarData}></input>      
                </div>
                 
                <br></br>
                <div className="row ">
                    <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={this.iniciarSesion}>Ingresar</button>
                </div>
                <br/>
                <div className="row ">
                    <button 
                    type="button"
                    className="btn btn-primary mt-1"
                    onClick={this.registrarForm}>Registrarse</button>
                </div>
            </form>

            {this.state.error === true &&
                <div className="alert alert-danger mt-3" role="alert">
                    {this.state.msg}
                </div>

            }
        </div>);
       
    }
   
}

export default withRouter(CompLogin);
