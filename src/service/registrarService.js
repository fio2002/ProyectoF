import axios from "axios";
import data from "../variables/data.json"

const registrar = (form,callback) =>{
    let url = data.API + data.REGISTRAR;
    axios.post(url,form)
    .then(response => {
        callback(response);

        //Si existe un error 
    }).catch( error =>{
        callback(error)
    })


}

export default registrar;