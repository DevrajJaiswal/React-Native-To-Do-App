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
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const [tasks, setTasks] = useState(TASKS);
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editTaskData, setEditTaskData] = useState<Task | null>(null);

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "All") return true;
    return task.status === activeFilter;
  });

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
            onOpen={() => setShowEditForm(true)}
            setEditTaskData={setEditTaskData}
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
});
