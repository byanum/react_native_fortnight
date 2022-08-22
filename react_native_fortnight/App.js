import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import HomeScreeen from "./src/HomeScreen";
import UseStateScreen from "./src/UseStateScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HomeScreeen /> */}
      <UseStateScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
