import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
import cart from "../data/cart";
import usePrice from "../hooks/usePrice";
export default function Cart(p) {
    const totalPrice = usePrice();
    return (
        <View style={styles.container}>
            <WhiteText>Total items: {cart.length}</WhiteText>
            <WhiteText>Total price: {totalPrice[0].toFixed(2)}</WhiteText>
            <FlatList
                data={cart}
                keyExtractor={(i, k) => k + ""}
                renderItem={
                    ({ item }) =>
                        <View style={styles.product}>
                            <WhiteText style={styles.productTxt}>{item.title}</WhiteText>
                            <WhiteText style={styles.productTxt}>{item.totalPrice + item.shipping}</WhiteText>
                        </View>
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.background,
        alignItems: 'center',
    },
    product: {
        flex: 1,
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly"
    },
    productTxt: {
        margin: 10,
        fontSize: 18,
    }
});