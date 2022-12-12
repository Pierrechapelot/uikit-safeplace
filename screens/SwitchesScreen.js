import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';

export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <Text>{isEnabled.toString()}</Text>
      <Switch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        trackColor={{ false: "#E6EBE0", true: "#5CA4A9" }}
        thumbColor={isEnabled ? "#E6EBE0" : "#5CA4A9"}
        ios_backgroundColor="#ff0000"
        style={{ transform:[{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
      />
      <Switch
        value={isEnabled}
        onValueChange={(value) => setIsEnabled(value)}
        trackColor={{ false: "#E6EBE0", true: "#5CA4A9" }}
        thumbColor={isEnabled ? "white" : "white"}
        ios_backgroundColor="#ff0000"
        style={{ transform:[{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

  });
