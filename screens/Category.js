import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import products from "../data/products";
export default function Category(p) {
    const category = p.navigation.route.params.name;

    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                data={products}
                renderItem={({ item }) =>
                    <WhiteText style={styles.productTxt}>{item.title}</WhiteText>
                } />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2f4f4f',
        justifyContent: 'center',
        alignItems: 'center',
    },
    category: {
        justifyContent: "space-between",
        width: "45%",
        height: 100,
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 30,
        marginTop: 10,
        marginLeft: 10
    },
    productTxt: {
        margin: 10,
        fontSize: 18
    }
});