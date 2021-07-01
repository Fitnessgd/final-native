import React from "react";
import { StyleSheet, View } from "react-native";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
export default p => {
    return (
        <View style={styles.container}>
            <WhiteText style={{ fontSize: 20 }}>Your order has been sent.
                {"\n"}You may now continue shopping.</WhiteText>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.confirmPurchase,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});