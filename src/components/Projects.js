import React from 'react';
import Carousel from 'react-elastic-carousel';

const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

export default function Projects() {
    return (
        <>
            <div className="container d-flex flex-column mytext" id=''>
                <div className='text-altlight fs-2 pb-5 text-center heading-text'>
                    FEATURED <strong className='text-altdeep'>PROJECTS</strong>
                </div>
                <div className='wrapper'>
                    <Carousel className="carousel" breakpoints={breakpoints} transitionMs={1000} enableAutoPlay={false} autoPlaySpeed={3000} >
                        <div className='carousel card'><img src="./portfolio-website/img/imperialPalace.png" alt="" />
                            <span  id='text'>
                                UI for a responsive luxurious hotel made with pure HTML and CSS<br/>
                                <a href="https://github.com/pooranjoyb/Hotel_ImperialPalace" target="_blank">Check this out!</a>
                            </span>
                        </div>
                        <div className='carousel card'><img src="./portfolio-website/img/portfolio.png" alt="" />
                            <span id='text'>
                                Portfolio Website using ReactJS
                                <br/>
                                <a href="">Check this out!</a>
                            </span>
                        </div>
                        <div className='carousel card'><img src="./portfolio-website/img/ageCalc.png" alt="" />
                            <span id='text'> 
                                Age Calculator App using HTML, CSS & JavaScript
                                <br/>
                                <a href="https://github.com/pooranjoyb/Age-Calculator" target="_blank" >Check this out!</a>
                            </span>
                        </div>
                        <div className='carousel card'><img src="./portfolio-website/img/netflix.png" alt="" />
                            <span id='text'>
                                Netflix Sign-Up clone using pure HTML & CSS
                                <br/>
                                <a href="https://github.com/pooranjoyb/netflix-signup-clone" target="_blank" >Check this out!</a>
                            </span>
                        </div>
                        <div className='carousel card'><img src="./portfolio-website/img/tictaktoe.png" alt="" />
                            <span id='text'>
                                Simple Tic-Tak-Tow Game using C++
                                <br/>
                                <a href="https://github.com/pooranjoyb/TicTakToe-Cpp" target="_blank" >Check this out!</a>
                            </span>
                        </div>
                    </Carousel>
                </div>
            </div>
        </>
    )
}
