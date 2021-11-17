import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Image19 from '../../asset/pageWork/golnar/Golnar-1.jpg'
import Image20 from '../../asset/pageWork/golnar/Golnar-2.jpg'
import Image21 from '../../asset/pageWork/golnar/Golnar-3.jpg'
import './BodyLand.css'

function Golnar() {
    return (
        <React.Fragment>
            <Header />
            <div className='AllWorks'>
                <div className='work-page1'>
                    <h1 className="work-title1">Golnar</h1>
                    <div className='workcontainer1'>
                        <img src={Image19} className='golnar' alt="" />

                        <p className='body-work1'>
                            Golnar, 26×11’ is the story of a young orphan who has lost her father in a war. As a victim, she has to struggle hard to be back on her knees. For so doing, she learns how to make the most of her naturalistic intelligence and combines it with her pure EQ in order to hold conversations with her surroundings. She develops skills to participate in conservation projects, act against environmental issues and protect the species she regularly deals with in her rustic area. This series primarily targets the 6-9 age group. However, other family members might as well be motivated to lead a green life despite all sufferings.                        <br />
                            AWARDS: 6
                        </p>
                    </div>

                    <div className='img-work2'>
                        <img src={Image19} className='img-item1' alt="" />
                        <img src={Image20} className='img-item1' alt="" />
                        <img src={Image21} className='img-item1' alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Golnar
