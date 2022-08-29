import React from "react";
import Img from "../shared/Img/Img";
import Links from "../shared/Links/Links";
import Styles from './BottomSection.module.scss';
import Text from "../shared/Text/Text";
const BottomSection = () => {
    return (
        <div className="container">
            <div className={Styles.BottomSection}>
                <div className={Styles.BottomSection_Item}>
                    <Img src="Business_Update_EN.webp" alt="heroimg"></Img>
                </div>
                <div className={Styles.BottomSection_Text}>
                    <Text textType="p" text="Staples Professional is here to serve you. Read our latest updates.">

                    </Text>
                    <Links color="red" textTransform="upper" textDecoration={false} href="#" linkText="learn more">
                    <Text text="" textType="span" className="icon-arrow_forward_ios" />
                    </Links>
                </div>
            </div>
        </div>
    )
}
export default BottomSection;