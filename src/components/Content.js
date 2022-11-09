import React from 'react'
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Aos from 'aos';
import "aos/dist/aos.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
export default function Content() {


  const element = useRef(null);

  useEffect(() => {
    var typed = new Typed(element.current, {
      strings: ["Programmer", "Web Developer", "UI Designer", "Musician", "Painter"],
      startDelay: 10,
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 2000,
      showCursor: false,
      loop: true
    });
  })

  useEffect(() => {
    Aos.init({
      useClassNames: true,
      initClassName: false,
      animatedClassName: 'animated',
      duration: 1000
    });
  }, [])

  return (
    <>
      <div
        className="container">

        <div className="container py-5 d-flex" id='head'>
          <div className="d-flex flex-column mx-auto mt-5 ">
            <div className="display-3 mt-5 welcome-text" >Hello there!</div>
            <div className="fs-1">I'M <strong className='text-altdeep'>Pooranjoy Bhattacharya</strong></div>
            <small className="typing-text">I'M A <strong><span className='text-altdeep' ref={element} /></strong></small>
          </div>
          <div className="p-4 " id='desk-img'>
            <img src="./img/desk.svg" alt="" className="img-fluid profile-pic" />
          </div>
        </div>
        <div className="container d-flex flex-column mytext" id='intro' data-aos="fade-right" data-aos-offset="200"
          data-aos-easing="ease-in-out">
          <div className='welcome-text fs-2 text-center heading-text' >
            MY <strong > INTRODUCTION </strong>
          </div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2010 - 2011"
              dateClassName={"color-date"}
              iconStyle={{ background: '#7B08A1', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Aspiring Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">MERN Stack</h4>
              <p>
                I'm a <strong className='text-altdeep'>Front-End Web Developer</strong> based in <strong className='text-altdeep'> Assam </strong>, India<br />
                My field of Interest are building new <strong className='text-altdeep'>Web Technologies</strong> and the products of Modern World. <br />Currently learning <strong className='text-altdeep'>Backend Web Development</strong> using <strong className='text-altdeep'>Javascript</strong> & <strong className='text-altdeep'>Node.js</strong>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 245, 245)', color: '#000' }}
              // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              dateClassName={"color-date"}
              iconStyle={{ background: '#AB09A3', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Education</h3>
              <h4 className="vertical-timeline-element-subtitle">Assam, India</h4>
              <p>
                I've completed my Schooling from <strong className='text-altdeep'>Guru Teg Bahadur Academy</strong> in 2019 and Higher Secondary Education from <strong className='text-altdeep'>Salt Brook Academy</strong> in 2021<br />
                I'm currently a 2nd year CSE Undergraduate from <strong className='text-altdeep'>Sikkim Manipal Institute of Technology, </strong>Majitar, Sikkim, India
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2008 - 2010"
              dateClassName={"color-date"}
              iconStyle={{ background: '#7B08A1', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Work Experience</h3>
              <h4 className="vertical-timeline-element-subtitle">& Internships</h4>
              <p>
                Worked as a <strong className='text-altdeep'>Campus Ambassador Intern</strong> at National Engineering Olympiad (NEO)
                and ensured that students attain a good learning experience & test themselves among all
                engineering students.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2006 - 2008"
              dateClassName={"color-date"}
              iconStyle={{ background: '#AB09A3', color: '#fff' }}

            >
              <h3 className="vertical-timeline-element-title">Programes</h3>
              <h4 className="vertical-timeline-element-subtitle">& achievements</h4>
              <p>
                Worked as 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="April 2013"
              dateClassName={"color-date"}
              iconStyle={{ background: '#7B08A1', color: '#fff' }}

            >
              <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <p>
                Strategy, Social Media
              </p>
            </VerticalTimelineElement>


          </VerticalTimeline>
          {/* 
              
                <li className='text-altlight'>
                  I'm fluent in languages like <strong className='text-altdeep'>C/C++</strong> & <strong className='text-altdeep'>JavaScript</strong>
                </li>

              </ul>
            </div>
            <div className='p-6 mt-4' id='profile-pic' >
              <img src="./img/profile.jpg" className="rounded-circle" alt="Cinque Terre" width='75%' />
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
