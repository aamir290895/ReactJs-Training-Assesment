import React,{Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from "./Components/logo_nsp.jpeg"
import {Link} from 'react-router-dom'


export default class Header extends Component {

    render(){

       return (
        <>
         <div class="container">
               <div class="row">
                    <div class="col-4 col-lg-2">
                    <img id = "logo" src={img1}  alt="image" className="logo_nsp"></img>

                    </div>
               <div class="col-md-8">
               <div className="nsp_header">
                     <h1>National Scholarship Portal</h1>
                   <h2>Government of India</h2>
               </div>
               </div>
                    </div>
         </div>
   
       <div className="nsp_header">
        <div class ="col">   
     
       </div>
       </div>
      

       <div class="shadow p-3 mb-5 bg-body rounded">
         <div class="container-md">
         
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
         {/* <a class="navbar-brand" href="#">Home</a> */}
         <Link  to={'/home'}>Home</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">About Us</a> */}
          <Link to={'/student'}>Student</Link>

        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">Contact Us</a> */}
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="#">New Registration</a> */}
        </li>
        
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
         
         
         
         
         
         </div>
       </div>

        </>
       );


    }



}