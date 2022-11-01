import React from 'react';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Carousel from 'react-elastic-carousel';

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function Projects() {

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
            <div className="container d-flex flex-column mytext" data-aos="fade-right" data-aos-offset="300" 
        data-aos-easing="ease-in-out" id='projects'>
                <div className='text-altlight fs-2 text-center heading-text'>
                    FEATURED <strong className='welcome-text'>PROJECTS</strong>
                </div>
                <div className='wrapper'>
                    <Carousel className="carousel" breakpoints={breakpoints} transitionMs={1000} enableAutoPlay={false} autoPlaySpeed={3000} >
                        <div className='carousel card'><img src="./img/imperialPalace.png" alt="" />
                            <div  id='text'>
                                UI for a responsive luxurious hotel made with pure HTML and CSS<br/>
                                <a href="https://github.com/pooranjoyb/Hotel_ImperialPalace" target="_blank">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/portfolio.png" alt="" />
                            <div id='text'>
                                Portfolio Website using ReactJS
                                <br/>
                                <a href="">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/ageCalc.png" alt="" />
                            <div id='text'> 
                                Age Calculator App using HTML, CSS & JavaScript
                                <br/>
                                <a href="https://github.com/pooranjoyb/Age-Calculator" target="_blank" >Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/netflix.png" alt="" />
                            <div id='text'>
                                Netflix Sign-Up clone using pure HTML & CSS
                                <br/>
                                <a href="https://github.com/pooranjoyb/netflix-signup-clone" target="_blank" >Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/tictaktoe.png" alt="" />
                            <div id='text'>
                                Simple Tic-Tak-Tow Game using C++
                                <br/>
                                <a href="https://github.com/pooranjoyb/TicTakToe-Cpp" target="_blank" >Check this out!</a>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
