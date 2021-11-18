import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "./images/logo.png"
import "./Navbar.css"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <div className="header">
      <nav className="navbar">
        <a href="" className="loogo">
          <img src={logo} alt="logo" />
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#fff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="/">home</a>
          </li>
          <li className="nav-item">
            <a href="/">about</a>
          </li>
          <li className="nav-item">
            <a href="/">testimonials</a>
          </li>
          <li className="nav-item">
            <a href="/">demo</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
