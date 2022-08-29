import React from "react";
import Styles from './Sliders.module.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Text from "../shared/Text/Text";
const Sliders = () => {

    var settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div 
                style={{
                    bottom:'18px'
                }}
            >
                <ul className={Styles.dots}> {dots} </ul>
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <div
                className={Styles.rightArrow}
                onClick={onClick}
                style={{ marginRight: '24px' }}
            ><Text text="" textType="span" className="icon-arrow_forward_ios" /> </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className={Styles.rightArrow}
                onClick={onClick}
                style={{ left: '0', zIndex: 1, marginLeft: '24px' }}

            ><Text text="" textType="span" className="icon-arrow_back_ios" /></div>
        );
    }
    return (
        <div marginBottom="10px"   >
            <div className="container">
                <Slider {...settings}>
                    {
                        bannerItem.map((sliderImg) => {
                            return (
                                <div className={Styles.slider}>
                                    <img src={sliderImg.img} alt={sliderImg.img} width='100%'/>
                                </div>
                            )
                        })
                    }

                </Slider>
            </div>
        </div>
    )
}
const bannerItem = [
    {
        img: 'sliderImg1',
    },
    {
        img: 'sliderImg2',
    },
    {
        img:' sliderImg3',
    },
    {
        img: 'sliderImg1',
    },
    {
        img: 'sliderImg2',
    },
]
export default Sliders;