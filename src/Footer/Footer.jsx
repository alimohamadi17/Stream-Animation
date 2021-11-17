import React from 'react'
import './Footer.css'
import { AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'
import { useHistory } from 'react-router'


function Footer() {
    const history = useHistory();
    return (
        <React.Fragment>
            <div className='footer-content'>
                <div className='footer-item1'>
                    <AiOutlineMail className='icon-footer' /> <span className='color1'> Email : info@arioentertainment.com </span><br />
                    <FaPhoneAlt className='icon-footer1' /> <span className='color1'>  phone : +49 176 60 345 223 </span> <br />
                    <HiOutlineOfficeBuilding className='icon-footer2' /> <span className='color1'>  Address : Volksdorfer Grenzweg 38a , 22359 Hamburg , Germany </span><br />

                </div>
                <div className='footer-item2'>

                    <h4 className='h4-pointer' onClick={() => history.push('/Impressum')}>Imprssum</h4>
                    <h4 className='h4-pointer' onClick={() => history.push('/PrivacyPolicy')}>Privacy Policy</h4>
                </div>

            </div>
            <div className='end-footer'>
                <span className='color'><AiOutlineCopyrightCircle />   Copyright  Ario Entertainment 2021
                </span>
            </div>
        </React.Fragment >
    )

}

export default Footer
