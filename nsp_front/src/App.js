import './App.css';
import Student from './Components/Student';
import StudentApplication from './Components/StudentApplication';
import { Routes,Route } from 'react-router-dom';

import Ministry from './Components/Ministry';
import InstituteApplication from './Components/InstituteApplication';
import Scheme from './Components/Scheme';
import StateNodal from './Components/StateNodal';
import Home from './Components/Home';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
              <Header/>

                <div className = "Content">
                  {/* <Routes>
                          <Route path = "/home" exact component = {Home}></Route>
                          <Route path = "/employees" component = {Student}></Route>
                          <Route path = "/add-employee/:id" component = {StudentApplication}></Route>
                          <Route path = "/view-employee/:id" component = {Ministry}></Route>
                          <Route path = "/view-employee/:id" component = {InstituteApplication}></Route>
                          <Route path = "/view-employee/:id" component = {Scheme}></Route>
                          <Route path = "/view-employee/:id" component = {StateNodal}></Route>


                  </Routes>   */}
                </div>
               <Footer/>     
    </div>
  );
}

export default App;
