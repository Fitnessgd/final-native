import React from "react";
import { ImageBackground, StyleSheet, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
import products from "../data/products";
export default function Category(p) {
    const category = p.route.params.name;
    const categoryProducts = products.filter(p => p.categories.includes(category))
    console.log(categoryProducts);
    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(i, key) => key + ""}
                style={{ width: "100%" }}
                data={categoryProducts}
                renderItem={({ item }) =>
                    <TouchableOpacity
                        onPress={() => p.navigation.navigate(
                            "product",
                            item
                        )}>
                        <ImageBackground source={{ uri: item.photo }} style={{ width: "100%", height: 70 }} >
                            <View style={styles.productTxt}>
                                <WhiteText style={styles.productTxt}>{item.title}</WhiteText>
                                <WhiteText style={styles.productTxt}>{item.totalPrice}₪</WhiteText>
                            </View >
                        </ImageBackground>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.background,
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
        fontSize: 18,
        flexDirection: "row",
        justifyContent: "space-between"
    }
});