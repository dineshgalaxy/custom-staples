import {React,useState} from "react";
import Icon from '../shared/Icon/Icon';
import Link from '../shared/Links/Links';

const MobileFooterHover = ({text, children }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (               

            <li onClick={() => { setShowMenu(true) }}  onMouseLeave={() => { setShowMenu(false) }}>
             
             <Link  textDecoration={false} color="white" textTransform="capital" fontWeight="font700" fontFamily="MotivaRegular" fontSize="md">
             {text}
                {/* <Icon iconName="fas fa-angle-up"></Icon>  */}
                 <Icon fontSize="h5"  iconName="fas fa-angle-down"></Icon>
                   
            </Link>
            {showMenu && <div>{children}</div>}
           
        </li>
        
    )
}
export default MobileFooterHover;