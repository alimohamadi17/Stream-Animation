import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import './About.css'
import SliderAbout from './Slider'
function About() {
    return (
        <React.Fragment>
            <Header />
            <div className='About-content'>
                <h2 className='about-title'>ABOUT</h2>
                <p className='about-p'>Ario Entertainment represents a network of animation studios in the Middle East region,
                    specialised in the production of 2D and 3D animations. In addition to our own studio with 47
                    employees and an animation experience of 15 years, we are closely networking with other partner
                    studios in the greater region to achieve more flexibility and scalability for our clients. With the
                    establishment of Ario Entertainment UG in Hamburg, Germany, we now aim to provide our
                    services to customers in Europe. Our German HQ in Hamburg will be your contractual partner and
                    permanent contact point throughout your animation project. </p>
                <SliderAbout className='slider1' />

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default About
