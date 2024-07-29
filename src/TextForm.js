import React, { useState } from 'react'
import './App.css';
export default function TextForm(props) {
    const [text, setText] = useState("");
    // setText("new Text");
    const [changeText, setChange] = useState("");
    const handleUpClick = () => {
        console.log("Uppercase Clicked" + text)
        let newText = text.toUpperCase();
        setText(newText)

    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value)
    }
    const handleChange = (event) => {
        console.log("on change");
        setChange(event.target.value)
    }
    const handleLoClick = () => {
        console.log("lowercase clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () => {
        console.log("clear clicked " + text)
        let newText = "";
        setChange(newText)
        setText(newText)
    }
    const WordChange =() =>{
        console.log("Word Changed" + changeText)
        let changeWord = changeText;
        setText(changeWord)
    }
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <form>
                    <div class="form-group">
                        <label for="MyEmail">Email address</label>
                        <input type="email" class="form-control" id="MyEmail" value={text} onChange={handleOnChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="changeWord">
                        <label htmlFor="WordChange">Word to Change With</label>
                        <br />
                        <input class="form-control" type="text" name="WordChange" id="WordChange" value={changeText} onChange={handleChange} />
                    </div>
                </form>
                <br />
                <div className="container">
                    <div className="row">
                        <div className='col-4'>
                            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
                        </div>
                        <div className='col-4'>
                            <button className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
                        </div>
                        <div className="col-sm changeWord">
                            <button className="btn btn-warning" onClick={WordChange}>
                                Change Word 
                            </button>
                        </div>
                        <div className="clearButton col-1">
                            <button className="btn btn-danger clear" onClick={handleClear}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container my-2">
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").length} Words & {text.length} characters.</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text}</p>
                </div>
            </div>
        </>

    )
}
