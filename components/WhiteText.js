import React from "react";
import { Text } from "react-native";
export default function WhiteText(p) {
    return <Text style={{ ...p.style, color: "white" }}>{p.children}</Text>
}