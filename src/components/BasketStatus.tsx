import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const BasketStatus = (props: any) => {
  return (
    <div>
      <p>
        <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
      </p>
      <p>
        {props.total +
          (props.total > 1 || props.total === 0
            ? " items in basket"
            : " item in basket")}
      </p>
    </div>
  );
};
