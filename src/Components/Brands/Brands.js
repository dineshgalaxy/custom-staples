import React from 'react';
import Styles from './brands.module.scss'
import Heading from '../shared/Heading/Heading';
import Img from '../shared/Img/Img';
const Brands = () =>{
    return(
        <div className="container">
        <div className={Styles.brandHeading}>
        <Heading headingType="h3" color="red" headingText="Staples Exclusive."/>
        <Heading headingType="h3"  headingText="Meet the Brands."/>
        </div>
             
              <div className={`${Styles.brands}`}>
              {
                        imgItem.map((imgvalue) => {
                            return (
                                <>
                                    <div className={Styles.brandImg}>
                                        <Img src={imgvalue.imgsrc} alt="heroimg"></Img>
                                    </div>
                                </>
                            )
                        })
                    }
              </div>
        </div>
    )
}
export default Brands;

const imgItem = [
    {
        imgsrc:'brand1'
    },
    {
        imgsrc:'brand2'
    },
    {
        imgsrc:'brand3'
    },
    {
        imgsrc:'brand4'
    },
    {
        imgsrc:'brand5'
    },
    {
        imgsrc:'brand6'
    },
    
];