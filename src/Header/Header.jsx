import Logo from '../asset/ArioEntertainment.png'
import React from 'react'
import './Header.css'
import Navbar from './Navbar'
import Typography from '@material-ui/core/Typography';
import { ThemeProvider, createTheme } from '@material-ui/core'
import { useHistory } from 'react-router';
const theme = createTheme({
    typography: {
        fontFamily: [
            'Oregano',
            'cursive',
        ].join(','),
    },
});








function Header() {

    const history = useHistory();
    return (
        <React.Fragment>
            <header className='Header'>
                <div className='container'>
                    <div className="row">
                        <div className='Logo'>
                            <img src={Logo} alt="Logo" className='logo-img' onClick={() => history.push('/')} />
                            <h1 className="desc">
                                2D / 3D Animation Studio
                            </h1>
                        </div>
                        <ThemeProvider theme={theme}>
                            <Typography>
                                <Navbar className='nav-toggle' />
                            </Typography>
                        </ThemeProvider>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header
