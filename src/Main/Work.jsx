import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Image from '../asset/work/journey-through-the-darkness-1-1.jpg'
import Image3 from '../asset/work/lovely-city-1-4.jpg'
import Image4 from '../asset/work/my-dream-1-3.jpg'
import Image5 from '../asset/pageWork/annime/Annie-Manny-2-1.jpg'
import Image19 from '../../src/asset/pageWork/golnar/Golnar-1.jpg'
import Image20 from '../../src/asset/pageWork/three/Bird-and-Tree-1.jpg'

import { GiPlayButton } from 'react-icons/gi'
import './Work.css'
import Modal from 'react-modal';
import { useHistory } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const customStyles = {
    overlay: {
        background: 'rgba(0,0,0,0.8)'
    },

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '600px',
        transform: 'translate(-50%, -50%)',
        background: 'none',
        border: 'none'

    },
};

Modal.setAppElement('#root');

function Work() {
    const history = useHistory();


    const [modalOpen, setModalOpen] = React.useState(false);
    const [modalOpen1, setModalOpen1] = React.useState(false);
    const [modalOpen3, setModalOpen3] = React.useState(false);
    const [modalOpen6, setModalOpen6] = React.useState(false);
    const [modalOpen7, setModalOpen7] = React.useState(false);



    return (

        <React.Fragment>
            <div>
                <div className='work' id='work'>
                    <h2 className='w-content'>WORK</h2>
                    <p className='w-p-content'>

                        To date, Ario Entertainment has primarily produced animated films for TV broadcasters and advertisers
                        in Germany and Middle East, Canada and Australia. A small selection of the projects can be browsed below:
                    </p>
                    <div className="card">
                        <div className='card-item'>
                            <img className='img-1' src={Image} alt="journey-through-the-darkness" />
                            <div className='options'>
                                <div>
                                    <h3 className='p-content'>
                                        The Journey to Darkness
                                        <br />
                                        3D Animation</h3>
                                </div>
                                <div className='option-2'>

                                    <button className='icon-video' onClick={() => setModalOpen1(true)}><GiPlayButton /></button>
                                    <Modal
                                        isOpen={modalOpen1}
                                        onRequestClose={() => setModalOpen1(modalOpen1)}
                                        shouldCloseOnOverlayClick={false}
                                        style={customStyles}

                                    >
                                        <button style={{
                                            fontFamily: 'Oregano',
                                            float: 'right', color: 'red', border: 'none', cursor: 'pointer', background: 'none', fontSize: '40px'
                                        }} onClick={() => setModalOpen1(false)}><AiOutlineCloseCircle /></button>
                                        <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/6kIxwLrXZu8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                    </Modal>

                                    <button className="icon-more" onClick={() => history.push('/Journey')}>View Project</button>

                                </div>

                            </div>

                        </div>
                        <div className='card-item'>
                            <img className='img-1' src={Image5} alt="ANNIE-MANNY-cover" />
                            <div className='options'>

                                <div>
                                    <h3 className='p-content'>
                                        Annie & Manny
                                        <br />
                                        2D Animation
                                    </h3>

                                </div>
                                <div className='option-2'>

                                    <button className='icon-video' onClick={() => setModalOpen(true)}><GiPlayButton /></button>
                                    <Modal
                                        isOpen={modalOpen}
                                        onRequestClose={() => setModalOpen(modalOpen)}
                                        shouldCloseOnOverlayClick={false}
                                        style={customStyles}

                                    >
                                        <button style={{
                                            fontFamily: 'Oregano',
                                            float: 'right', color: 'red', border: 'none', cursor: 'pointer', background: 'none', fontSize: '40px'
                                        }} onClick={() => setModalOpen(false)}><AiOutlineCloseCircle /></button>
                                        <div>
                                            <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/a0TtjxFHjq8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>

                                    </Modal>
                                    <button className="icon-more" onClick
                                        ={() => history.push('/Annime')} >View Project</button>

                                </div>

                            </div>

                        </div>
                        <div className='card-item'>
                            <img className='img-1' src={Image4} alt="ANNIE-MANNY-cover" />
                            <div className='options'>

                                <div>
                                    <h3 className='p-content'>
                                        My Dreams
                                        <br />
                                        2D Animation
                                    </h3>

                                </div>
                                <div className='option-2'>

                                    <button className='icon-video' onClick={() => setModalOpen7(true)}><GiPlayButton /></button>
                                    <Modal
                                        isOpen={modalOpen7}
                                        onRequestClose={() => setModalOpen7(modalOpen7)}
                                        shouldCloseOnOverlayClick={false}
                                        style={customStyles}

                                    >
                                        <button style={{
                                            fontFamily: 'Oregano',
                                            float: 'right', color: 'red', border: 'none', cursor: 'pointer', background: 'none', fontSize: '40px'
                                        }} onClick={() => setModalOpen7(false)}><AiOutlineCloseCircle /></button>
                                        <div>
                                            <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/7H1FL6baF5k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

                                        </div>
                                    </Modal>
                                    <button className="icon-more" onClick={() => history.push('/MyDream')} >View Project</button>

                                </div>

                            </div>

                        </div>
                        <div className='card-item'>
                            <img className='img-1' src={Image3} alt="ANNIE-MANNY-cover" />
                            <div className='options'>

                                <div>
                                    <h3 className='p-content'>
                                        Lovely City
                                        <br />
                                        3D Animation
                                    </h3>

                                </div>
                                <div className='option-2'>

                                    <button className='icon-video' onClick={() => setModalOpen6(true)}><GiPlayButton /></button>
                                    <Modal
                                        isOpen={modalOpen6}
                                        onRequestClose={() => setModalOpen6(modalOpen6)}
                                        shouldCloseOnOverlayClick={false}
                                        style={customStyles}

                                    >
                                        <button style={{
                                            fontFamily: 'Oregano',
                                            float: 'right', color: 'red', border: 'none', cursor: 'pointer', background: 'none', fontSize: '40px'
                                        }} onClick={() => setModalOpen6(false)}><AiOutlineCloseCircle /></button>
                                        <div>
                                            <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/3WnjZhw2ZUM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>

                                    </Modal>
                                    <button className="icon-more" onClick={() => history.push('/LovelyCity')}>View Project</button>

                                </div>

                            </div>

                        </div>
                        <div className='card-item'>
                            <img className='img-1' src={Image20} alt="ANNIE-MANNY-cover" />
                            <div className='options'>

                                <div>
                                    <h3 className='p-content'>
                                        The Tree and The Bird
                                        <br />
                                        2D Animation
                                    </h3>

                                </div>
                                <div className='option-2'>

                                    <button className='icon-video' onClick={() => setModalOpen3(true)}><GiPlayButton /></button>
                                    <Modal
                                        isOpen={modalOpen3}
                                        onRequestClose={() => setModalOpen3(modalOpen3)}
                                        shouldCloseOnOverlayClick={false}
                                        style={customStyles}

                                    >
                                        <button style={{
                                            fontFamily: 'Oregano',
                                            float: 'right', color: 'red', border: 'none', cursor: 'pointer', background: 'none', fontSize: '40px'
                                        }} onClick={() => setModalOpen3(false)}><AiOutlineCloseCircle /></button>
                                        <div>
                                            <iframe className='iframe' width="560" height="315" src="https://www.youtube.com/embed/sHvXrDvrQUI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                        </div>

                                    </Modal>
                                    <button className="icon-more" onClick={() => history.push('/Tree')}>View Project</button>

                                </div>

                            </div>

                        </div>
                        <div className='card-item'>
                            <img className='img-1' src={Image19} alt="ANNIE-MANNY-cover" />
                            <div className='options'>

                                <div>
                                    <h3 className='p-content'>
                                        Golnar
                                        <br />
                                        2D Animation
                                    </h3>

                                </div>
                                <div className='option-2'>


                                    <button className="icon-more" onClick={() => history.push('/Golnar')}>View Project</button>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </div>




        </React.Fragment>
    )
}

export default Work
