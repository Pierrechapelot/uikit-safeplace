import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Animated,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { useFonts } from "@expo-google-fonts/inter";
import React from "react";
// import { GoogleSignin, GoogleSigninButton } from '@react-native-google-signin/google-signin';

export default function ButtonsScreen() {
  const [fontsLoaded] = useFonts({
    OpenSans: require("../assets/OpenSans/OpenSans-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <View />;
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button1}>
        <Text style={styles.text1}>Button 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <Text style={styles.text2}>Button 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <Text style={styles.text3}>Button 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4}>
        <Text style={styles.text4}>Button 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button5}>
        <Text style={styles.text5}>Button 5</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button6}>
        <Text style={styles.text6}>Button 6</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <LinearGradient
          // Background Linear Gradient
          colors={["#E4513D", "#FFA647"]}
          style={styles.SosButton}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.SosText}>SOS</Text>
        </LinearGradient>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,


    alignItems: "center",
  },
  button1: {
    marginTop: 60,
    width: 305,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#33355C",
    alignItems: "center",
    justifyContent: "center",
  },
  text1: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: "bold",
    fontSize: 20,
  },
  button2: {
    marginTop: 10,
    width: 305,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#5CA4A9",
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: "bold",
    fontSize: 20,
  },
  button3: {
    marginTop: 10,
    width: 213,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#33355C",
    alignItems: "center",
    justifyContent: "center",
  },
  text3: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: "bold",
    fontSize: 20,
  },
  button4: {
    marginTop: 10,
    width: 213,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#5CA4A9",
    alignItems: "center",
    justifyContent: "center",
  },
  text4: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: "bold",
    fontSize: 20,
  },
  button5: {
    marginTop: 10,
    width: 176,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#33355C",
    alignItems: "center",
    justifyContent: "center",
  },
  text5: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: "bold",
    fontSize: 20,
  },
  button6: {
    marginTop: 10,
    width: 176,
    height: 48,
    borderRadius: 10,
    backgroundColor: "#5CA4A9",
    alignItems: "center",
    justifyContent: "center",
  },
  text6: {
    color: "#FFFFFF",
    fontFamily: 'OpenSans',
    fontWeight: "bold",
    fontSize: 20,
  },
  SosButton: {
    marginTop: 10,
    width: 199,
    height: 199,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,

  },
  SosText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 64,
    alignItems: "center",
    fontFamily: 'OpenSans',
  },
});
