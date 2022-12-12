import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
// import FontAwesome from "react-native-vector-icons/FontAwesome";
const PlaceholderImage = require("../assets/Vector.png");

export default function CardsScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content}>
        <View style={styles.leftContent}>
          <Image source={PlaceholderImage} style={styles.profilePic}></Image>

          <View style={styles.middleContent}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.description}>Description</Text>
            <Text style={styles.distance}>Distance</Text>
          </View>
        </View>

        <View style={styles.rightContent}>
          {/* <FontAwesome name={heart} size={12} color={red} /> */}
          <Text style={styles.isFavorite}>Is Favorite</Text>
          <Text style={styles.isConnected}>Is Connected</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  content: {
    marginTop: 70,
    width: "100%",
    height: 70,
    backgroundColor: "red",
    flexDirection: "row",
  },
  leftContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightContent: {
    flexDirection: "row",
  },
  profilePic: {
    width: 40,
    height: 40,
  },
  name: {
    fontSize: 24,
    color: "#5CA4A9",
  },
  description: {
    fontSize: 16,
    color: "#33355C",
  },
  distance: {
    fontSize: 16,
    color: "#33355C",
  },
});
