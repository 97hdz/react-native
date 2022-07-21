import { StatusBar, StyleSheet, TabBarIOS, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//ICONS
import { Ionicons } from '@expo/vector-icons'; 
//COLORS
import Colors from "../theme/constants";

//SCREENS
import HomeScreen from '../screens/Home/HomeScreen'

//The top Navigator
const TabTop : any = createMaterialTopTabNavigator()
function MyTopTabs() {
    return(
        <TabTop.Navigator>
            <TabTop.Screen name='Home' component={HomeScreen} options={headerStyle} />
        </TabTop.Navigator>
    )
}

// The main navigator that will be send to App
export default function Navigation() {
    return (
      <NavigationContainer>
        <StatusBar animated={true} />
        <MyTopTabs />
      </NavigationContainer>
    );
  }
  
const headerStyle = ({
    title: 'Movies',
    tabBarStyle: { backgroundColor: Colors.mainColor },
    tabBarLabelStyle: { fontSize: 17, fontWeight: 'bold', color: Colors.textColor },
    
})