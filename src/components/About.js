import React, { useState } from 'react'

export default function About() {
    const [mystyle,setMystyle] = useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btntext,setbtntext] = useState("Enable Dark Mode")

  const tooglestyle = () =>{
      if (mystyle.color==='white'){
      setMystyle({
        color:'black',
        backgroundColor:'white'
      })
      setbtntext('Enable Dark Mode');
    }
    else{
        setMystyle({
            color:'white',
            backgroundColor:'black'
        })
        setbtntext('Enable Light Mode');
    }
  }
  return (
    <div className='container my-3' style={mystyle}>
        <h1 className='mx-2 my-2'>About us</h1>
        <div className="accordion" style={mystyle} id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Our History
                </button>
                </h2>
                <div id="collapseOne"style={mystyle} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>We all belongs to a Coding Family and we are planning our Future together.</strong> 
                </div>
                </div>
            </div>
        </div>
        <button type='button' onClick={tooglestyle} className='btn btn-primary mx-2 my-3'>{btntext}</button>
      
    </div>
  )
}
