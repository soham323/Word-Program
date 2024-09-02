import PropTypes from 'prop-types'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import About from "./components/About";
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Router, Route, Routes} from 'react-router-dom'; 
import Contact from './components/Contact';
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null)

  // Show alert
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      }
    )
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  // toggle mode
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#10171f';
      showAlert("Dark Mode has been enabled", "Success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "Success");
    }
  }
  return (
    <>
        <Navbar  mode={mode} toggleMode={toggleMode}>
        </Navbar>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Alert alert={alert} />
      {/* <div className="about">
        <h1 className='aboutHeading my-3'>About Us</h1>
        <About/>
      </div> */}
      <div className="container">
        <TextForm heading="Enter the text to analyze" mode={mode} />
      </div>



    </>
  );
}
//  The prototypes are actually try catch block like thing which will not allow different data type.
Navbar.PropTypes = { title: PropTypes.string, aboutText: PropTypes.string, }

Navbar.defaultProps = { title: "Set title" }
export default App;
