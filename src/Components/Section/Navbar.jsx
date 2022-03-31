import React from 'react'
import {  Link } from "react-router-dom";
import Img from "../Images/logo.png"

const Navbar = () => {
  return (
    <>
    <div className="navbar-Display">
       <div >
        <img className="TheOne_logo" src={Img} alt="front logo images" />
        </div>
      <nav>
        <ul>
          <li className="Home-link">
            <Link to="/" className="  schedule text-decoration-none">Home</Link>
          </li>
          <li className="Feature-link">
            <Link to="/category" className="  categogy text-decoration-none">Feature</Link>
          </li>
          <li className="work-link">
            <Link to="/category" className="  categogy text-decoration-none">How it work</Link>
          </li>
          <li className="Pricing-link">
            <Link to="/category" className="  categogy text-decoration-none">Pricing</Link>
          </li>
          <li className="Team-link">
            <Link to="/category" className="  categogy text-decoration-none">Team</Link>
          </li>
          <li className="Client-link">
            <Link to="/category" className="  categogy text-decoration-none">Client</Link>
          </li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Navbar