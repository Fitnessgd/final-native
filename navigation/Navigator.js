import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Category from "../screens/Category";
import Landing from "../screens/Landing";
import ProductPage from "../screens/ProductPage";
const Navigator = createStackNavigator({
    landing: Landing,
    category: {
        screen: Category,
        path: "category/:name"
    },
    product:{
        screen: ProductPage,
        path:"product"
    }
})
export default createAppContainer(Navigator);