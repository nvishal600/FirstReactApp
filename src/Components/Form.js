
import React, {useState} from 'react';

export function Form(props) {
    const [Text, setText] = useState('');
    let word_arr = Text.split(" ");
    let word_count = 0;

    const filter_arr = word_arr.filter(function(ele, index) {
        return ele !== "";
    });
    word_count = filter_arr.length;

    function updateText(e) {
        setText(e.target.value);
    }

    function convertUpperCase() {
        if (Text.length === 0) {
            props.showAlert("Please Enter Some Text", "warning");
        } else {
            let newText = Text.toUpperCase();
            setText(newText);
            props.showAlert("Convert to Uppercase", "success");
        }
    } 

    function convertLowerCase() {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase", "success");
    }

    function clearText() {
        setText('');
        props.showAlert("Clear All Text", "success");
    }

    function convertCapitalize() {
        let arr = Text.split(" ");
        
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== '') {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
        }
        let str2 = arr.join(" ");
        setText(str2);
        props.showAlert("Convert to Capitalize", "success");
    }

    function copyClipboard() {
        document.getElementById('exampleFormControlTextarea1').select();
        document.execCommand('copy');
        props.showAlert("Copy Clipboard", "success");
    }

    function extraSpaceRemove() {   
        let newText = Text.split(/[ ]+/);
        const arr_remove_space = newText.filter(function(ele, index){
            return ele !== '';
        });
        setText(arr_remove_space.join(" "));
        props.showAlert("Remove Extra Space", "success");
    }

  return (
    <>
        <div className={`my-4 container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <h1>{props.heading}</h1>
        <textarea className={`form-control my-4 text-${props.mode === 'light' ? 'dark' : 'light'}`} style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white'}} value={Text} onChange={updateText} id="exampleFormControlTextarea1" rows="8"></textarea>
        <button disabled={word_count===0} className='btn btn-primary mx-1 my-2' onClick={convertUpperCase}>Convert UpperCase</button>
        <button disabled={word_count===0} className='btn btn-primary mx-1 my-2' onClick={convertLowerCase}>Convert LowerCase</button>
        <button disabled={word_count===0} className='btn btn-primary mx-1 my-2' onClick={convertCapitalize}>Convert Capitalize</button>
        <button disabled={word_count===0} className='btn btn-primary mx-1 my-2' onClick={copyClipboard}>Copy Clipboard</button>
        <button disabled={word_count===0} className='btn btn-primary mx-1 my-2' onClick={extraSpaceRemove}>Extra Space Remove</button>
        <button disabled={word_count===0} className='btn btn-primary mx-1 my-2' onClick={clearText}>Clear Text</button>
        </div>
        <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <h1>Your Text Summary</h1>
            <p>{word_count} word and {Text.length} characters</p>
            <p>{0.032 * word_count} minutes read</p>
            <h2>Preview</h2>
            <p>{Text.length > 0 ? Text : "Nothing to Preview"}</p>
        </div>
    </>

  )
}
