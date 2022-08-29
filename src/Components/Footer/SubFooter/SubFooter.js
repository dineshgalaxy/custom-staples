import React from "react";
import Heading from "../../shared/Heading/Heading";
import Img from "../../shared/Img/Img";
import Styles from "./subfooter.module.scss";
const SubFooter = () => {
    return (
        <div  className={Styles.subFooter}
        >
                    <div className="container">

            <div className="Container">
                    <div className={Styles.footmid}>
                        <div className={Styles.socialIcon}>
                            <Heading headingType="h6" fontSize="sm" color="white" fontWeight="font700" headingText="Join us on"></Heading>
                            <div className={Styles.socialMedia}>

                               <Img src="socialIcon1" alt="socialIcon1"></Img>
                               <Img src="socialIcon2" alt="socialIcon2"></Img>
                               <Img src="socialIcon3" alt="socialIcon3"></Img>
                               <Img src="socialIcon4" alt="socialIcon4"></Img>
                               <Img src="socialIcon5" alt="socialIcon5"></Img>
                            </div>
                        </div>
                        <div className={Styles.midImg}>
                            <Img src="bullfrogpower.svg" alt="img" ></Img>
                            <Img src="accessibility-logo.svg" alt="img"></Img>

                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default SubFooter;