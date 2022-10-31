import React from 'react'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
export default function Content() {

  
  const element = useRef(null);

  useEffect(() => {
    var typed = new Typed(element.current, {
      strings: ["Programmer", "Web Developer", "UI Designer", "Musician", "Painter"],
      startDelay: 100,
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 1000,
      showCursor: false,
      loop: true
    });
  })
  return (
    <>
      <div
        className="container">

        <div className="container my-5 d-flex" id='head'>
          <div className="d-flex flex-column mx-auto mt-5">
            <div className="display-3 mt-5">Hello there!</div>
            <div className="fs-1">I'M <strong className='text-altdeep'>Pooranjoy Bhattacharya</strong></div>
            <small className="typing-text">I'M A <strong><span className='text-altdeep' ref={element} /></strong></small>
          </div>
          <div className="p-4 " id='desk-img'>
            <img src="./img/desk.svg" alt="" className="img-fluid profile-pic" />
          </div>
        </div>
        <div className="container d-flex flex-column mytext" id='intro'>
          <div className='text-altlight fs-2 text-center heading-text'>
            MY <strong className='text-altdeep'> INTRODUCTION </strong>
          </div>
          <div className='container d-flex' id="intro-content">

            <div className='mr-4 mt-4' >
              <ul id='mydetails'>
                <li className='text-altlight'>


                  I'm a junior pursuing <strong className='text-altdeep'>Btech </strong>in <strong className='text-altdeep'>Computer Science and Engineering</strong> in SMIT, Sikkim.


                </li>
                <li className='text-altlight'>

                  I live in Tinsukia<strong className='text-altdeep'> Assam </strong>(Northeast) INDIA

                </li>
                <li className='text-altlight'>
                  My field of Interest are building new <strong className='text-altdeep'>Web Technologies</strong> and Products of Modern World
                </li>
                <li className='text-altlight'>
                  Currently learning backend web development using <strong className='text-altdeep'>Javascript</strong> & <strong className='text-altdeep'>Node.js</strong>
                </li>
                <li className='text-altlight'>
                  I'm fluent in languages like <strong className='text-altdeep'>C/C++</strong> & <strong className='text-altdeep'>JavaScript</strong>
                </li>

              </ul>
            </div>
            <div className='p-6 mt-4' id='profile-pic' >
              <img src="./img/profile.jpg" className="rounded-circle" alt="Cinque Terre" width='75%' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
