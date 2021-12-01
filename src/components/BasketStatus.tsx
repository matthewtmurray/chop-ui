import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const BasketStatus = (props: any) => {
  return (
    <div style={{ position: "fixed", top: "10px", right: "10px" }}>
      <p>
        <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
      </p>
      <p>
        {props.total +
          (props.total > 1 || props.total === 0
            ? " items in basket chuck"
            : "item in basket chuck")}
      </p>
    </div>
  );
};
