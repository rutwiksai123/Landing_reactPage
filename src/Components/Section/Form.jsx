import React from 'react'
import "../Style/Form.css"
const Form = () => {
  return (

    <div className='form-container' >
      <h1 className='form_heading'>Register Now, it's <sapn style={{ color: "#22936C" }}>Free</sapn></h1>
      <p className='form_paragraph'>Complete the below form to get instant access.</p>
      <input style={{padding:"1rem"}} type="email" placeholder='Email' />
      <input style={{padding:"1rem"}} type="text" placeholder='Username'/>
      <input style={{padding:"1rem"}} type="password" placeholder='Password'/>
      <input style={{padding:"1rem"}} type="password" placeholder='Confirm Password'/>
      <div className='term_condition'>
        <div className='check_conditions'>  
          <input className='checkBox' type="checkbox" name="" id="" /><span>Terms & Conditions</span>
        </div>
        <button className='registration_btn'>Register</button>
      </div>
    </div>

  )
}

export default Form