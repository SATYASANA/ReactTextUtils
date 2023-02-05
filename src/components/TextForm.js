import React, { useState } from 'react'
import PropTypes from 'prop-types';
export default function TextForm(props) {
  
    const handleUpClick=()=>{
       let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase","success");
    }
    const handleOnchange=(event)=>{
        setText(event.target.value);

    }
    const handleLowClick=()=>{
      let newtEXT=text.toLowerCase();
      setText(newtEXT)
      props.showAlert("converted to lowercase","success")
    }
    const clearText=()=>{
      let newText=text.replace(text,"");
      setText(newText);
      props.showAlert("text has been cleared","success")
      
    }
    const handleCopy=()=>{
     let text=document.getElementById('myBox');
     text.select();
     navigator.clipboard.writeText(text.value)
     props.showAlert("text has been copied","success");

    }
    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("extra space has been removed","success")
    }
    const [text,setText]=useState("")
  return (
    <>
<div>
<h1 style={{color:props.mode==="dark"?"white":"black"}}>{props.heading}</h1>
<div className="mb-3">
  
  <textarea  className="form-control" style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"} } id="myBox" rows="8" onChange={handleOnchange} value={text}>{props.title}</textarea>
</div>
<button  className="btn btn-primary mx-2" onClick={handleUpClick}>convert to upper case</button>
<button  className="btn btn-primary mx-2" onClick={handleLowClick}>convert to lower case</button>
<button  className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
<button  className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button  className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Space</button>
</div>
<div className='container my-3'>
<h1  style={{color:props.mode==="dark"?"white":"black"}}>Your text summary</h1>
<p  style={{color:props.mode==="dark"?"#50DBB4":"black"}}>{text.split(" ").length} words and {text.length} text</p>
<p  style={{color:props.mode==="dark"?"#50DBB4":"black"}}>{0.008*text.split(" ").length} Minutes read</p>
<h2  style={{color:props.mode==="dark"?"white":"black"}}>Preview</h2>
<p style={{color:props.mode==="dark"?"#50DBB4":"black"}}>{text.length>0?text:"Enter something in the text box above to preview here"}</p>
</div>
</>
 
  )
}
TextForm.propTypes={
    title:PropTypes.string,
    heading:PropTypes.string
}
