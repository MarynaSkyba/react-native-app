import { View, Image, StyleSheet } from "react-native";
import Home from "../../assets/home.png";
import Person from "../../assets/user.png";
import Users from "../../assets/users.png";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screen/HomeScreen";
import DetailsScreen from "../screen/DetailsScreen";
import SettingsScreen from "../screen/SettingsScreen";

const Tab = createBottomTabNavigator();

function NavigationBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: -10,
          backgroundColor: "#fff",
          borderRadius: 20,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={Home} style={styles.icon} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="info"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={Users} style={styles.icon} />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="user"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image source={Person} style={styles.icon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   position: "absolute",
  //   left: -20,
  //   right: -20,
  //   bottom: -15,
  //   alignItem: "center",
  // },
  // navbar: {
  //   flexDirection: "row",
  //   backgroundColor: "#fff",
  //   justifyContent: "space-evenly",
  //   borderRadius: 20,
  //   paddingHorizontal: 14,
  //   paddingTop: 20,
  //   paddingBottom: 30,
  // },
  icon: {
    width: 30,
    height: 30,
  },
});

export default NavigationBar;
