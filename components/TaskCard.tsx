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

const STATUS_COLOR: Record<Task["status"], string> = {
  Done: Colors.statusDone,
  "In Progress": Colors.statusInProgress,
  "To Do": Colors.statusToDo,
};

type TaskCardProps = {
  task: Task;
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onOpen: () => void;
  setEditTaskData: React.Dispatch<React.SetStateAction<Task | null>>;
};

const formatDate = (date: string) => new Date(date).toDateString();

const formatTime = (time: string) =>
  new Date(time).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

const TaskCard = ({
  task,
  setTasks,
  onOpen,
  setEditTaskData,
}: TaskCardProps) => {
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
          setTasks((current) => current.filter((item) => item.id !== taskId));
        },
      },
    ]);
    setShowActions(false);
  };

  const markAsDone = (taskId: string) => {
    setTasks((current) =>
      current.map((item) =>
        item.id === taskId
          ? {
              ...item,
              status: "Done",
              icon: {
                ...item.icon,
                name: "checkmark-circle",
                backgroundColor: Colors.statusDone,
              },
            }
          : item,
      ),
    );
    setShowActions(false);
  };

  const markAsInProgress = (taskId: string) => {
    setTasks((current) =>
      current.map((item) =>
        item.id === taskId
          ? {
              ...item,
              status: "In Progress",
              icon: {
                ...item.icon,
                name: "reload",
                backgroundColor: Colors.statusInProgress,
              },
            }
          : item,
      ),
    );
    setShowActions(false);
  };

  const editTask = () => {
    setEditTaskData(task);
    onOpen();
    setShowActions(false);
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
            onPress={() => markAsInProgress(task.id)}
          >
            <Ionicons
              name="reload-circle"
              size={18}
              color={Colors.statusInProgress}
            />
            <Text style={styles.actionText}>In Progress</Text>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.actionBtn} onPress={editTask}>
            <Ionicons name="create-outline" size={18} color={Colors.primary} />
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
              {formatTime(task.time)} | {formatDate(task.date)}
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
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    zIndex: 10,
  },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingVertical: 6,
    paddingHorizontal: 5,
    borderRadius: 8,
    backgroundColor: Colors.surfaceLight,
    flexShrink: 1,
  },
  actionText: {
    fontSize: 13,
    fontWeight: "500",
    color: Colors.textPrimary,
  },
});
