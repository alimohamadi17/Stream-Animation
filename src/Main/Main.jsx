import React from 'react'
import './Main.css'
import Video from '../asset/arioent11.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowDown } from 'react-icons/io'
import "animate.css"
import Work from './Work';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Main() {
    AOS.init()
    return (
        <React.Fragment>
            <Header />
            <div className='root'>
                <video src={Video} autoPlay loop muted controls className='video' />
                <a href='#main'><IoIosArrowDown className='arrow  animate__animated animate__backInLeft animate__delay-2s' /></a>

                <div className='main' id='main'>
                    <div className='container-main' >

                        <div className='path' >
                            <h1 className='h1-title'>SERVICE</h1>

                            <div className='font'>


                                Ario Entertainment is a specialist in the production of 2d and 3d animation projects for cinema, TV,
                                streaming services or internet in Germany. With a powerful network
                                of animation studios in the Middle Eastern
                                region, we achieve high-level output at very attractive cost. And with quality to match western
                                standards.<br />
                                <h3 className='title-h3'>Our services entail:</h3><br />
                                - 2D Animation (animation of characters & camera, texture & light, rendering, compositing, post-production, SFX)<br />
                                - 3D Animation (animation of characters & camera, texture & light, rendering, compositing, post-production, SFX)<br />
                                - Character Design<br />
                                - Set Design<br />
                                - Character Modelling & Rigging<br />
                                - Modelling of Sets & Props<br />
                                <br />
                                <br />
                                <p className="end">We also team with writers and directors to help customers develop their projects.
                                    Regardless of the stage your animation project is in, whether you are planning a feature
                                    film, an
                                    animation series or an advertising project – contact us for a first noncommittal assessment.
                                </p> </div>








                        </div>
                    </div>
                </div>


            </div>

            <Work />
            <Footer />
        </React.Fragment>
    )
}

export default Main
