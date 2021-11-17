import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Image16 from '../../asset/pageWork/three/Bird-and-Tree-1.jpg'
import Image17 from '../../asset/pageWork/three/Bird-and-Tree-2.jpg'
import Image18 from '../../asset/pageWork/three/Bird-and-Tree-3.jpg'


import './BodyLand.css'

function Tree() {
    return (
        <React.Fragment>
            <Header />
            <div className='AllWorks'>
                <div className='work-page1'>

                    <h1 className="work-title1">The Tree and The Bird</h1>
                    <div className='workcontainer1'>


                        <iframe className='iframe2' width="560" height="315" src="https://www.youtube.com/embed/sHvXrDvrQUI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <p className='body-work1'>
                            Thorough out history, home land has been one of the most valued entities in the world. This is a crucial matter among both human beings and other creatures. The Tree and the Bird depicts how people sacrifice and unite to fight for their freedom and home as well in a symbolic manner. In this short film ravens symbolize invaders who show no mercy even to poor, innocent women and kids. However, integrity and teamwork accompanied by collective wisdom are the key terms to rise up against mainstream brutality. This agenda has brought the film several international awards.
                            <br />
                            AWARDS: 6
                        </p>
                    </div>

                    <div className='img-work2'>
                        <img src={Image16} className='img-item1' alt="" />
                        <img src={Image17} className='img-item1' alt="" />
                        <img src={Image18} className='img-item1' alt="" />
                    </div>
                </div>
            </div>

            <Footer />
        </React.Fragment>
    )
}

export default Tree
