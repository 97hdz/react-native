import { StatusBar, StyleSheet, TabBarIOS, Text, View } from "react-native";
//NAVIGATORS
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from '@react-navigation/stack';
//ICONS
import { Ionicons } from '@expo/vector-icons';
//COLORS
import Colors from "../theme/constants";
//SCREENS
import HomeScreen from '../screens/Home/HomeScreen'

//Stack Navigator
const Stack: any = createStackNavigator();
function MyStack() {
    return (
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }} >
            <Stack.Screen name="Home" component={HomeScreen} options={headerStyle} />
        </Stack.Navigator>
    );
}

// const TabTop : any = createMaterialTopTabNavigator()
// function MyTopTabs() {
//     return(
//         <TabTop.Navigator>
//             <TabTop.Screen name='Home' component={HomeScreen} options={headerStyle} />
//         </TabTop.Navigator>
//     )
// }

// The main navigator that will be send to App
export default function Navigation() {
    return (
        <NavigationContainer>
            <StatusBar animated={true} />
            <MyStack />
        </NavigationContainer>
    );
}

const headerStyle = ({
    title: 'Movies',
    headerStyle: { backgroundColor: Colors.mainColor },
    headerTitleStyle: { fontSize: 23, fontWeight: 'bold', color: Colors.textColor },
    headerLeft: () => <Ionicons name="menu" size={33} color={Colors.textColor} />,
    headerRight: () => <Ionicons name="search" size={24} color={Colors.textColor} />
})