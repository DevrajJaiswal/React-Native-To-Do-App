import Colors from "@/constants/Color";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddTaskForm = ({ onClose }: any) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());

  const onChangeDate = (selectedDate: any) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onChangeTime = (selectedTime: any) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  return (
    <Pressable style={styles.container} onPress={onClose}>
      <Pressable
        style={styles.formContainer}
        onPress={(e) => e.stopPropagation()}
      >
        <View>
          <Text style={styles.formTitle}>Create Task</Text>
          <View>
            <TextInput
              style={styles.input}
              value={title}
              placeholder="Task title"
              onChangeText={(text) => setTitle(text)}
            />

            <TextInput
              style={styles.input}
              value={category}
              placeholder="Task category"
              onChangeText={(text) => setCategory(text)}
            />

            <Pressable
              onPress={() => setShowDatePicker(true)}
              style={styles.input}
            >
              <Text>{date.toDateString()}</Text>
            </Pressable>

            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={onChangeDate}
              />
            )}

            <Pressable
              onPress={() => setShowTimePicker(true)}
              style={styles.input}
            >
              <Text>{time.toLocaleTimeString()}</Text>
            </Pressable>

            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}
          </View>
        </View>
      </Pressable>
      <TouchableOpacity style={styles.closeButton} onPress={() => onClose()}>
        <Ionicons name="close" size={24} color={Colors.textPrimary} />
      </TouchableOpacity>
    </Pressable>
  );
};

export default AddTaskForm;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
    elevation: 100,
  },
  formContainer: {
    width: "90%",
    backgroundColor: Colors.surface,
    borderRadius: 16,
    padding: 20,
    elevation: 10,
  },
  formTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    fontSize: 16,
    color: Colors.textPrimary,
    padding: 14,
    borderColor: Colors.border,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    backgroundColor: Colors.surfaceLight,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: Colors.surface,
    padding: 8,
    borderRadius: 10,
  },
});
