import React from "react";
import Links from "../../shared/Links/Links";
import Text from "../../shared/Text/Text";
import Styles from './copyright.module.scss'
const Copyright = () => {
    return (
        <div className={Styles.copyrightSection}>
            < div className="container" >
                <div className={Styles.copyright} display="flex" justifyContent="center">
                    <div>
                        <Text textType="p" fontSize="sm" color="white"
                        text="© Copyright 2021 Staples Professional Inc. All rights reserved."
                        ></Text>
                        <ul>
                        <li>
                                <Links  fontSize="sm" color="white" textDecoration={false} href="#" linkText="Staples Professional"></Links>
                            </li>
                            <li>
                                <Links  fontSize="sm" color="white" textDecoration={false} href="#" linkText="Staples Professional"></Links>
                            </li>
                            <li>
                                <Links  fontSize="sm" color="white" textDecoration={false} href="#" linkText="Staples Professional"></Links>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright;