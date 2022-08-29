import { React, useState } from "react";
import Styles from './MobileMenu.module.scss';
import Link from '../../shared/Links/Links';
import Hamburger from 'hamburger-react';
import Icon from '../../shared/Icon/Icon';
import MobileMenuHover from "./MobileMenuHover";
const MobileMenu = (props) => {
    const [showMenu, setShowMenu] = useState(false);



    return (
        <div className={Styles.mobileMenu}>
            <div className="container">
                <div className={Styles.humburger} onClick={() => setShowMenu(!showMenu)}>
                    <Hamburger size={20} />
                </div>
                <div className={`${Styles.navMenu} ${showMenu && Styles.active}`}>
                    <ul className={Styles.menu}>
                        <MobileMenuHover text=" products">


                            <ul>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                        Computer Accessories & Components
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Computers
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Food & Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Furniture & Home
                                    </Link>
                                </li>
                            </ul>

                        </ MobileMenuHover>
                        <MobileMenuHover text=" service & solutions">


                            <ul>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                        Computer Accessories & Components
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Computers
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Food & Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Furniture & Home
                                    </Link>
                                </li>
                            </ul>

                        </ MobileMenuHover>
                        <MobileMenuHover text="brands">


<ul>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
            Computer Accessories & Components
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Computers
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Electronics
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Food & Cleaning
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Furniture & Home
        </Link>
    </li>
</ul>

                        </ MobileMenuHover>
                        <MobileMenuHover text=" deals">


                            <ul>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                        Computer Accessories & Components
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Computers
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Electronics
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Food & Cleaning
                                    </Link>
                                </li>
                                <li>
                                    <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
                                    Furniture & Home
                                    </Link>
                                </li>
                            </ul>

                        </ MobileMenuHover>
                        <MobileMenuHover text=" publications">


<ul>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
            Computer Accessories & Components
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Computers
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Electronics
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Food & Cleaning
        </Link>
    </li>
    <li>
        <Link textDecoration={false} color="mainSecondary" textTransform="capital" href="#" fontFamily="MotivaRegular" fontSize="sm">
        Furniture & Home
        </Link>
    </li>
</ul>

</ MobileMenuHover>
                        <li>
                            <Link textDecoration={false} color="mainSecondary" textTransform="upper" href="#" fontFamily="MotivaRegular" fontSize="lg">
                                become a customer
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>



        </div>
    )
}
export default MobileMenu;

