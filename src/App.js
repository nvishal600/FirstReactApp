import React from 'react';
import About from './Components/About';
import {Navbar} from './Components/navbar';
import {Form} from './Components/Form';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#020918';
      showAlert("dark mode enable", "success");
      // setInterval(() => {
      //   document.title = "VIRUS !!!!!!!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "WARNING !!!!!!!!!";
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode enable", "success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode}  about="About TextUtils"></Navbar>
        <Alert alert = {alert} />
          <Routes>
            <Route exact path="/about" element = {<About/>}/>
            <Route exact path="/FirstReactApp" element = {<Form showAlert = {showAlert} heading="Enter Text Here" mode = {mode}/>}/>
            {/* <Form showAlert = {showAlert} heading="Enter Text Here" mode = {mode} />  */}
          </Routes>
      </Router>
    </>
  );
}

export default App;