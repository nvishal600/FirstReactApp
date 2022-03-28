import React, {useState} from 'react'

export default function About(props) {

  return (
    <div className={`container my-4 py-3 text-${props.mode === 'light' ? 'dark' : 'light'}`} >
        <h1>About</h1>
        <div className="accordion my-3" id="accordionExample"  >
            <div className="accordion-item" style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white'}} >
                <h2 className="accordion-header" id="headingTwo" >
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white',  border: '1px solid white'}} >
                    <strong>Analyze Your Text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style = {{border: '1px solid white'}}>
                    TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or extra space remove
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white'}} >
                <h2 className="accordion-header" id="headingTwo">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white',  border: '1px solid white'}} >
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style = {{border: '1px solid white'}}>
                    TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white'}}>
                <h2 className="accordion-header" id="headingThree">
                <button className={`accordion-button collapsed text-${props.mode === 'light' ? 'dark' : 'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {{backgroundColor: props.mode === 'dark' ? '#020918' : 'white', border: '1px solid white'}} >
                    <strong>Browser Compatible</strong>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body"  style = {{border: '1px solid white'}}>
                    This word counter software works in any web browers such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
