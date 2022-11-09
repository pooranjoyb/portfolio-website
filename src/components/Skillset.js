import React from 'react'
import Aos from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"

export default function Skillset() {
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
            <div className="container d-flex flex-column mytext" 
            data-aos="fade-right" data-aos-offset="300" 
        data-aos-easing="ease-in-out" >
                <div className='welcome-text fs-2 text-center heading-text'>
                MY <strong> SKILLSET </strong>
                </div>
                <div className="row">
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/java-script.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/c-logo.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/html-5-logo.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/css-3.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/atom.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/mongo.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/github.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/bootstrap.png" alt="JavaScript" />
                    </div>
                </div>
            </div>
        </>
    )
}
