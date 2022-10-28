import React from 'react'

export default function Contact() {
    return (
        <>
            <div className="container d-flex flex-column mytext" id='contact'>
                <div className='text-altlight fs-2 pb-5 text-center heading-text'>
                    <strong className='text-altdeep'> FIND </strong> ME ON
                </div>

                <div class="social">

                <ul>
                    <li>
                        <a href="https://www.facebook.com/profile.php?id=100076243074598" target="_blank">

                            <img src="./portfolio-website/icons/fb.png" alt="" id="fb"/>
                        </a>


                    </li>
                    <li>
                        <a href="https://www.instagram.com/pooranjoyz_.ig/" target="_blank">


                            <img src="./portfolio-website/icons/ig.png" alt="" id="ig"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/pooranjoy-bhattacharya-baa23721a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B6TjHse3sTvqtMyPLyupHBQ%3D%3D" target="_blank">

                            <img src="./portfolio-website/icons/lnkd.png" alt="" id="lnkd"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/pooranjoyb" target="_blank">

                            <img src="./portfolio-website/icons/git.png" alt="" id="git"/>
                        </a>
                    </li>
                </ul>

            </div>
            </div>
        </>
    )
}
