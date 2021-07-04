import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Context } from "../components/Store";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
export default function Cart(p) {
    const [state, dispatch] = useContext(Context);
    let totalPrice = 0;
    state.posts.forEach(p => totalPrice += p.totalPrice);
    return (
        <View style={styles.container}>
            <View style={styles.counterBar}>
                <WhiteText>Number of items: {state.posts.length}</WhiteText>
                <WhiteText>Total price: {totalPrice.toFixed(2)}₪</WhiteText>
                <TouchableOpacity onPress={() => dispatch({ type: "SET_POSTS", payload: [] })}><Text style={{ color: Colours.red }}>Reset</Text></TouchableOpacity>
            </View>
            <FlatList
                data={state.posts}
                keyExtractor={(i, k) => k + ""}
                renderItem={
                    ({ item }) =>
                        <View style={styles.product}>
                            <WhiteText style={styles.productTxt}>{item.title}</WhiteText>
                            <WhiteText style={styles.productTxt}>{(item.totalPrice + item.shipping).toFixed(2)}₪</WhiteText>
                            <TouchableOpacity
                                style={{ backgroundColor: Colours.darkRed, borderWidth: 2, borderRadius: 90, height: "70%", alignSelf: "center", justifyContent: "center" }}
                                onPress={() => dispatch({ type: "REMOVE_POST", payload: item })}>
                                <WhiteText style={{ margin: 10 }}>Remove</WhiteText>
                            </TouchableOpacity>
                        </View>
                }
            />
        </View >
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
        justifyContent: "space-evenly",
        backgroundColor: Colours.cart,
        borderBottomWidth: 1,
        borderTopWidth: 1
    },
    productTxt: {
        margin: 10,
        fontSize: 18,
    },
    counterBar: {
        flexDirection: "row",
        width: "100%",
        height: 30,
        justifyContent: "space-around",
        alignItems: "center"
    }
});