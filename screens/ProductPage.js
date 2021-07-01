import React, { useContext } from "react";
import { Button, Image, ScrollView, StyleSheet, View } from "react-native";
import { Context } from "../components/Store";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
export default function ProductPage(p) {
    const product = p.route.params;
    const [state, dispatch] = useContext(Context);
    const addToCart = p => {
        dispatch({ type: 'ADD_POST', payload: p })
    }
    const content =
        <View style={styles.container}>
            <Image source={{ uri: product.photo }} style={styles.img} />
            <WhiteText style={styles.title}>{product.title}</WhiteText>
            <WhiteText style={styles.productTxt}>{product.description}</WhiteText>
            <View style={styles.reviews}>
                {product.reviews.map(
                    (item, key) =>
                        <View key={key}>
                            <WhiteText style={styles.reviewTitle}>{item.name}</WhiteText>
                            <WhiteText style={styles.reviewTxt}>{item.content}</WhiteText>
                        </View>
                )}
            </View>
            <View style={styles.details}>
                <WhiteText style={styles.detailsTitle}>Details</WhiteText>
                <WhiteText style={styles.detailsTxt}>Price: {product.totalPrice + product.shipping}</WhiteText>
                <WhiteText style={styles.detailsTitle}>Software Requirements</WhiteText>
                <WhiteText style={styles.detailsTxt}>Storage: {product.storage}</WhiteText>
                <WhiteText style={styles.detailsTxt}>Memory: {product.memory}</WhiteText>
                <WhiteText style={styles.detailsTxt}>Storage: {product.storage}</WhiteText>
            </View>
            <View style={{ marginTop: 10 }}>
                <Button title="Add to cart" color={Colours.button} onPress={() => addToCart(product)} />
            </View>
        </View >
    const fixScroll = <View style={{ height: content.props.children.length * 100, backgroundColor: Colours.background }} />

    return (
        <ScrollView >
            {content}
            {fixScroll}
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colours.background,
        alignItems: 'center',
    },
    category: {
        justifyContent: "space-between",
        width: "45%",
        height: 100,
        borderColor: Colours.white,
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
    },
    img: {
        width: "100%", height: "15%"
    },
    title: {
        margin: 10,
        fontSize: 26,
        flexDirection: "row",
        alignSelf: "center"
    },
    details: {
        width: "90%",
        backgroundColor: Colours.details,
        justifyContent: "flex-start",
        alignSelf: "center",
        borderWidth: 3,
        borderRadius: 30,
        marginTop: 10
    },
    detailsTitle: {
        margin: 10,
        fontSize: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    detailsTxt: {
        margin: 10,
        fontSize: 14,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    reviews: {
        width: "90%",
        backgroundColor: Colours.reviews,
        justifyContent: "flex-start",
        alignSelf: "center",
        borderWidth: 3,
        borderRadius: 15
    },
    reviewTitle: {
        marginLeft: 10,
        marginTop: 15,
        fontSize: 16,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    reviewTxt: {
        margin: 10,
        fontSize: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        fontStyle: "italic"
    }
});