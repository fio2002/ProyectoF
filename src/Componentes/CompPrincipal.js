import React,{Component} from "react";
//const mongo = require('mongodb').MongoClient;
import "../principal.css"

class CompPrincipal extends Component{
    render(){
       
        return(<>
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <div class="container-fluid">
        <span class="navbar-brand">IDAT_IV</span>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
      <li class="nav-item">
      <span class="nav-link active" aria-current="page" >¿Quienes somos?</span>
      </li>
      </ul>
      </div>
        </div>
        </nav>
        <main>
        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>  
                <div class="carousel-inner">
                <div class="carousel-item active">
                <center>
                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkt0psRk7EpKK2YRjKZqvOi_wwCtbOqR7kPQ&usqp=CAU"  width="1100" height="350"/>
                   </center>
                  
                </div>

        </div>
        <div class="carousel-inner">
                <div class="carousel-item active">
                <center>
                   <img src="https://online.ucam.edu/sites/online.ucam.edu/files/styles/noticia_full/public/imagenes/noticias/ingenieria_informatica.jpg?h=63419860&itok=q3OULvL0"/>
                   </center>
                  
                </div>

        </div>
        <div class="carousel-inner">
                <div class="carousel-item active">
                <center>
                   <img src="https://placasybotones.com/wp-content/uploads/2019/12/hebillas-de-correa.jpg"  width="1100" height="350"/>
                   </center>
                  
                </div>

        </div>
    </div>
    
        
        </main>
            <div className="full-container image-wall"></div>

         </>
           
            
        );
    }

}

export default CompPrincipal;