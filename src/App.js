import { useState } from 'react';
import About from './components/About';
import Alert from './components/Alert';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [alert,setAlert] = useState(null);
  const changeAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
      setAlert(null);
    },5000);
  }
  const [mode,setMode] = useState('light'); // whether dark mode is enable or not
  const toggleMode = ()=>{
    if (mode==='dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      changeAlert("Light mode has been Enabled","success");
    } else{
      setMode('dark');
      document.body.style.backgroundColor = '#042743'
      changeAlert("Dark mode has been Enabled","success");
    }
  }
  return ( 
  <>
  <Router>
  <Navbar title="Text Analyzer" mode={mode} togglemode={toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Routes>
      <Route path="/" element={<Form />} />
      <Route path="about" element={<About />} />
    </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
