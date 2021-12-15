import { BasketStatus } from "./BasketStatus";
import "./ComponentStyles.css";
import { Link } from "react-router-dom"

export const NavBar = (props: any) => {
    return (
        <div className="container navBar">
            <div className="row">
            <div className="col-2">
                 <Link to='/main' style={{color: "black"}}>
                    Main Page
                 </Link>
                </div>
                <div className="col-8">
                </div>
                <div className="col-2">
                 <Link to='/basket' style={{color: "black"}}>
                    <BasketStatus/>
                 </Link>
                </div>
            </div>
        </div>
      );
    };