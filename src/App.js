// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode=()=>{
    if (mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enebled", "Success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enebled", "Success")
    }
  }

  const showAlert = (message, type) =>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },2000)
  }


  return (
    <div className="App">
       {/* <BrowserRouter>
       <Routes> */}
       
      <Navbar  title="Text Utils" home="About Home" about="About the website"  mode= {mode} toggleMode={toggleMode}/>
      <div className='container my-3'>

      <Alert  alert={alert}/>

      <TextForm heading="Enter the text to analyze" mode={mode}  showAlert={showAlert} />
      </div>
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
