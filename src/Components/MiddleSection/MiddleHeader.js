import { React, useState } from "react";
import Styles from './middleheader.module.scss'
import Input from '../shared/Input/Input';
import Button from '../shared/Button/Button';
import Img from '../shared/Img/Img'
import Text from "../shared/Text/Text";
import Link from '../shared/Links/Links';

const MiddleHeader = (props) => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);


    return (
        <div className={Styles.middleTop}>
            <div className="container">
                <div className={Styles.middleheader}>
                    <div className={Styles.logo}>
                        <Img src="logo-en.svg" alt="logo img"></Img>
                    </div>
                    <div className={Styles.searchTop}>
                        <div className={Styles.searchbar}>
                            <div className={Styles.search}>
                                <Input type="text" inputType="input" placeholder="Search for all your business needs"></Input>
                                <Button fontFamily="MotivaRegular" variant="blackBtn" fontSize="xxs" className={`${Styles.searchBtn}`}>
                                    <Img src='search.png' alt="search.png"></Img>
                                </Button>

                            </div>
                            <div className={Styles.inkAndtoner}>
                                <Button startIcon={<Img src='drop.png' alt="search.png"></Img>} fontFamily="MotivaRegular" btnText="Ink &amp; Toner" variant="outlined">

                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.supportmenu}>
                        <ul>
                            <li onMouseLeave={() => { setShow(false) }} onMouseEnter={() => { setShow(true) }}>
                                <Button fontSize="xxs" startIcon={<Img src="sign.png" alt="sign.png"></Img>} fontFamily="MotivaRegular" btnText="" variant="text">
                                    <Text className={Styles.icontext} textType="span" text="Sign in"></Text>
                                </Button>
                                {show && <div className={Styles.signForm}>


                                    <form autoComplete="off">
                                        <div className={Styles.formGroup}>
                                            <label>  User ID</label>
                                            <Input inputType="input" type="text" fontSize='xxs' color="mainSecondary">

                                            </Input>

                                        </div>
                                        <div className={Styles.formGroup}>
                                            <label> password</label>
                                            <Input inputType="input" type="password" fontSize='xxs' color="mainSecondary">

                                            </Input>

                                        </div>
                                        <div className={Styles.checkdiv}>

                                            <Input inputType="input" type="checkbox">

                                            </Input>
                                            <label> Save User ID</label>
                                        </div>
                                        <Button fontWeight variant="redBtn" size="large">Sign in </Button>
                                        <div className={`${Styles.formGroup} ${Styles.loginLink}`}>
                                            <Text text="" color="darkSecondary" fontSize="xxs" fontFamily="MotivaRegular">Forgot
                                                <Link fontSize="xxs" fontFamily="MotivaMedium" color="red"> User ID &nbsp;</Link>
                                                or
                                                <Link fontFamily="MotivaMedium" color="red"> Password?</Link>

                                            </Text>
                                        </div>
                                    </form>
                                </div>}
                            </li>
                            <li  onMouseEnter={() => { setShow1(true) }}>
                                <Button fontSize="xxs" startIcon={<Img src="help.png" alt="help.png"></Img>} fontFamily="MotivaRegular" btnText="" variant="text">
                                    <Text className={Styles.icontext} textType="span" text="Help"></Text>
                                </Button>

                            </li>
                            <li onMouseEnter={() => { setShow2(true) }}>
                                <Button fontSize="xxs" startIcon={<Img src="cart.png" alt="cart.png"></Img>} fontFamily="MotivaRegular" btnText="" variant="text">
                                    <Text className={Styles.icontext} textType="span" text="Cart"></Text>
                                </Button>
                            </li>
                        </ul>
                    </div>


                    {show1 && <ul className={Styles.sideBarMenu} onMouseLeave={() => { setShow1(false) }}>
                        {
                            megaMenuSideBar.map((item) => {
                                return (
                                    <li >
                                        <Link href="#" color="mainSecondary" fontFamily="MotivaRegular" textDecoration={false} fontWeight="font700" fontSize="sm">{item.list}</Link>
                                    </li>
                                )
                            })
                        }



                    </ul>}

                    {show2 && <div className={Styles.cartHover} onMouseLeave={() => { setShow2(false) }}>
                        <Text color="mainSecondary" fontSize="sm" textType="p" text="To use this feature, please sign in or become a customer"></Text>
                   </div>}

                </div>
            </div>
        </div>
    )
}
export default MiddleHeader;
const megaMenuSideBar = [
    { list: 'Contact us' },
    { list: 'Help Center' },
    { list: 'Recall Information' },
]
// const
