import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Platform } from "react-native";
import Colours from "../constants/Colours";
import Cart from "../screens/Cart";
import Category from "../screens/Category";
import Checkout from "../screens/Checkout";
import Landing from "../screens/Landing";
import Payment from "../screens/Payment";
import ProductPage from "../screens/ProductPage";
import Receipt from "../screens/Receipt";
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
            <Stack.Screen name="product" component={ProductPage}
                options={
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
const CartStack = createStackNavigator();
function CartComponent() {
    return (
        <CartStack.Navigator>
            <CartStack.Screen
                name="Cart"
                component={Cart}
                options={
                    {
                        headerTitle: "Cart",
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : ''
                    }
                }
            />
        </CartStack.Navigator>
    )
}
const CheckoutStack = createStackNavigator();
function CheckoutComponent() {
    return (
        <CheckoutStack.Navigator>
            <CheckoutStack.Screen
                name="Checkout"
                component={Checkout}
                options={
                    {
                        headerTitle: "Checkout",
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : ''
                    }
                }
            />
            <CheckoutStack.Screen
                name="Payment"
                component={Payment}
                options={
                    {
                        headerTitle: "Checkout",
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : ''
                    }
                }
            />
            <CheckoutStack.Screen
                name="Receipt"
                component={Receipt}
                options={
                    {
                        headerTitle: "Receipt",
                        headerStyle: {
                            backgroundColor: Platform.OS === 'android' ? Colours.background : '',
                        },
                        headerTintColor: Platform.OS === 'android' ? "white" : ''
                    }
                }
            />
        </CheckoutStack.Navigator>
    )
}
const Tab = createBottomTabNavigator();
export default function TabsComponent() {
    return (
        <Tab.Navigator tabBarOptions={
            {
                inactiveBackgroundColor: Colours.tabInactive,
                activeBackgroundColor: Colours.tabActive,
                inactiveTintColor: "white",
                activeTintColor: "white",
            }
        }
        >
            <Tab.Screen
                name="Shop"
                component={StackComponent}
                options={
                    {
                        tabBarIcon: () =>
                            <Ionicons
                                name="home-outline"
                                size={25}
                                color={"white"}
                            />,
                    }
                }
            />
            <Tab.Screen
                name="Cart"
                component={CartComponent}
                options={
                    {
                        tabBarIcon: () =>
                            <Ionicons
                                name="cart-outline"
                                size={25}
                                color={"white"}
                            />,
                    }
                }
            />
            <Tab.Screen
                name="Checkout"
                component={CheckoutComponent}
                options={
                    {
                        tabBarIcon: () =>
                            <Ionicons
                                name="checkmark-circle-outline"
                                size={25}
                                color={"white"}
                            />,
                    }
                }
            />
        </Tab.Navigator>
    );
}


