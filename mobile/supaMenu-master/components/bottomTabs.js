import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import { View, Text, TouchableOpacity } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Checkout from "../screens/Checkout";
import PaymentSuccess from "../screens/Success";
import Feedback from "../screens/feedback";
import HomeScreen from "../screens/HomeScreen";
import ListRestaurantsScreen from "../screens/ListRestaurantsScreen";
import CategoryScreen from "../screens/CategoryScreen";

export default function AppBottomNavigation() {
     return <BottomNavigation />;
}


const Tabs = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tabs.Navigator
            initialRouteName="Category"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarInactiveTintColor: "black",
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 80,
                    paddingBottom: 10,
                    padding: 30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    marginHorizontal: 5,
                    position: "absolute",

                    borderColor: "white",
                    elevation: 10,
                },
                tabBarButton: (props) => {
                    return (
                        <View {...props}>
                            <View
                                style={{
                                    minWidth: 50,
                                    minHeight: 50,
                                    borderRadius: 10,
                                    backgroundColor: props.accessibilityState
                                        .selected
                                        ? "#F6E3DB"
                                        : "white",
                                }}
                            >
                                <TouchableOpacity {...props} />
                            </View>
                        </View>
                    );
                },
                tabBarShowLabel: false,
                tabBarActiveTintColor: "#F7941D",
            }}
        >
            <Tabs.Screen
                name="Home"
                options={{
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={24} color={color} />
                    ),
                }}
                component={CategoryScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="bell-badge-outline"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Notification"
                component={Checkout}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="line-scan"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="ListRestaurants"
                component={ListRestaurantsScreen}
            />
            <Tabs.Screen
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons
                            name="progress-clock"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Clock"
                component={Feedback}
            />
            <Tabs.Screen
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ color }) => (
                        <AntDesign
                            name="shoppingcart"
                            size={24}
                            color={color}
                        />
                    ),
                }}
                name="Category"
                component={CategoryScreen}
            />
        </Tabs.Navigator>
    );
}
