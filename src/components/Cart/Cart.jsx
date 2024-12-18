import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
    const { cart, clearCart, totalPrice } = useContext(CartContext);

    if (cart.length === 0) {
        return <p>El carrito está vacío</p>;
    }

    return (
        <div className="container mt-4">
            {cart.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${totalPrice()}</h3>
            <button className="btn btn-danger" onClick={clearCart}>Vaciar Carrito</button>
        </div>
    );
}

export default Cart;
