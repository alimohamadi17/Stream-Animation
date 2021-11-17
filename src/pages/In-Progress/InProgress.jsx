import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Img1 from '../../asset/pageWork/bodyland/Bodyland-03.jpg'
import Img2 from '../../asset/pageWork/InProgress/200510500684_12499.jpg'
import './InProgress.css'

function InProgress() {
    return (
        <React.Fragment>
            <Header />
            <div className='InProgress-contecnt'>


                <h2 className='h2-InP'>In Progress </h2>
                <p className='p1-InP'>
                    The following projects are in progress.For reasosn of confidentiality we cannot reveal title and
                    customer at this stage.
                </p>
                <div className='Inprogress-container'>





                    <div className='inprogress-content'>

                        <iframe className='iframe-video' width="730" height="400" src="https://www.youtube.com/embed/TCUQ1r2c-DM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <h3 className='path-h3'>
                            Body Land
                            <br />
                            3D animation
                        </h3>




                    </div>
                    <div className='inprogress-content'>

                        <img src={Img2} className='img-12' alt="Body Land" />
                        <h3 className='path-h3'>
                            Animated adventures
                            <br />
                            3D animation
                        </h3>




                    </div>


                </div>

            </div>
            <Footer />

        </React.Fragment>
    )
}

export default InProgress
