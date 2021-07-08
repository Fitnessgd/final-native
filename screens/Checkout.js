import React, { useContext, useState } from "react";
import { Button, FlatList, StyleSheet, View, Text } from "react-native";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
import { Context } from "../components/Store";
import { Picker } from "@react-native-picker/picker";
export default p => {
    const [state, dispatch] = useContext(Context);
    const [coupon, setCoupon] = useState(0);
    const [discount, setDiscount] = useState(0);
    const couponChoice = v => {
        let discount;
        switch (v) {
            case 1:
                discount = 20; break;
            case 2:
                discount = 10; break;
            case 3:
                discount = 30; break;
            default:
                discount = 0; break;
        }
        if (discount < initPrice) {
            setCoupon(v); setDiscount(discount);
        }
        else setCoupon(0);
    }
    let initPrice = 0;
    const summary = {};
    state.posts.forEach(p => {
        initPrice += p.totalPrice;
        if (summary[p.title] != undefined)
            summary[p.title].quantity += 1;
        else {
            summary[p.title] = {
                quantity: 1,
                price: p.totalPrice
            }
        }
    });
    let totalPrice = initPrice - (discount < initPrice ? discount : 0);
    return (
        <View style={{ backgroundColor: Colours.confirmPurchase, flex: 1 }}>
            <View style={styles.container}>
                <WhiteText style={{ fontSize: 26 }}>Confirm Purchase</WhiteText>
                <WhiteText style={styles.detailsTxt}>Total Price: {totalPrice.toFixed(2)}₪</WhiteText>
                <WhiteText style={styles.detailsTxt}>Number of items: {state.posts.length}</WhiteText>
                <View style={{ marginTop: 20, marginBottom: 5, alignItems: "center" }}>
                    <View style={styles.coupon}>
                        <Picker
                            style={{ height: 20, color: Colours.white, borderWidth: 3, borderColor: Colours.white, textAlign: "center" }}
                            selectedValue={coupon}
                            onValueChange={couponChoice}>
                            <Picker.Item label="Choose coupon..." value={0} />
                            <Picker.Item label="Winter Sale 20₪" value={1} />
                            <Picker.Item label="Summer Sale 10₪" value={2} />
                            <Picker.Item label="Gift Card 30₪" value={3} />
                        </Picker>
                    </View>
                    <Button title="Payment" color={Colours.confirm}
                        onPress={() => {
                            if (state.posts.length > 0)
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
                            <WhiteText style={styles.listTxt}>{"\n" + (summary[item].price * summary[item].quantity).toFixed(2)}₪</WhiteText>
                        </View>
                }
            />
        </View >
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
    },
    coupon: {
        borderWidth: 3,
        borderColor: Colours.white,
        width: "60%",
        justifyContent: "center",
        marginBottom: 10
    }
})