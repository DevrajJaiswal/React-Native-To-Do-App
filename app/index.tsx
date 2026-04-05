import AddTaskButton from "@/components/AddTaskButton";
import AddTaskForm from "@/components/AddTaskForm";
import DateSelector from "@/components/DateSelector";
import FilterTab from "@/components/FilterTab";
import Header from "@/components/Header";
import TaskCard from "@/components/TaskCard";
import Colors from "@/constants/Color";
import { FilterOptions, TASKS } from "@/constants/tasks";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();
  const [activeFilter, setActiveFilter] = useState<FilterOptions>("All");
  const [showForm, setShowForm] = useState(false);

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar style="light" />
      <FlatList
        data={TASKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
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
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
      <AddTaskButton onOpen={() => setShowForm(true)} />
      {showForm && <AddTaskForm onClose={() => setShowForm(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
