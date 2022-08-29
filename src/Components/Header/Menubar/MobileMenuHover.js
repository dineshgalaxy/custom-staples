import {React,useState} from "react";
import Icon from '../../shared/Icon/Icon';
import Link from '../../shared/Links/Links';

const MobileMenuHover = ({text, children }) => {
    const [show, setShow] = useState(false);

    return (
        <li  onClick={() => { setShow(true) }}  onMouseLeave={() => { setShow(false) }}>
            <Link textDecoration={false} color="mainSecondary" textTransform="upper" href="#" fontFamily="MotivaRegular" fontSize="lg">

                {text}
                {/* <Icon iconName="fas fa-angle-up"></Icon>  */}
                 <Icon iconName="fas fa-angle-down"></Icon>
                   

            </Link>
            {show && <div>{children}</div>}
        </li>
    )
}
export default MobileMenuHover;