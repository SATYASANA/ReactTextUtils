
import './App.css';
import Navbar from './Navbar';
import TextForm from './TextForm';
import About from "./About"
import { useState } from 'react';
import Alert from './Alert';
import {BrowserRouter,
  Routes,
  Route,
  
} from 'react-router-dom';
function App() {
  const [name,setName]=useState("Enable Light Mode")
  //const [textColor,setTextColor]=useState("light")
  const [mode1,setMode1]=useState("#E21717")
  const [text,setText]=useState("Enable Red Mode")

  
  const toggleMode1=()=>{
    if(mode1==="#E21717"){
      setMode1("#FF6666")
      setText("Enable Red mode")
      document.body.style.backgroundColor="#FF6666"
      
      showAlert("pink mode has beens enabled","success")
    }
    else{
      setMode1("#E21717")
      setText("Enable Pink Mode")
      document.body.style.backgroundColor="#E21717"
      
      showAlert("Red mode has been enabled","success")
      
    }
  }
const [mode,setMode]=useState("dark")
const [alert,setAlert]=useState(null);
const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}
const toggleMode=()=>{
  if(mode==="light"){
    setMode("dark")
    // setTextColor("light")
    setName("Enable Light  Mode")
    document.body.style.backgroundColor="#03203C"
    showAlert("Dark Mode has been eanbled","success")
  }
  else{
    setMode("light")
    // setTextColor("dark")
    setName("Enable Dark Mode")
    document.body.style.backgroundColor="#E5D68A"
    showAlert("Light Mode has been enabled","success")
  }
}
  return (
    
  <>
  <BrowserRouter>
  <Navbar title={"TextUtils"} text={text}mode={mode} name={name} toggleMode1={toggleMode1} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className='container'>
 <Routes>
    
    
      <Route path='/about' element={  <About />}/>
    
      <Route path="/" element= {<TextForm title={"Enter your text"} mode={mode} heading={"Enter the text to Analyze"} showAlert={showAlert} />}/>
      

    
</Routes>
 </div>
 </BrowserRouter>
   </>
  );
}

export default App;
