import {React,useState} from "react";
import Link from '../../shared/Links/Links';
import Icon from '../../shared/Icon/Icon';

const Menu = ({menu, children }) => {
    const [click, setClick] = useState(false);
    return (
        <>
            <li  onMouseEnter={() => { setClick(true) }}  onMouseLeave={() => { setClick(false) }}>
                <Link  textDecoration={false} fontWeight="font700" color="mainSecondary" textTransform="upper" href="#" fontFamily="MotivaRegular" fontSize="sm">
                    {menu}
                            <Icon iconName="fas fa-angle-down"></Icon>
                </Link>
                   {click && <div>{children}</div>  }
            </li>
        </>
    )
}
export default Menu;