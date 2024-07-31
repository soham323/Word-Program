import PropTypes from 'prop-types'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import About from "./components/About";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not

  // toggle mode
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = 'white';

    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="about TextUtils" mode={mode} toggleMode={toggleMode}> 
      </Navbar>
      <div className="about">
        <h1 className='aboutHeading my-3'>About Us</h1>
        <About/>
      </div>
      <hr />
      <hr />
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode}/>
      </div>

      

    </>
  );
}
//  The prototypes are actually try catch block like thing which will not allow different data type.
Navbar.PropTypes = { title: PropTypes.string, aboutText: PropTypes.string, }

Navbar.defaultProps = { title: "Set title" }
export default App;
