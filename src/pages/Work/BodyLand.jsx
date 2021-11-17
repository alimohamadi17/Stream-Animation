import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Image4 from '../../asset/pageWork/bodyland/Bodyland-03.jpg'
import Image5 from '../../asset/pageWork/bodyland/Bodyland-04.jpg'
import './BodyLand.css'

function BodyLand() {
    return (
        <React.Fragment>
            <Header />
            <div className="workpages">
                <div className='work-page1'>
                    <h1 className="work-title">Body Land</h1>

                    <iframe width="560" height="315" src="https://www.youtube.com/embed/TCUQ1r2c-DM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


                    <p className='body-work'>In Body Land, all white and red blood cells, platelets, different useful bacteria and other cells live happily together. In this city, white cells are in charge of maintaining the security of Body Land against invading germs, bacteria, fungi and viruses led by Rhino. Gooli, a white blood cell boy, 8, his 6-year-old sister, Lala, and their cute pet, Titi turn to superheroes as they eat the magical fruit of the life tree. They can help white blood cells prevent nasty germs.

                    </p>

                </div>
                <div className='img-work2'>
                    <img src={Image4} className='img-item1' alt="bodyland" />
                    <img src={Image5} className='img-item1' alt="bodyland" />
                </div>

            </div>

            <Footer />
        </React.Fragment>
    )
}

export default BodyLand
