import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Image13 from '../../asset/pageWork/Dream/My-dream-1.jpg'
import Image14 from '../../asset/pageWork/Dream/My-dream-2.jpg'
import Image15 from '../../asset/pageWork/Dream/My-dream-3.jpg'
import './BodyLand.css'

function MyDream() {
    return (
        <React.Fragment>
            <Header />
            <div className='AllWorks'>
                <div className='work-page1'>

                    <h1 className="work-title1">My Dream</h1>
                    <div className='workcontainer1'>


                        <iframe className='iframe2' width="560" height="315" src="https://www.youtube.com/embed/7H1FL6baF5k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        <p className='body-work1'>
                            Some cultural aspects of a given nation might not be accurately spotted on in the mass media. Therefore, My Dream, in the format of a five-minute short film, decided to help global audiences understand where and how aesthetically hand-made Iranian rugs would have been stemmed from. My Dream narrates the story of not just a young rural girl, but a nation as a whole whose lost belongings and memories survive in the form of so-called simple designs in a carpet, and shine for eternity. This short film has won seven international awards.
                            <br />
                            AWARDS: 7
                        </p>
                    </div>

                    <div className='img-work2'>
                        <img src={Image13} className='img-item1' alt="" />
                        <img src={Image14} className='img-item1' alt="" />
                        <img src={Image15} className='img-item1' alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default MyDream
