import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

import Image1 from '../../asset/pageWork/lovely/journey-through-the-darkness-3.jpg'
import Image2 from '../../asset/pageWork/lovely/lovely-city-1.jpg'
import Image3 from '../../asset/pageWork/lovely/lovely-city-2.jpg'

import './BodyLand.css'

function LovelyCity() {
    return (
        <React.Fragment>
            <Header />
            <div className='AllWorks'>
                <div className='work-page1'>


                    <h1 className="work-title1">Lovely City</h1>
                    <div className='workcontainer1'>


                        <iframe className='iframe2' width="560" height="315" src="https://www.youtube.com/embed/3WnjZhw2ZUM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                        <p className='body-work1'>
                            Dilemmas are inextricably interwoven with people’s everyday life. Antony, in this regard, is not exceptional. The day he and Emmanuelle want to get married becomes a life-or-death situation at his workplace. So, he has to handle his marriage for which they have long planed and a business meeting in which his attendance is a must. The minister, his business partners  and all other people he talks to provide him with a particular story associated with their Lovely City. He, then, realizes why the city has been truly loved and the very fact that modernity cannot affect cultural identity.
                            <br />
                            AWARDS: 2
                        </p>
                    </div>

                    <div className='img-work2'>
                        <img src={Image1} className='img-item1' alt="" />
                        <img src={Image2} className='img-item1' alt="" />
                        <img src={Image3} className='img-item1' alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default LovelyCity
