import React, { useContext } from "react";
import { Button, StyleSheet, View } from "react-native";
import { Context } from "../components/Store";
import Colours from "../constants/Colours";
export default p => {
    const [state, dispatch] = useContext(Context);
    const confirm = () => {
        dispatch({ type: "SET_POSTS", payload: [] });
        p.navigation.replace("Receipt");
    }
    return (
        <View style={styles.container}>
            <Button title="Confirm" onPress={confirm} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.confirmPurchase,
        justifyContent: 'center',
        alignItems: 'center',
    }
})