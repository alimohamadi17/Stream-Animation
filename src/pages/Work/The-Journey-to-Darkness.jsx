import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import Image10 from '../../asset/pageWork/Journey/journey-through-the-darkness-1.jpg'
import Image11 from '../../asset/pageWork/Journey/journey-through-the-darkness-2.jpg'
import Image12 from '../../asset/pageWork/Journey/journey-through-the-darkness-3.jpg'

function Journey() {
    return (
        <React.Fragment>
            <Header />
            <div className='AllWorks'>
                <div className='work-page1'>

                    <h1 className="work-title1">The Journey to Darkness</h1>
                    <div className='workcontainer1'>

                        <iframe className='iframe2' width="560" height="315" src="https://www.youtube.com/embed/6kIxwLrXZu8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                        <p className='body-work1'>
                            Due to a coincidence, Emad travels back into the time when his ancestors used to live. This journey sheds light on the dark side of life people had to confront 80 years ago and how they managed to cope with difficulties and fought against enemies. In order to rescue his relatives, his grandfather and his great grandfather in particular, Emad has to plan carefully to handle challenging situations.
                        </p>
                    </div>

                    <div className='img-work2'>
                        <img src={Image10} className='img-item1' alt="" />
                        <img src={Image11} className='img-item1' alt="" />
                        <img src={Image12} className='img-item1' alt="" />
                    </div>
                </div>

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Journey
