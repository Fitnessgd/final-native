import cart from "../data/cart";
import { getTotalPrice } from "../hooks/usePrice";
export default p => {
    const [totalPrice, setTotalPrice] = getTotalPrice();
    cart.push(p);
    setTotalPrice(totalPrice + p.totalPrice);
}