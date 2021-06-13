import React from "react";
import { StyleSheet, View } from "react-native";
export default function (p) {
    return (
        <View>
            {p.children}
        </View>
    )
}
const styles = StyleSheet.create({
})