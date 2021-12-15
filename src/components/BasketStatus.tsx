import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

export const BasketStatus = () => {

  const orders = useSelector((state: any) => state.basket.orders);

  const getTotal = () => {
    let total = 0;
    orders.forEach((o) => {
      total = total + o.amount;
    });
    return total;
  };

  return (
    <div>
      <p>
        <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
      </p>
      <p>
        {getTotal() +
          (getTotal() > 1 || getTotal() === 0
            ? " items in basket"
            : " item in basket")}
      </p>
    </div>
  );
};
