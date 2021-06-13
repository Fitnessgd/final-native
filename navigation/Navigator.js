import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Landing from "../screens/landing";
import ProductPage from "../screens/ProductPage";
const Navigator = createStackNavigator({
    landing: Landing,
    product: ProductPage,
})
export default createAppContainer(Navigator);