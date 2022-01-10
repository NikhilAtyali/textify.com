import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

//     const[myStyle,setMyStyle]= useState({
//         color:'black',
//         backgroundColor:'white'
//    })
   const [btnText, setBtnText] = useState('Enable Dark Mode')

  const handleOnChange = (event) => {
    console.log("changed");
    setText(event.target.value);
  };

  const handleOnClick = () => {
    console.log("Clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upper Case' , 'Success')

  };
  const handleOnClickLow = () => {
    console.log("Clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lower Case' , 'Success')
  };

  const handleOnClickClear=()=>{
       setText('');
       props.showAlert('Text area cleared' , 'Success')
     
  }

//    const handleOnClickDarkMode =()=>{
//             if(myStyle.color==='black'){
//                 setMyStyle({
//                     color:'white',
//                     backgroundColor:'black',
//                     border:'1px solid white'
//                 })
//                 setBtnText('Disable Dark Mode')
//             }else{
//                 setMyStyle({
//                     color:'black',
//                     backgroundColor:'white',
                    
//                 })
//                 setBtnText('Enable Dark Mode')
//             }
//    }
   const handleOnClickCopy =()=>{
    var copyText = document.getElementById("exampleFormControlTextarea1");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert('Text copied to clipboard' , 'Success')
   }
   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra spaces removed' , 'Success')
    }

  return (

    <div style={{color: props.mode=== 'dark'?'white':'black'}}>

      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          style={{color:props.mode==='dark'?'white':'black', backgroundColor:props.mode==='dark'?'grey':'white'}}
        //   style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <button className="btn btn-primary mx-2 " onClick={handleOnClick} >
        ToUpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleOnClickLow} >
        ToLowerCase
      </button>
      <button className="btn btn-primary  mx-2" onClick={handleOnClickClear} >
        Clear Text
      </button>
      {/* <button className="btn btn-primary  mx-2" onClick={handleOnClickDarkMode} style={myStyle}>
        {btnText}
      </button> */}
      <button className="btn btn-primary  mx-2" onClick={handleOnClickCopy} >
        Copy Text
      </button>
      <button className= "btn btn-primary mx-1" onClick={handleExtraSpaces}s> Remove Extra Spaces</button>
      {/* <button className= “btn btn-primary mx-1” onClick={handleExtraSpaces}>Remove extra spaces</button> */}
      <div className="container">
        <h2>Text Summery</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} Characters{" "}
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} Minutes Read</p>

        <h2>Preview</h2>
        {text.length>0?text :"Enter some text to preview"}
      </div>
    </div>
  );
};

export default TextForm;
