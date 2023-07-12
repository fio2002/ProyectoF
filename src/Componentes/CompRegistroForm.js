import React, { Component } from "react";

import { withRouter } from "../service/redirecciones";
import registrar from "../service/registrarService"


class CompRegistroForm extends Component {

    state = {
        form : {
            name:"",
            lastName:"",
            username:"",
            password:""
        },
        exito:false,
        error:false,
        msg:""
        
    }
    llenarData = async (e) => {
        await this.setState({
            form:{
            ...this.state.form,
            [e.target.name]: e.target.value
            }
        })
    }
    cancelar = (e)=>{
        e.preventDefault()
        this.props.navigate("/login")
    }

    validarData = (data)=>{
        let esCorrecto = true;
        console.log(data);
        Object.keys(data).forEach(key => {
            console.log(data[key])
            if (data[key] === undefined) {
                esCorrecto = false;
            }
        })
        return esCorrecto;

    }

    registrar = (e) =>{
        e.preventDefault()
        if (this.validarData(this.state.form)) {
            registrar(this.state.form, (res)=>{
                console.log(res);
                if (res.status === 200) {
                    this.setState({
                        exito : true
                    })
                    setTimeout( ()=>{
                        e.preventDefault()
                        this.props.navigate("/login");
                    },3000);
                    
                }else{
                    this.setState({
                        error : true,
                        msg:"Registro cancelado"
                    })
                }              
            })
        }else{
            this.setState({
                error : true,
                msg:"Datos incorrectos"
            })
        }

        
    }

  render() {
    return (
      <div className="container-sm w-75 mt-5">
        <p className="h3 text-secondary">Formulario de registro</p>
        <form onSubmit={this.registrar}>
        <div className="form-group">
          <label className="control-label">
            Nombre
          </label>
          <input
            type="text"
            className="form-control"
            id="txtName"
            name="name"
            onChange={this.llenarData}
          />
        </div>

        <div className="form-group">
          <label className="control-label">
            Apellidos
          </label>
          <input
            type="text"
            className="form-control"
            id="txtApellido"
            name="lastName"
            onChange={this.llenarData}
          />
        </div>

        <div className="form-group">
          <label  className="control-label">
            Nombre de usuario
          </label>
          <input
            type="text"
            className="form-control"
            id="street2_id"
            name="username"
            onChange={this.llenarData}
          />
        </div>

        <div className="form-group">
          <label  className="control-label">
            Contraseña
          </label>
          <input
            type="text"
            className="form-control"
            id="txtPassword"
            name="password"
            onChange={this.llenarData}
          />
        </div>

        <div className="row mt-3 text-center justify-content-center">
          <div className="col-3">
            <div className="form-group">
              <button  onClick={this.registrar} type="submit" className="btn btn-primary ms-2">
                Registrarse
              </button>
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <button 
            onClick={this.cancelar}
              type="submit" className="btn btn-danger">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
      {this.state.error === true &&
                <div className="alert alert-danger mt-3" role="alert">
                    {this.state.msg}
                </div>

            }
        {this.state.exito === true &&
                <div className="alert alert-success mt-3" role="alert">
                    Registrado con exito <br/> Redireccionando
                </div>

            }

      </div>
    );
  }
}

export default withRouter(CompRegistroForm);
