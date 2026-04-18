import Colors from "@/constants/Color";
import { Task, TASK_CATEGORIES } from "@/constants/tasks";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const STATUS_COLOR = {
  Done: Colors.statusDone,
  "In Progress": Colors.statusInProgress,
  "To Do": Colors.statusToDo,
};

type TaskCardProps = {
  task: Task;
};

const TaskCard = ({
  task,
  setTasks,
  setCompletedTasks,
  onOpen,
  setEditTaskData,
}: any) => {
  const [showActions, setShowActions] = useState(false);
  const deleteTask = (taskId: string) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTasks((current: any) =>
            current.filter((task: any) => task.id !== taskId),
          );
        },
      },
    ]);
  };

  const markAsDone = (taskId: string) => {
    setTasks((current: any) => {
      const taskToMove = current.find((task: any) => task.id === taskId);

      if (!taskToMove) return current;

      const updatedTask = { ...taskToMove, status: "Done" };

      setCompletedTasks((prev: any) => [...prev, updatedTask]);

      return current.filter((task: any) => task.id !== taskId);
    });
  };
  const editTask = (taskId: string) => {
    setEditTaskData(task);
    onOpen();
  };

  return (
    <Pressable
      style={styles.card}
      onLongPress={() => setShowActions(!showActions)}
      delayLongPress={500}
    >
      {showActions && (
        <View style={styles.actionBar}>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => markAsDone(task.id)}
          >
            <Ionicons
              name="checkmark-circle"
              size={18}
              color={Colors.statusDone}
            />
            <Text style={styles.actionText}>Done</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => editTask(task.id)}
          >
            <Ionicons
              name="create-outline"
              size={18}
              color={Colors.statusDone}
            />
            <Text style={styles.actionText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionBtn}
            onPress={() => deleteTask(task.id)}
          >
            <Ionicons
              name="trash-outline"
              size={18}
              color={Colors.statusToDo}
            />
            <Text style={styles.actionText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.content}>
        <Text style={styles.category}>
          {TASK_CATEGORIES.find((cat) => cat.value === task.category)?.label}
        </Text>
        <Text style={styles.title}>{task.title}</Text>

        <View style={styles.footer}>
          <View style={styles.timeRow}>
            <Ionicons
              name="time-outline"
              size={14}
              color={Colors.primary}
            ></Ionicons>
            <Text style={styles.time}>
              {task.time} | {task.date}
            </Text>
          </View>

          <Text style={[styles.status, { color: STATUS_COLOR[task.status] }]}>
            {task.status}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iconBadge,
          { backgroundColor: task.icon.backgroundColor },
        ]}
      >
        <Ionicons
          name={task.icon.name as any}
          size={18}
          color={Colors.textPrimary}
        />
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 18,
    padding: 18,
    marginHorizontal: 20,
    marginBottom: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  content: {
    flex: 1,
  },
  category: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginBottom: 6,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: Colors.textPrimary,
    marginBottom: 14,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  time: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "500",
  },
  status: {
    fontSize: 12,
    fontWeight: "600",
  },
  iconBadge: {
    width: 42,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 14,
  },
  actionBar: {
    position: "absolute",
    left: 0,
    top: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 12,
    borderTopColor: Colors.border,
    paddingTop: 10,
  },

  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: Colors.surfaceLight,
  },

  actionText: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.textPrimary,
  },
});
