import React from 'react'
import { useEffect, useRef } from 'react';
import {FaSchool} from 'react-icons/fa'
import {FaDesktop} from 'react-icons/fa'
import {FaDev} from 'react-icons/fa'
import {FaAngleDoubleDown} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaMusic} from 'react-icons/fa'
import Typed from 'typed.js';
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


  return (
    <>
      <div
        className="container">

        <div className="container d-flex" id='head'>
          <div className="d-flex flex-column mx-auto mt-5 ">
            <div className="display-3 mt-5 welcome-text" >HELLO THERE!</div>
            <div className="fs-1">I'M <strong className='welcome-text'>Pooranjoy Bhattacharya</strong></div>
            <small className="typing-text">I'M A <strong><span className='welcome-text' ref={element} /></strong></small>
          </div>
          <div className="p-4 " id='desk-img'>
            <img src="./img/desk.svg" alt="" className="img-fluid profile-pic" />
          </div>
        </div>
        <div id='scrollicon'>
          <FaAngleDoubleDown size="2rem"/>
        </div>
        <div className="container d-flex flex-column mytext" id='intro'>
          <div className='welcome-text fs-2 text-center heading-text' >
            MY <strong > INTRODUCTION </strong>
          </div>
        </div>
          <VerticalTimeline className='timeline'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(245, 245, 245)', color: '#000' }}
              // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2005 - present"
              dateClassName={"color-date"}
              icon={<FaSchool/>}
              iconStyle={{ background: '#AB09A3', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Education</h3>
              <h4 className="vertical-timeline-element-subtitle">Assam, India</h4>
              <p>
                I've completed my Schooling from <strong className='text-altdeep'>Guru Teg Bahadur Academy</strong> in 2019 and Higher Secondary Education from <strong className='text-altdeep'>Salt Brook Academy</strong> in 2021<br />
                I'm currently a 4th year CSE Undergraduate from <strong className='text-altdeep'>Sikkim Manipal Institute of Technology, </strong>Majitar, Sikkim, India
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - present"
              dateClassName={"color-date"}
              icon={<FaDesktop/>}
              iconStyle={{ background: '#7B08A1', color: '#fff' }}
              >
              <h3 className="vertical-timeline-element-title">Aspiring Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">MERN Stack</h4>
              <p>
                I'm an Aspiring <strong className='text-altdeep'>Full-Stack Web Developer</strong> based in <strong className='text-altdeep'> Assam </strong>, India<br />
                My field of Interest are building new <strong className='text-altdeep'>Web Technologies</strong> and the products of Modern World. <br />Currently learning <strong className='text-altdeep'>Backend Web Development</strong> using <strong className='text-altdeep'>Javascript</strong> & <strong className='text-altdeep'>Node.js</strong>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2021 - 2022"
              dateClassName={"color-date"}
              icon={<FaDev/>}
              iconStyle={{ background: '#7B08A1', color: '#fff' }}
            >
              <h3 className="vertical-timeline-element-title">Work Experience</h3>
              <h4 className="vertical-timeline-element-subtitle">& Internships</h4>
              <p>
                Worked as a <strong className='text-altdeep'>Campus Ambassador Intern</strong> at National Engineering Olympiad (NEO)
                and ensured that students test themselves among all
                engineering students.<br/>
                Worked as a <strong className='text-altdeep'>Google Cloud Facilitator</strong> in a 2 month Google Cloud Facilitator Program organized by Google Cloud.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Feb - March, 2023"
              dateClassName={"color-date"}
              icon={<FaGithub/>}
              iconStyle={{ background: '#AB09A3', color: '#fff' }}

            >
              <h3 className="vertical-timeline-element-title">Programes</h3>
              <h4 className="vertical-timeline-element-subtitle">& Achievements</h4>
              <p>
              Ranked <strong className='text-altdeep'>#4</strong> in <strong className='text-altdeep'>JGEC Winter of Code 2023</strong><br/>
              Contributed to Open-Source under <strong className='text-altdeep'>Hacktoberfest-2022</strong> and was awarded with level-4 Badge by Digital Ocean.<br/>
              Also a Web Developer in <strong className='text-altdeep'>Google Developer Student Club (GDSC)</strong> in Sikkim Manipal Institute of Technology
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2017 - 2018"
              dateClassName={"color-date"}
              icon={<FaMusic/>}
              iconStyle={{ background: '#7B08A1', color: '#fff' }}

            >
              <h3 className="vertical-timeline-element-title">Hobbies</h3>
              <h4 className="vertical-timeline-element-subtitle">& Extra Curriculum</h4>
              <p>
              I'm a passionate <strong className='text-altdeep'>Musician</strong> & <strong className='text-altdeep'>Painter</strong> <br/>
              I've completed Visharadh in <strong className='text-altdeep'>Indian Classical Music</strong> from Bhatkhande Sangeet Vidyapith (Lucknow) & <strong className='text-altdeep'>Painting</strong> from Bangiya Sangeet Parishad (West Bengal).

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
    </>
  )
}
