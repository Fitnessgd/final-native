import React from "react";
import { Text } from "react-native";
import Colours from "../constants/Colours";
export default function WhiteText(p) {
    return <Text style={{ ...p.style, color: Colours.white, fontFamily: "roboto-slab" }}>{p.children}</Text>
}