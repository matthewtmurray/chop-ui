import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export const BasketStatus = (props: any)=>{
    return(
    <div style={{"position":"fixed","top":"10px","right":"10px"}}>
        <FontAwesomeIcon icon={faCoffee} />
        {props.total} cheese
    </div> 
    );
} 