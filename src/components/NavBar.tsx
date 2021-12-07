import { BasketStatus } from "./BasketStatus";
import "./ComponentStyles.css";

export const NavBar = (props: any) => {
    return (
        <div className="container navBar">
            <div className="row">
                <div className="col-10">
                </div>
                <div className="col-2">
                <BasketStatus total={props.total}/>
                </div>
            </div>
        </div>
      );
    };