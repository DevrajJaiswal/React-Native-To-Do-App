import AddTaskButton from "@/components/AddTaskButton";
import AddTaskForm from "@/components/AddTaskForm";
import DateSelector from "@/components/DateSelector";
import FilterTab from "@/components/FilterTab";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import Colors from "@/constants/Color";
import {
  COMPLETED_TASKS,
  FilterOptions,
  IN_PROGRESS_TASKS,
  TASKS,
} from "@/constants/tasks";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const [tasks, setTasks] = useState(TASKS);
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  const [showForm, setShowForm] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(COMPLETED_TASKS);
  const [inProgressTasks, setInProgressTasks] = useState(IN_PROGRESS_TASKS);

  const filteredTasks = (() => {
    switch (activeFilter) {
      case "To Do":
        return tasks;
      case "In Progress":
        return inProgressTasks;
      case "Done":
        return completedTasks;
      default:
        return [...tasks, ...inProgressTasks];
    }
  })();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={filteredTasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskCard
            task={item}
            setTasks={setTasks}
            setCompletedTasks={setCompletedTasks}
          />
        )}
        ListHeaderComponent={
          <>
            {/* {Header} */}
            <Header />
            {/* {DateSelector} */}
            <DateSelector />
            {/* {FilterTab} */}
            <FilterTab selected={activeFilter} onSelect={setActiveFilter} />
          </>
        }
        showsVerticalScrollIndicator={false}
      />
      <AddTaskButton onOpen={() => setShowForm(true)} />
      {showForm && (
        <AddTaskForm onClose={() => setShowForm(false)} setTasks={setTasks} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
