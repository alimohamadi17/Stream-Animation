import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Image6 from '../../asset/pageWork/annime/Annie-Manny-1.jpg'
import Image7 from '../../asset/pageWork/annime/Annie-Manny-2-1.jpg'
import Image8 from '../../asset/pageWork/annime/Annie-Manny-3-1.jpg'
import Image9 from '../../asset/pageWork/annime/Annie-Manny-5.jpg'

import './BodyLand.css'

function Annime() {
    return (
        <React.Fragment>
            <Header />
            <div className='AllWorks'>

                <div className='work-page1'>
                    <h1 className="work-title1">Annie & Manny</h1>

                    <div className='workcontainer1'>

                        <iframe className='iframe2' width="560" height="315" src="https://www.youtube.com/embed/a0TtjxFHjq8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                        <p className='body-work1'>
                            The leading characters are two siblings named Annie, 6, and Manny, 4, who are curious to explore their surroundings as all children in this age range  are. They are energetic and vigorous, yet highly capable of learning simple rules. Annie and Manny, who might be accompanied by their friends including Turtee, Hoggie and Mushi and their families, face challenging situations. For problem solving, they benefit from the suggestions or pieces of advice provided by the narrator or their parents. Teaching personal and social skills are pivotal and the topics consist of shyness, Nyctophobia, selfishness, self-confidence, and teamwork. To children, family is at the heart of their world. Thus, the emphasis is placed on the role of immediate family primarily and secondarily, the extended one.

                        </p>
                    </div>

                    <div className='img-work2'>
                        <img src={Image6} className='img-item1' alt="" />
                        <img src={Image7} className='img-item1' alt="" />
                        <img src={Image8} className='img-item1' alt="" />
                        <img src={Image9} className='img-item1' alt="" />
                    </div>
                </div>


            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Annime
