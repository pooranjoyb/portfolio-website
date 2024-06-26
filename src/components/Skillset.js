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
            duration: 800
        });
      }, [])
      
      return (
          <>
            <div className="container d-flex flex-column mytext" 
            data-aos="fade-right" data-aos-offset="0" 
            data-aos-easing="ease-in-out" >
                <div className='welcome-text fs-2 text-center heading-text'>
                MY <strong> SKILLSET </strong>
                </div>
                <div className="row">
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/java-script.png" alt="JavaScript" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/c-logo.png" alt="C" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/python.png" alt="Python" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/html-5-logo.png" alt="Html" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/css-3.png" alt="Css" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/atom.png" alt="React" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/nodejs.png" alt="NodeJS" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/tailwind.png" alt="Tailwind" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/mongo.png" alt="Mongo" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/firebase.png" alt="Firebase" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/mysql.png" alt="MySQL" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/github.png" alt="Github" />
                    </div>
                    <div className="icons col-md-2 col-4">
                        <img src="./icons/bootstrap.png" alt="Bootstrap" />
                    </div>
                </div>
                </div>
        </>
    )
}
