import React from 'react'
import Header from '../Header/Header'
import Footer from './Footer'
import './Impressum.css'

function Imperssum() {
    return (
        <React.Fragment>
            <Header />
            <div className='Impressum'>
                <h1 className='h1-Impressum'>Impressum</h1> <br />
                <p className="p-Impressum">
                    Ario Entertainment UG (haftungsbeschränkt) <br />
                    vertreten durch Peter Sprock (Geschäftsführer) <br />
                    Volksdorfer Grenzweg 38a <br />
                    22359 Hamburg <br />
                    HRB: 169379 (Amtsgericht Hamburg) <br />
                    Umsatz-St.-ID: DE344180119 <br />
                    Telefon: +49 176 60 345 223 <br />
                    E-Mail: info@arioentertainment.com <br />




                </p>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Imperssum
