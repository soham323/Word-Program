import PropTypes from 'prop-types'
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './TextForm';
import About from "./components/About";
function App() {
  return (
    <>

      <Navbar title="TextUtils" aboutText="about TextUtils">
      </Navbar>
      <div className="about">
        <h1 className='aboutHeading my-3'>About Us</h1>
        <About/>
      </div>
      <hr />
      <hr />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
      </div>

      

    </>
  );
}
//  The prototypes are actually try catch block like thing which will not allow different data type.
Navbar.PropTypes = { title: PropTypes.string, aboutText: PropTypes.string, }

Navbar.defaultProps = { title: "Set title" }
export default App;
