import Colors from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

const AddTaskButton = ({ onOpen }: any) => {
  const addTask = () => {
    // Alert.alert("Add your task");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Ionicons name="add" style={styles.icon}></Ionicons>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskButton;

const styles = StyleSheet.create({
  container: {
    zIndex: 49,
    backgroundColor: Colors.primary,
    padding: 10,
    position: "absolute",
    right: 20,
    bottom: 20,
    borderRadius: 10,
    elevation: 50,
  },
  icon: {
    fontSize: 30,
    color: Colors.textPrimary,
  },
});
