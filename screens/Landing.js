import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet, Platform } from "react-native";
import WhiteText from "../components/WhiteText";
import Colours from "../constants/Colours";
import categories from "../data/categories";
export default function Landing(p) {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                numColumns={2}
                data={categories}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.category}
                        onPress={() =>
                            p.navigation.navigate(
                                'category',
                                { name: item.name }
                            )
                        }>
                        <WhiteText style={styles.categoryTxt}>{item.name}</WhiteText>
                    </TouchableOpacity>}
                keyExtractor={item => item.key} />
        </View>
    )
}
Landing.navigationOptions = {
    headerTitle: "Home",
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colours.background : '',
    },
    headerTintColor: Platform.OS === 'android' ? "white" : ''
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
    categoryTxt: {
        margin: 10,
        fontSize: 18
    }
});