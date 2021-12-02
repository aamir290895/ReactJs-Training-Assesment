import './App.css';
import Student from './Components/Student';
import StudentApplication from './Components/StudentApplication';
import { Routes,Route } from 'react-router';


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

                    <Routes>

                          <Route path = {'/home'}   exact element ={<Home/>}></Route>
                          <Route path = {'/student'} element = {<Student/>}></Route>

                            


                     </Routes>
            
               <Footer/>     
    </div>

  );
}

export default App;
