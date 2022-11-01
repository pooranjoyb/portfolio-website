import React from 'react'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com/pooranjoyb/portfolio-website"><img src="./img/web.png" width='30' alt=""/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto" id='navbar-list'>
        <li className="nav-item px-2">
          <a className="nav-link" aria-current="page" href="">Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#intro">About</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="https://drive.google.com/file/d/1aAiHqM03d0scz3aoU4Gasd3jFUJg0qnq/view?usp=sharing" target="_blank">Resume</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
