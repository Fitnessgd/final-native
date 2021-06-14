import React from "react";
import { View, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import WhiteText from "../components/WhiteText";
const categories = [
    { name: "First Person", key: 1 },
    { name: "Puzzle", key: 2 },
    { name: "Action", key: 3 },
    { name: "Adventure", key: 4 },

]
export default function Landing(p) {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ width: "100%" }}
                numColumns={2}
                data={categories}
                renderItem={({ item }) =>
                    <TouchableOpacity style={styles.category}>
                        <WhiteText style={styles.categoryTxt}>{item.name}</WhiteText>
                    </TouchableOpacity>}
                keyExtractor={item => item.key} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'DarkSlateGray',
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