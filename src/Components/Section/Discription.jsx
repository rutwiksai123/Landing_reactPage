import React from 'react'
import Img from "../Images/logo.png"
import "../Style/Discription.css"
// import 'bootstrap/dist/css/bootstrap.min.css'

const Discription = () => {
  return (
      
        <div className='disr'>
           <h1>This is <img  src={Img} alt=""/> </h1 >
            <h3 className=''>The Best Marketing / Landing Page Template</h3>
           <p className='disc_para'>Qusinque rhoncus tempus sem sed ornare. Aenean viverra ornare dui nec mollis. Vestibulum in dui sed velit consequat. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
          <div className='disc_btn'>
            <button className=' leran_btn'>Learn more</button>
            <button className='our_btn'>Our Pricing</button>
          </div>
        </div>
        
  )
}

export default Discription