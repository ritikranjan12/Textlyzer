import React,{useState} from 'react'

export default function Form(props) {
    const handleUpClick = () => {
        props.changeAlert("Uppercase has been Enabled","success")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handlelowClick = () => {
      props.changeAlert("Lowercase has been Enabled","success")
      let newText = text.toLowerCase();
      setText(newText)
  }
  const clear = () => {
    props.changeAlert("Text had been Cleared","success")
    let newText = '';
    setText(newText)
}
const speak = () => {
  props.changeAlert("Speak function has been Enabled","success")
  let msg = new SpeechSynthesisUtterance();
  msg.text = text;
  window.speechSynthesis.speak(msg);
}
    const handleOnchange = (event) => {
      setText(event.target.value);
    }
  const [text,setText] = useState('');
  
  return (
    
      <>
      
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        
        <textarea className='form-control my-3' style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} rows='6' id='mybox' value={text} onChange={handleOnchange}></textarea>

       
  <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-2 my-2">Convert to Uppercase</button>
  <button type="submit" onClick={handlelowClick} className="btn btn-secondary mx-2 my-2">Convert to lowercase</button>
  <button type="submit" onClick={clear} className="btn btn-success mx-2 my-2">Clear Text</button>
  <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
</div>
  <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.length>0?text.split(" ").length:0} words,{text.length} characters </p>
    <p id='readtime'>Total {text.split(" ").length * 0.008} min read time </p>
    <h3>
      Preview
    </h3>
    <p>{text.length>0?text:"Enter your Text in textbox to preview"}</p>
  </div>
</>
  )
}
