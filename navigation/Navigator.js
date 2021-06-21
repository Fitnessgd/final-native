import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Category from "../screens/Category";
import Landing from "../screens/Landing";
const Navigator = createStackNavigator({
    landing: Landing,
    category: {
        screen: Category,
        path: "category/:name"
    }
})
export default createAppContainer(Navigator);