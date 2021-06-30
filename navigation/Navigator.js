import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Cart from "../screens/Cart";
import Category from "../screens/Category";
import Landing from "../screens/Landing";
import ProductPage from "../screens/ProductPage";
import Colours from "../constants/Colours";
const Stack = createStackNavigator();
function StackComponent() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="landing" component={Landing} options={
                {
                    headerTitle: "Home",
                    headerStyle: {
                        backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                    },
                    headerTintColor: Platform.OS === 'android' ? "white" : ''
                }
            }
            />
            <Stack.Screen name="category" component={Category} options={
                ({ route }) => (
                    {
                        headerTitle: route.params.name,
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : ''
                    }
                )
            }
            />
            <Stack.Screen name="product" component={ProductPage} options={
                ({ route }) => (
                    {
                        headerTitle: route.params.title,
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : ''
                    }
                )
            }
            />
        </Stack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
export default function TabsComponent() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Landing" component={StackComponent} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    );
}


