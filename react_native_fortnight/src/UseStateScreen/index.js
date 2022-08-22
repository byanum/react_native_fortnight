import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";

const UseStateScreen = () => {
  // count
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  };

  const subCount = () => {
    setCount(count - 1);
  };

  // name
  const [name, setName] = useState([]);

  const firstName = () => {
    setName("Anum");
  };

  const lastName = () => {
    setName("Anum Khalid");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>useState</Text>
      <Text style={styles.text}>The count is {count}</Text>
      <View style={styles.secondContainer}>
        <Pressable onPress={addCount} style={styles.btnAdd}>
          <Text style={styles.txtAdd}>+</Text>
        </Pressable>
        <Pressable onPress={subCount} style={styles.btnSub}>
          <Text style={styles.txtAdd}>-</Text>
        </Pressable>
      </View>

      <View style={styles.thirdContainer}>
        <Text style={styles.txtname}>Hi, I'm {name}</Text>

        <View style={styles.thirdBtns}>
          <Pressable onPress={firstName} style={styles.btnAdd}>
            <Text style={styles.txtAdd}>first </Text>
          </Pressable>

          <Pressable onPress={lastName} style={styles.btnAdd}>
            <Text style={styles.txtAdd}>last </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default UseStateScreen;
