import { React, useState } from "react";
import Styles from './MobileFooter.module.scss';
import Link from '../shared/Links/Links';
import MobileFooterHover from "./MobileFooterHover";
const MobileFooter = (props) => {


  return (
    <div className={Styles.mobileFooter}>
      <div className="container">
        <div className={Styles.footer}>
          <ul className={Styles.menu}>
            <MobileFooterHover text=" Customer Service">

              <ul>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Safety Data Sheets
                  </Link>
                </li>
              </ul>
            </MobileFooterHover>
            <MobileFooterHover text=" Corporate Info">

              <ul>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Safety Data Sheets
                  </Link>
                </li>
              </ul>
            </MobileFooterHover>
            <MobileFooterHover text=" Staples Corporate Solutions">

              <ul>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Safety Data Sheets
                  </Link>
                </li>
              </ul>
            </MobileFooterHover>
            <MobileFooterHover text="  New Customer">

              <ul>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Safety Data Sheets
                  </Link>
                </li>
              </ul>
            </MobileFooterHover>
            <MobileFooterHover text="  Join the Staples Team">

              <ul>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link textDecoration={false} color="white" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    Safety Data Sheets
                  </Link>
                </li>
              </ul>
            </MobileFooterHover>
          </ul>
        </div>
      </div>



    </div>
  )
}
export default MobileFooter;

