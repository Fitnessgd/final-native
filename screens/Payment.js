import React, { useContext, useState } from "react";
import { Button, StyleSheet, TextInput, TouchableHighlight, View } from "react-native";
import { Context } from "../components/Store";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
export default p => {
    const [state, dispatch] = useContext(Context);
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
    const confirm = () => {
        if ((`${details.emailUser}@${details.emailDomain}`).match(/\A[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\z/)
            != null) {
            dispatch({ type: "SET_POSTS", payload: [] });
            p.navigation.replace("Receipt");
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>First Name</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.firstName}
                            onChangeText={v => setDetails({ ...details, firstName: v.replace(/[^A-Za-z ]/g, "") })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>Surname</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.surname}
                            onChangeText={v => setDetails({ ...details, surname: v.replaceAll(/[^A-Za-z ]/g, "") })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>

                <View style={styles.fieldGroup}>
                    <WhiteText>Tel</WhiteText>
                    <View style={{ ...styles.row, width: "100%" }}>
                        <WhiteText style={{ alignSelf: "center", marginRight: "1%" }}>+</WhiteText>
                        <View style={{ ...styles.fieldBorder, width: "24%" }}>
                            <TextInput
                                maxLength={3}
                                style={styles.field}
                                keyboardType="phone-pad"
                                value={details.telPrefix}
                                onChangeText={v => setDetails({ ...details, telPrefix: v })}
                            />
                        </View>
                        <View style={{ ...styles.fieldBorder, width: "73%" }}>
                            <TextInput
                                maxLength={9}
                                style={styles.field}
                                keyboardType="phone-pad"
                                value={details.tel}
                                onChangeText={v => setDetails({ ...details, tel: v })}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <WhiteText>Email</WhiteText>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.emailUser}
                            onChangeText={v => setDetails({ ...details, emailUser: v })}
                            keyboardType="email-address"
                        />
                    </View>
                </View>
                <WhiteText style={{ alignSelf: "center", marginRight: 10 }}>@</WhiteText>
                <View style={styles.fieldGroup}>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.emailDomain}
                            onChangeText={v => setDetails({ ...details, emailDomain: v })}
                            keyboardType="email-address"
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
                            onChangeText={v => setDetails({ ...details, country: v.replace(/[^A-Za-z ]/g, "") })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>City/Locality</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            style={styles.field}
                            value={details.city}
                            onChangeText={v => setDetails({ ...details, city: v.replace(/[^A-Za-z ]/g, "") })}
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
                            onChangeText={v => setDetails({ ...details, address: v.replace(/[^A-Za-z\/\\\, 0-9]/g, "") })}
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
                            onChangeText={v => setDetails({ ...details, cardHolder: v.replace(/[^A-Za-z ]/g, "") })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>ID</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            maxLength={9}
                            keyboardType="numeric"
                            style={styles.field}
                            value={details.id}
                            onChangeText={v => setDetails({ ...details, id: v.replace(/[^0-9]/g, "") })}
                        />
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>Credit Card Number</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            maxLength={16}
                            keyboardType="numeric"
                            style={styles.field}
                            value={details.credCardNum}
                            onChangeText={v => setDetails({ ...details, credCardNum: v.replace(/[^0-9]/g, "") })}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.row}>
                <View style={styles.fieldGroup}>
                    <WhiteText>Expiry Date</WhiteText>
                    <View style={{ ...styles.row, width: "40%" }}>
                        <View style={styles.fieldBorder}>
                            <TextInput
                                placeholder={"MM"}
                                placeholderTextColor={Colours.red}
                                keyboardType="numeric"
                                maxLength={2}
                                style={styles.field}
                                value={details.expiryMonth}
                                onChangeText={v => setDetails({ ...details, expiryMonth: v.replace(/[^0-9]/g, "") })}
                            />
                        </View>
                        <WhiteText style={{ alignSelf: "center", marginLeft: 10, marginRight: 10 }}>/</WhiteText>
                        <View style={styles.fieldBorder}>
                            <TextInput
                                placeholderTextColor={Colours.red}
                                placeholder={"YY"}
                                keyboardType="numeric"
                                maxLength={2}
                                style={styles.field}
                                value={details.expiryYear}
                                onChangeText={v => setDetails({ ...details, expiryYear: v.replace(/[^0-9]/g, "") })}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.fieldGroup}>
                    <WhiteText>CVV</WhiteText>
                    <View style={styles.fieldBorder}>
                        <TextInput
                            maxLength={3}
                            keyboardType="numeric"
                            style={styles.field}
                            value={details.cvv}
                            onChangeText={v => setDetails({ ...details, cvv: v.replace(/[^0-9]/g, "") })}
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
        width: "100%"
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