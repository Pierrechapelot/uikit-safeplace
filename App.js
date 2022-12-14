import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ButtonsScreen from "./screens/ButtonsScreen";
import FieldScreen from "./screens/FieldScreen";
import SwitchesScreen from "./screens/SwitchesScreen";
import CardsScreen from "./screens/CardsScreen";
import CarouScreen from "./screens/CarouScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useFonts } from "@expo-google-fonts/inter";

const Tab = createBottomTabNavigator();

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   OpenSans: require("./assets/OpenSans/OpenSans-Regular.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <View />;
  // }
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Buttons" component={ButtonsScreen} />

        <Tab.Screen name="Field" component={FieldScreen} />
        <Tab.Screen name="Cards" component={CardsScreen} />

        <Tab.Screen name="Switches" component={SwitchesScreen} />
        <Tab.Screen name="Carou" component={CarouScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "OpenSans",
  },
});
