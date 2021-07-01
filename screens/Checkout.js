import React, { useContext } from "react";
import { Button, FlatList, StyleSheet, View, Text } from "react-native";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
import { Context } from "../components/Store";
export default p => {
    const [state, dispatch] = useContext(Context);
    let totalPrice = 0;
    const summary = {};
    state.posts.forEach(p => {
        totalPrice += p.totalPrice;
        if (summary[p.title] != undefined)
            summary[p.title].quantity += 1;
        else {
            summary[p.title] = {
                quantity: 1,
                price: p.totalPrice
            }
        }
    });
    return (
        <View style={{ backgroundColor: Colours.confirmPurchase, flex: 1 }}>
            <View style={styles.container}>
                <WhiteText style={{ fontSize: 26 }}>Confirm Purchase</WhiteText>
                <WhiteText style={styles.detailsTxt}>Total Price: {totalPrice}</WhiteText>
                <WhiteText style={styles.detailsTxt}>Number of items: {state.posts.length}</WhiteText>
                <View style={{ marginTop: 20, marginBottom: 5, alignItems: "center" }}>
                    <Button title="Payment" color={Colours.confirm}
                        onPress={() => {
                            //if (state.posts.length > 0)
                                p.navigation.push("Payment");
                        }
                        } />
                </View>
            </View>
            <View style={styles.listHeader}>
                <Text style={{ ...styles.listTxt, color: Colours.listHeader }}>Item quantities</Text>
                <Text style={{ ...styles.listTxt, color: Colours.listHeader }}>Price</Text>
            </View>
            <FlatList
                data={Object.keys(summary)}
                keyExtractor={i => i + ""}
                renderItem={
                    ({ item }) =>
                        <View style={styles.list}>
                            <WhiteText style={styles.listTxt}>{item} {"\n\t\t"}x {summary[item].quantity}</WhiteText>
                            <WhiteText style={styles.listTxt}>{"\n" + (summary[item].price * summary[item].quantity).toFixed(2)}</WhiteText>
                        </View>
                }
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.black
    },
    listHeader: {
        backgroundColor: Colours.confirmPurchase,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    list: {
        backgroundColor: Colours.confirmPurchase,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    listTxt: {
        fontSize: 16
    },
    detailsTxt: {
        fontSize: 18,
    }
})