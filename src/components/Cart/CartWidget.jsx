import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function CartWidget() {
    const { totalItems } = useContext(CartContext);

    return (
        <div className="position-relative">
            <i className="bi bi-cart"></i>
            {totalItems() > 0 && <span className="badge bg-danger">{totalItems()}</span>}
        </div>
    );
}

export default CartWidget;
