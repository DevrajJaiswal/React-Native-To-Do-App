import AddTaskButton from "@/components/AddTaskButton";
import AddTaskForm from "@/components/AddTaskForm";
import DateSelector from "@/components/DateSelector";
import EditTaskForm from "@/components/EditTaskForm";
import FilterTab from "@/components/FilterTab";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import Colors from "@/constants/Color";
import { FilterOptions, TASKS, Task } from "@/constants/tasks";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const [tasks, setTasks] = useState(TASKS);
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editTaskData, setEditTaskData] = useState<Task | null>(null);

  const [dateFilter, setDateFilter] = useState<string>(
    new Date().toISOString().split("T")[0],
  );

  const filteredTasks = tasks.filter((task) => {
    const matchStatus = activeFilter === "All" || task.status === activeFilter;

    const matchDate = task.date === dateFilter;

    return matchStatus && matchDate;
  });

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <Header />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            setTasks={setTasks}
            onOpen={() => setShowEditForm(true)}
            setEditTaskData={setEditTaskData}
          />
        )}
        ListHeaderComponent={
          <>
            <DateSelector
              dateFilter={dateFilter}
              setDateFilter={setDateFilter}
            />
            <FilterTab selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              😴 No tasks found for selected filter
            </Text>
          </View>
        }
        showsVerticalScrollIndicator={false}
      />

      <AddTaskButton onOpen={() => setShowForm(true)} />

      {showForm && (
        <AddTaskForm onClose={() => setShowForm(false)} setTasks={setTasks} />
      )}

      {showEditForm && (
        <EditTaskForm
          onClose={() => setShowEditForm(false)}
          setTasks={setTasks}
          editTaskData={editTaskData}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 50,
  },

  emptyText: {
    color: Colors.textSecondary,
    fontSize: 16,
  },
});
