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
    //Copy Function
    const handleCopy = () => {
        var text = document.getElementById("MyEmail")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
    }
    return (
        <>
            <div>
                <h1>{props.heading}</h1>
                <form>
                    <div class={`form-group ${props.mode} bg-${props.mode}`}>
                        <label for="MyEmail">Email address</label>
                        <input type="email" class="form-control" id="MyEmail" value={text} onChange={handleOnChange} />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className={`changeWord ${props.mode} bg-${props.mode} `}>
                        <label htmlFor="WordChange">Word to Change With</label>
                        <br />
                        <input class="form-control" type="text" name="WordChange" id="WordChange" value={changeText} onChange={handleChange} />
                    </div>
                </form>
                <br />
                <div className="container">
                    <div className="row">
                        <div className='col-2'>
                            <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                        </div>
                        <div className='col-2 mx-1 my-1'>
                            <button disabled={text.length===0}  className="btn btn-primary" onClick={handleLoClick}>Convert to Lowercase</button>
                        </div>
                        <div className="col-2 changeWord mx-1 my-1">
                            <button disabled={text.length===0}  className="btn btn-warning" onClick={WordChange}>
                                Change Word 
                            </button>
                        </div>
                        <div className="clearButton col-2 mx-1 my-1">
                            <button disabled={text.length===0}  className="btn btn-danger clear " onClick={handleCopy}>
                                Copy
                            </button>
                        </div>
                        <div className="clearButton col-1 mx-1 my-1">
                            <button disabled={text.length===0}  className="btn btn-danger clear" onClick={handleClear}>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container my-2">
                    <h1>Your text summary</h1>
                    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words & {text.length} characters.</p>
                    <p>{0.008 * text.split(" ").length} Minutes to read</p>
                    <h2>Preview</h2>
                    <p>{text.length>0?text:"Enter your text to Preview"}</p>
                </div>
            </div>
        </>

    )
}
