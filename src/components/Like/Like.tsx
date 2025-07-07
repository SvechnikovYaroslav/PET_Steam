import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { RiDislikeFill } from "react-icons/ri";

interface Props {
    onClick: () => void; 
}

const Like = ({onClick}: Props) => {
    const [pressed, setPressed] = useState(false);
    const toggle = () => {
        setPressed(!pressed);
    }
    if (pressed) return ( <FcLike size={20} onClick={toggle}/>)
    return <RiDislikeFill size={20} onClick={toggle}/>    
}   

export default Like;