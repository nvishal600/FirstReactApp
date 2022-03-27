import React from 'react';
// import {Form} from './Components/Form';

export default function Alert(props) {
  const CapitalizeWord = (word) =>{
    const lower = word.toLowerCase(); // hello  ->  hello
    return lower.charAt(0).toUpperCase() + lower.slice(1);  // hello  ->  Hello
  }
    
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{CapitalizeWord(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}
