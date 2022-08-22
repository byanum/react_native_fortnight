import { View, Text, StyleSheet } from "react-native";
import React from "react";
import styles from "./styles";

const HomeScreeen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Fortnight</Text>
      <Text style={styles.secondHeader}>Manual</Text>
    </View>
  );
};

export default HomeScreeen;
