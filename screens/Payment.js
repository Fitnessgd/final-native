import React, { useContext, useState } from "react";
import { Button, StyleSheet, TextInput, TouchableHighlight, View } from "react-native";
import { Context } from "../components/Store";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
export default p => {
    const [state, dispatch] = useContext(Context);
    const confirm = () => {
        dispatch({ type: "SET_POSTS", payload: [] });
        p.navigation.replace("Receipt");
    }
    const [details, setDetails] = useState({
        firstName: "",
        surname: "",
        emailUser: "",
        emailDomain: "",
        tel: "",
        country: "",
        city: "",
        address: "",
        cardHolder: "",
        id: "",
        credCardNum: "",
        expiryDate: "",
        cvv: ""
    })
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>First Name</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.firstName}
                            onChangeText={v => setDetails({ ...details, firstName: v })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>Surname</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.surname}
                            onChangeText={v => setDetails({ ...details, surname: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>Email</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.emailUser}
                            onChangeText={v => setDetails({ ...details, emailUser: v })}
                            keyboardType="email-address"
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>Tel</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            keyboardType="phone-pad"
                            value={details.tel}
                            onChangeText={v => setDetails({ ...details, tel: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>Country</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.country}
                            onChangeText={v => setDetails({ ...details, country: v })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>City</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.city}
                            onChangeText={v => setDetails({ ...details, city: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>Address</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.address}
                            onChangeText={v => setDetails({ ...details, address: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>

                <View style={styles.fieldGroup}>
                    <WhiteText>Card Holder</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.cardHolder}
                            onChangeText={v => setDetails({ ...details, cardHolder: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>ID</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.id}
                            onChangeText={v => setDetails({ ...details, id: v })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>Credit Card Number</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.credCardNum}
                            onChangeText={v => setDetails({ ...details, credCardNum: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>Expiry Date</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.expiryDate}
                            onChangeText={v => setDetails({ ...details, expiryDate: v })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>CVV</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.cvv}
                            onChangeText={v => setDetails({ ...details, cvv: v })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableHighlight
                    onPress={confirm}
                    style={styles.button}>
                    <WhiteText style={{ fontSize: 16 }}>Confirm</WhiteText>
                </TouchableHighlight>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.confirmPurchase,
        width: "100%",
        flex: 1
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "100%",
    },
    fieldGroup: {
        flex: 1,
        marginRight: 10,
        marginTop: 3
    },
    field: {
        color: Colours.white,
        marginLeft: 3,
        width: "100%"
    },
    fieldBorder: {
        borderWidth: 3,
        borderColor: Colours.white,
        borderRadius: 10,
        width: "100%",
    },
    button: {
        backgroundColor: Colours.confirm,
        borderRadius: 45,
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: 50,
        marginTop: 10,
        borderWidth: 3,
        borderColor: Colours.white
    },
    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
    }

})