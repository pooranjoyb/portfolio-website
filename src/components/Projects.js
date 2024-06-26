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
          duration: 800
        });
      }, [])
    return (
        <>
            <div className="container d-flex flex-column mytext" data-aos="fade-right" data-aos-offset="0" 
        data-aos-easing="ease-in-out" id='projects'>
                <div className='welcome-text fs-2 text-center heading-text'>
                    FEATURED <strong >PROJECTS</strong>
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
                                <a href="https://github.com/pooranjoyb/portfolio-website/" target="_blank">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/health-bridge.png" alt="AImodel" />
                            <div id='text'>
                                Machine Learning Model to predict diseases using NLP
                                <br/>
                                <a href="https://github.com/pooranjoyb/health-bridge/" target="_blank">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/weather-app.png" alt="" />
                            <div id='text'>
                                Weather-App using NodeJS
                                <br/>
                                <a href="https://github.com/pooranjoyb/weather-app/" target="_blank">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/covid.png" alt="" />
                            <div id='text'>
                                Desktop App using KivyMD & Rapid API
                                <br/>
                                <a href="https://github.com/pooranjoyb/covid-app/" target="_blank">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/places-api.png" alt="" />
                            <div id='text'>
                                Places-API using NodeJS and JSON-Server
                                <br/>
                                <a href="https://github.com/pooranjoyb/weather-app/" target="_blank">Check this out!</a>
                            </div>
                        </div>
                        <div className='carousel card'><img src="./img/ageCalc.png" alt="" />
                            <div id='text'> 
                                Age Calculator App using HTML, CSS & JavaScript
                                <br/>
                                <a href="https://github.com/pooranjoyb/Age-Calculator" target="_blank" >Check this out!</a>
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
