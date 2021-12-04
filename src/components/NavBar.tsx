import { BasketStatus } from "./BasketStatus";

export const NavBar = (props: any) => {
    return (
        <div className="container" style={{marginTop: "15px"}}>
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