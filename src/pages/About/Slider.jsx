import React from 'react'
import { makeStyles } from '@material-ui/core';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import Image2 from '../../asset/pageWork/About/IMG-20210930-WA0007.jpg'
import Image3 from '../../asset/pageWork/About/IMG-20210930-WA0008.jpg'
import Image4 from '../../asset/pageWork/About/IMG-20210930-WA0009.jpg'
import Image5 from '../../asset/pageWork/About/IMG-20210930-WA0010.jpg'

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        padding: '0',
        height: '100vh',

    },
}));

export default function SliderAbout() {
    const classes = useStyles();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <Slider {...settings} className={classes.root}>

                <div>
                    <img src={Image2} alt="" style={{ padding: '30px 100px', width: "100%", height: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={Image3} alt="" style={{ padding: '30px 100px', width: "100%", height: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={Image4} alt="" style={{ padding: '30px 100px', width: "100%", height: '400px', objectFit: 'cover' }} />
                </div>
                <div>
                    <img src={Image5} alt="" style={{ padding: '30px 100px', width: "100%", height: '400px', objectFit: 'cover' }} />
                </div>

            </Slider>
        </div>
    );
}

