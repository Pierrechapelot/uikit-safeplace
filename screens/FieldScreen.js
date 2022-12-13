import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

export default function FieldScreen() {
  return <View style={styles.container}>
    <View style={styles.inputGroup}>
    <Text style={styles.text}> Du texte ici</Text>
    <TextInput
        style={styles.input}
        placeholder="Du texte ici"
        placeholderTextColor='#C9D6DF'
        autoCapitalize="none"
      />
      </View>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",

  },
inputGroup: {
  marginTop: 60,
  display: 'flex',
  justifyContent: 'space-around',
  fontFamily: 'OpenSans',


},
  input: {
    width: 320,
    height: 40,
    
    borderBottomColor: "#5CA4A9",
    borderBottomWidth: 1,
    fontSize: 18,
  },
  text: {
    color: '#5CA4A9',
    fontSize: 12,
  },

});