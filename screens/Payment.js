import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { useHeaderHeight } from "@react-navigation/stack";
import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
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
        telPrefix: "",
        tel: "",
        country: "",
        city: "",
        address: "",
        cardHolder: "",
        id: "",
        credCardNum: "",
        expiryMonth: "",
        expiryYear: "",
        cvv: ""
    })
    const [warning, setWarning] = useState("");
    const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
    const nameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/g;
    const confirm = () => {
        console.log((`${details.emailUser}@${details.emailDomain}`)
            .match(emailRegex));
        console.log(details.cardHolder.match(nameRegex))
        if (
            (`${details.emailUser}@${details.emailDomain}`)
                .match(emailRegex)
            != null
            && details.firstName.length > 0
            && details.surname.length > 0
            && details.telPrefix.length > 0
            && details.tel.length == 9
            && details.country.length > 0
            && details.city.length > 0
            && details.address.length > 0
            && details.cardHolder
                .match(nameRegex) != null
            && details.id.length == 9
            && details.credCardNum.length == 16
            && Number(details.expiryMonth) >= 1 && Number(details.expiryMonth) <= 12
            && details.expiryYear.length == 2
            && details.cvv.length == 3
        ) {
            dispatch({ type: "SET_POSTS", payload: [] });
            p.navigation.replace("Receipt");
        }
        else {
            setWarning("Please check the validity of your details.")
        }
    }
    const headerHeight = useHeaderHeight();
    const tabHeight = useBottomTabBarHeight();
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <View style={styles.container} >
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
                                onChangeText={v => setDetails({ ...details, surname: v.replace(/[^A-Za-z ]/g, "") })}
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
                                    onChangeText={v => setDetails({ ...details, telPrefix: v.replace(/[^0-9]/g, "") })}
                                />
                            </View>
                            <View style={{ ...styles.fieldBorder, width: "73%" }}>
                                <TextInput
                                    maxLength={9}
                                    style={styles.field}
                                    keyboardType="phone-pad"
                                    value={details.tel}
                                    onChangeText={v => setDetails({ ...details, tel: v.replace(/[^0-9]/g, "") })}
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
                                maxLength={64}
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
                                maxLength={253}
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
                        <WhiteText>Card Holder - First name and Surname</WhiteText>
                        <View style={styles.fieldBorder}>
                            <TextInput
                                style={styles.field}
                                value={details.cardHolder}
                                onChangeText={v => setDetails({ ...details, cardHolder: v.replace(/^[^A-Za-z]/g, "") })}
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
                <Text style={{ color: Colours.red, alignSelf: "center" }}>{warning}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        onPress={confirm}
                        style={styles.button}
                    >
                        <Text style={{ fontSize: 16, color: Colours.white }}>Confirm</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.confirmPurchase,
        flex: 1,
        width: "100%"
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