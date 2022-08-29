import { React, useState } from "react";
import Heading from "../shared/Heading/Heading";
import Links from "../shared/Links/Links";
import Copyright from "./Copyright/Copyright";
import Styles from './footer.module.scss';
import SubFooter from "./SubFooter/SubFooter";
import MobileFooter from "./MobileFooter";
const Footer = () => {
  return (
    <>
      <div className={Styles.footerSection} >
        <div className="container">
          <div className={Styles.footerMenu}>
            <div className={Styles.footer}>
              {
                footerItem.map((value) => {
                  return (
                    <div item xs={12} sm={4} md={3} mb="15px">
                      <Heading fontWeight="700" headingType="h4" fontSize="lg" headingText={value.heading} color="white"> </Heading>
                      <ul>
                        <li>
                          <Links fontSize="sm" color="white" textDecoration={false} href="#" linkText={value.links_1}> </Links>
                        </li>
                        <li>
                          <Links fontSize="sm" color="white" textDecoration={false} href="#" linkText={value.links_2}> </Links>
                        </li>
                        <li>
                          <Links fontSize="sm" textDecoration={false} href="#" color="white" linkText={value.links_3}> </Links>                      </li>
                        <li>
                          <Links fontSize="sm" textDecoration={false} href="#" color="white" linkText={value.links_4}> </Links>                      </li>
                        <li>
                          <Links fontSize="sm" textDecoration={false} href="#" color="white" linkText={value.links_5}> </Links>                      </li>
                      </ul>
                    </div>

                  )
                })
              }
              <div item xs={12} sm={4} md={3} mb="15px">
                <Heading fontWeight="700" headingType="h4" fontSize="lg" headingText=" New Customer" color="white"> </Heading>
                <ul>

                  <li>
                    <Links fontSize="sm" color="white" textDecoration={false} href="#" linkText="Become a Customer
"> </Links>
                  </li>
                  <li>
                    <Links fontSize="sm" color="white" textDecoration={false} href="#" linkText="Govt. Customers
"> </Links>
                  </li>
                  <li>
                    <Links fontSize="sm" textDecoration={false} href="#" color="white" linkText="Membership
"> </Links>                      </li>

                </ul>
                <Heading fontWeight="700" headingType="h4" fontSize="lg" headingText=" Join the Staples Team" color="white"> </Heading>
                <ul>

                  <li>
                    <Links fontSize="sm" color="white" textDecoration={false} href="#" linkText=" Careers
"> </Links>
                  </li>



                </ul>
              </div>



            </div>




          </div>
          <MobileFooter/>
        </div>

      </div>
      <SubFooter />
      <Copyright />
    </>
  )
}



const footerItem = [
  {
    heading: 'Customer Service',
    links_1: 'Help Center',
    links_2: 'Contact Us',
    links_3: 'Recall Information',
    links_4: 'Safety Data Sheets',


  },
  {
    heading: 'Corporate Info',
    links_1: 'Staples Professional Overview',
    links_2: 'Industries Served',
    links_3: 'Blog',
    links_4: 'Our Brands'
  },
  {
    heading: 'Staples Corporate Solutions',
    links_1: 'Office Products',
    links_2: 'Technology Products',
    links_3: 'Furniture',
    links_4: 'Facilities',
    links_5: 'Promotional Products'
  },
]
export default Footer;