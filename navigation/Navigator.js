import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Landing from "../screens/Landing";
const Navigator = createStackNavigator({
    landing: Landing,
})
export default createAppContainer(Navigator);