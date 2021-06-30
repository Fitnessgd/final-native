import { useState } from "react";
/*export default function () {
    const [totalPrice, setTotalPrice] = getTotalPrice();
    cart.forEach(p => setTotalPrice(totalPrice + p.totalPrice));
    return (num) => setTotalPrice(totalPrice + num);
}*/
export default () => useState(0);