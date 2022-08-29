import { React, useState } from "react";
import Styles from './menubar.module.scss';
import Link from '../../shared/Links/Links';
import Icon from '../../shared/Icon/Icon';
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
const Menubar = (props) => {
    

    return (
        <>
            <div className={Styles.menubar}>
                <div className="container">

                    <ul className={Styles.menu}>
                        <Menu menu="products">
                            <div className={Styles.menuItem }>
                                <ul className={Styles.sideBarMenu}>
                                    {
                                        megaMenuSideBar.map((item) => {
                                            return (
                                                <li >
                                                    <Link href="#" color="mainSecondary" fontFamily="MotivaRegular" textDecoration={false} fontWeight="font700" fontSize="sm">{item.list}</Link>
                                                </li>
                                            )
                                        })
                                    }



                                </ul>
                                <div className={Styles.megaMenu}>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" >Computer Accessories
                                        </Link>
                                        {
                                            megaMenu1.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" > Computer Components
                                        </Link>
                                        {
                                            megaMenu2.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                </div>



                            </div>
                        </Menu>
                        <Menu menu="service & solutions">
                            <div className={Styles.menuItem }>
                                <ul className={Styles.sideBarMenu}>
                                    {
                                        megaMenuSideBar.map((item) => {
                                            return (
                                                <li >
                                                    <Link href="#" color="mainSecondary" fontFamily="MotivaRegular" textDecoration={false} fontWeight="font700" fontSize="sm">{item.list}</Link>
                                                </li>
                                            )
                                        })
                                    }



                                </ul>
                                <div className={Styles.megaMenu}>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" >Computer Accessories
                                        </Link>
                                        {
                                            megaMenu1.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" > Computer Components
                                        </Link>
                                        {
                                            megaMenu2.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                </div>



                            </div>
                        </Menu>
                        <Menu menu="brands">
                            <div className={Styles.menuItem }>
                                <ul className={Styles.sideBarMenu}>
                                    {
                                        megaMenuSideBar.map((item) => {
                                            return (
                                                <li >
                                                    <Link href="#" color="mainSecondary" fontFamily="MotivaRegular" textDecoration={false} fontWeight="font700" fontSize="sm">{item.list}</Link>
                                                </li>
                                            )
                                        })
                                    }



                                </ul>
                                <div className={Styles.megaMenu}>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" >Computer Accessories
                                        </Link>
                                        {
                                            megaMenu1.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" > Computer Components
                                        </Link>
                                        {
                                            megaMenu2.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                </div>



                            </div>
                        </Menu>
                        <Menu menu="deals">
                            <div className={Styles.menuItem }>
                                <ul className={Styles.sideBarMenu}>
                                    {
                                        megaMenuSideBar.map((item) => {
                                            return (
                                                <li >
                                                    <Link href="#" color="mainSecondary" fontFamily="MotivaRegular" textDecoration={false} fontWeight="font700" fontSize="sm">{item.list}</Link>
                                                </li>
                                            )
                                        })
                                    }



                                </ul>
                                <div className={Styles.megaMenu}>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" >Computer Accessories
                                        </Link>
                                        {
                                            megaMenu1.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" > Computer Components
                                        </Link>
                                        {
                                            megaMenu2.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                </div>



                            </div>
                        </Menu> 
                        <Menu menu="piblications">
                            <div className={Styles.menuItem }>
                                <ul className={Styles.sideBarMenu}>
                                    {
                                        megaMenuSideBar.map((item) => {
                                            return (
                                                <li >
                                                    <Link href="#" color="mainSecondary" fontFamily="MotivaRegular" textDecoration={false} fontWeight="font700" fontSize="sm">{item.list}</Link>
                                                </li>
                                            )
                                        })
                                    }



                                </ul>
                                <div className={Styles.megaMenu}>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" >Computer Accessories
                                        </Link>
                                        {
                                            megaMenu1.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                    <ul>
                                        <Link fontWeight="font700" color="mainSecondary" fontFamily="MotivaRegular" fontSize="sm" > Computer Components
                                        </Link>
                                        {
                                            megaMenu2.map((item) => {
                                                return (
                                                    <li>
                                                        <Link href="#" textDecoration={false} color="extraLightSecondary" fontFamily="MotivaRegular" fontSize="sm">{item.list}</Link>
                                                    </li>
                                                )
                                            })
                                        }



                                    </ul>
                                </div>



                            </div>
                        </Menu>
                        <li>
                            <Link textDecoration={false} fontWeight="font700" color="mainSecondary" textTransform="upper" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                become a customer
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
            <MobileMenu />


     

        </>
    )
}
export default Menubar;


const megaMenuSideBar = [
    { list: 'Computer Accessories & Components' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
    { list: 'Computers' },
    { list: 'Electronics' },
]

const megaMenu1 = [
    { list: 'Batteries & Power Supply' },
    { list: ' Batteries' },
    { list: 'Computer Cables' },
    { list: 'Computer Headsets & Microphones' },
    { list: 'Data Storage' },
    { list: 'Electronic Cleaning' },
    { list: 'Laptop Bags & Sleeves' },
    { list: 'Mice & Keyboards' },
    { list: 'Monitor Stands & Screen Filters' },
    { list: ' Monitors & Accessories' },
    { list: 'Networking' },
    { list: 'PC Headsets' },
    { list: 'PC Headsets' },
    { list: ' PC Speakers' },
    { list: ' Webcams' },
]
const megaMenu2 = [
    { list: 'Batteries & Power Supply' },
    { list: ' Batteries' },
    { list: 'Computer Cables' },
    { list: 'Computer Headsets & Microphones' },
    { list: 'Data Storage' },
    { list: 'Electronic Cleaning' },
    { list: 'Laptop Bags & Sleeves' },
    { list: 'Mice & Keyboards' },
    { list: 'Monitor Stands & Screen Filters' },
    { list: ' Monitors & Accessories' },
    { list: 'Networking' },
    { list: 'PC Headsets' },
    { list: 'PC Headsets' },
    { list: ' PC Speakers' },
    { list: ' Webcams' },
]
