import { React} from "react";

const Demo = () => {
    // const [click, setClick] = useState(false);

    return <>
            <Simple text="hello">
                <div>
                    <ul>
                        <li><a href="#">qwww</a></li>
                        <li><a href="#">qwww</a></li>
                        <li><a href="#">qwww</a></li>
                        <li><a href="#">qwww</a></li>

                        <li><a href="#">qwww</a></li>
                    </ul>
                </div>
            </Simple>
    </>
}
const Simple = ({text,children})=>{
    return(
        <> 
            <div>{text}{children}</div>
         </>
    )
}

export default Demo;