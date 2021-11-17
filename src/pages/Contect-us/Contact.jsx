import React from 'react'
import Footer from '../../Footer/Footer'
import Header from '../../Header/Header'
import Images from '../../asset/Map_1.JPG'
import './Contact.css'
function Contact() {
    return (
        <React.Fragment>
            <Header />
            <div className='contact'>
                <h1 className='contact-title'>CONTACT</h1>
                <div className='contact-p'>
                    Ario Entertainment UG (haftungsbeschränkt) <br />
                    Volksdorfer Grenzweg 38a <br />
                    22359 Hamburg (Germany)
                </div>
                <div
                    className='FormContainer'>
                    <div className='div-form'>
                        <form className='form' action="http://info@arioentertainment.com">
                            <div className='form-item1'>
                                <input type="text" name="" placeholder='First Name *' id="inp" required />
                                <input type="text" name="" placeholder='Last Name *' id="inp" required /><br />
                            </div>

                            <div className='form-item1'>
                                <input type="email" name="" placeholder='Email *' id="inp" required />
                                <input type="number" name="" placeholder='Phone ' id="inp" required /><br />
                            </div>
                            <div className='form-item1'>


                                <textarea placeholder='Type Your Massage Here *' required></textarea>
                            </div>
                            <label className='label' htmlFor="submit"> * Mandatory Entries</label>
                            <span className='btn-submit' >
                                <button type="submit" id='submit'>Submit</button>

                            </span>
                        </form>
                    </div>
                </div>

                <div className='map-contact'>
                    <img className='map-img' src={Images} alt="" />
                </div>

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Contact
