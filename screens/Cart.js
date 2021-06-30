import React from "react";
import { FlatList, View } from "react-native";
import WhiteText from "../components/WhiteText";
import cart from "../data/cart";
export default function Cart(p) {
    let totalPrice = 0;
    cart.forEach(p => totalPrice += p.totalPrice);
    return (
        <FlatList
            data={cart}
            keyExtractor={(i, k) => k + ""}
            ListHeaderComponent={
                <View>
                    <WhiteText>Total items: {cart.length}</WhiteText>
                    <WhiteText>Total price: {totalPrice}</WhiteText>
                </View>
            }
            renderItem={
                ({ item }) =>
                    <View>
                        <WhiteText>{item.title}</WhiteText>
                        <WhiteText>{item.totalPrice + item.shipping}</WhiteText>
                    </View>
            }
        />
    )
}