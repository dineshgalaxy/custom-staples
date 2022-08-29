import React from "react";
import Img from "../shared/Img/Img";
import Links from "../shared/Links/Links";
import Text from "../shared/Text/Text";
import Styles from './flyer.module.scss';
import Heading from '../shared/Heading/Heading';
const Flyer = () => {
    return (
        <div className="container">
            <div className={`${Styles.flyer}`}>
                <div className={Styles.topflyer}>
                    <div className={Styles.imgflyer}>
                        <Img src="EWAY_FLYERICON_LEFT.webp" alt="img" />
                    </div>
                    <div className={Styles.textflyer}>
                        <Heading headingType="h4" headingText="Monthly Flyer" fontSize="lg"></Heading>
                        <Text
                        
                        text="Get the latest deals on the products your business needs."
                        fontSize="lg"
                        >
                        </Text>
                        <Links href="#" fontSize="lg" >VIEW NOW <Text text="" textType="span" className="icon-arrow_forward_ios" /></Links>
                    </div>
                </div>
                <div className={Styles.topflyer}>
                    <div className={Styles.imgflyer}>
                        <img src="EWAY_PUBLICATIONICON_RIGHT.webp" alt="img" />
                    </div>
                    <div className={Styles.textflyer}>
                    <Heading headingType="h4" headingText="Catalogues & Product Guides" fontSize="lg"></Heading>
                        <Text
                        
                        text="Browse our wide range of products and solutions for your business."
                        fontSize="lg"
                        >
                        </Text>
                        <Links href="#" fontSize="lg" >VIEW NOW <Text text="" textType="span" className="icon-arrow_forward_ios" /></Links>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Flyer;


// const flyerItem = [
//     {

//     }
// ];