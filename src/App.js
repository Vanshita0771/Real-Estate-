import React from 'react';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Best from './components/Best.js';
import Featured from './components/Featured.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';
import { Route,Routes}  from "react-router-dom";
import Properties from './components/Properties.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Main/>}/ >
         <Route path='/about' element={<About/>}/>
         <Route path='/properties' element={<Properties/>}/>
         <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;
