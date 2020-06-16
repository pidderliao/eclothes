import React, { Component } from 'react'
import Slider from 'react-slick'

export default class SliderBanner extends Component {

    render() {
        const imgArr = ['https://efshop3-wabow.cdn.hinet.net/files/1/adpics/20200608150155_54.jpg',
            'https://efshop3-wabow.cdn.hinet.net/files/1/adpics/20200608175859_74.jpg',
            'https://efshop3-wabow.cdn.hinet.net/files/1/adpics/20200604231004_12.jpg',
            'https://efshop3-wabow.cdn.hinet.net/files/1/adpics/20200608120252_61.jpg'];

        const settings = {
            // dots: true,
            autoplay: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true
        };

        const items = imgArr.map((item, index) => {
            return (
                <div className="sliderBanner" key={index}>
                    <img src={item} alt="" />
                </div>
            );

        })

        return (

            <div>

                <Slider {...settings}>
                    {items}
                </Slider>

            </div >
        );
    }
}