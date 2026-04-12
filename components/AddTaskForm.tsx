import Colors from "@/constants/Color";
import { TASK_CATEGORIES } from "@/constants/tasks";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const AddTaskForm = ({ onClose, setTasks }: any) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(TASK_CATEGORIES[0]);

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const [showTimePicker, setShowTimePicker] = useState(false);
  const [time, setTime] = useState(new Date());

  const onChangeDate = (event: any, selectedDate: Date) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  const onChangeTime = (event: any, selectedTime: any) => {
    setShowTimePicker(false);
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  const saveTask = () => {
    if (!title || !category) {
      Alert.alert("All fields are required");
      return;
    }
    const newTask = {
      id: Date.now().toString(),
      title: title,
      category: category,
      date: date.toLocaleDateString(),
      time: time.toLocaleTimeString(),
      status: "To Do",
      icon: { name: "time", backgroundColor: Colors.statusToDo },
    };
    setTasks((prevTasks: any) => [...prevTasks, newTask]);
    onClose();
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
              placeholderTextColor={Colors.textPrimary}
              onChangeText={(text) => setTitle(text)}
            />
            <View style={styles.pickerContainer}>
              <Picker
                style={styles.picker}
                selectedValue={category}
                placeholder="category"
                onValueChange={(itemValue) => setCategory(itemValue)}
              >
                {TASK_CATEGORIES.map((cat, i) => (
                  <Picker.Item
                    // style={styles.pickerOptionText}
                    key={i}
                    label={cat?.label}
                    value={cat?.value}
                  />
                ))}
              </Picker>
            </View>
            <Pressable
              onPress={() => setShowDatePicker(true)}
              style={styles.input}
            >
              <Text style={styles.inputText}>{date.toDateString()}</Text>
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
              <Text style={styles.inputText}>{time.toLocaleTimeString()}</Text>
            </Pressable>
            {showTimePicker && (
              <DateTimePicker
                value={time}
                mode="time"
                display="default"
                onChange={onChangeTime}
              />
            )}
            <Pressable onPress={() => saveTask()} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save Task</Text>
            </Pressable>
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
  inputText: {
    fontSize: 17,
    color: Colors.textPrimary,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    backgroundColor: Colors.surfaceLight,
    marginBottom: 12,
  },
  picker: {
    height: 50,
    width: "100%",
    color: Colors.textPrimary,
  },
  // pickerOptionText: {
  //   color: Colors.textPrimary,
  // },
  saveButton: {
    alignSelf: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    backgroundColor: Colors.primary,
    marginBottom: 12,
  },
  saveButtonText: {
    fontSize: 17,
    color: Colors.textPrimary,
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
