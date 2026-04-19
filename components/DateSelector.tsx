import Colors from "@/constants/Color";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

const generateDates = () => {
  const base = new Date();
  return Array.from({ length: 5 }, (_, i) => {
    const date = new Date(base);
    date.setDate(base.getDate() + i);
    return {
      month: date.toLocaleDateString("en-US", { month: "short" }),
      day: date.getDate(),
      weekday: date.toLocaleDateString("en-US", { weekday: "short" }),
      key: date.toISOString().split("T")[0],
    };
  });
};

const DATES = generateDates();
type DateSelectorProps = {
  dateFilter: string;
  setDateFilter: (date: string) => void;
};

const DateSelector = ({ dateFilter, setDateFilter }: DateSelectorProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {DATES.map((item) => {
        const isSelected = item.key === dateFilter;
        return (
          <TouchableOpacity
            key={item.key}
            style={[styles.dateItem, isSelected && styles.dateItemSelected]}
            onPress={() => {
              setDateFilter(item.key);
            }}
          >
            <Text style={[styles.month, isSelected && styles.selectedText]}>
              {item.month}
            </Text>
            <Text style={[styles.day, isSelected && styles.selectedText]}>
              {item.day}
            </Text>
            <Text style={[styles.weekday, isSelected && styles.selectedText]}>
              {item.weekday}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default DateSelector;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    gap: 8,
    paddingVertical: 10,
  },
  dateItem: {
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 20,
    minWidth: 64,
  },
  dateItemSelected: {
    backgroundColor: Colors.primary,
  },
  month: {
    fontSize: 12,
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  day: {
    fontSize: 22,
    fontWeight: "700",
    color: Colors.textPrimary,
    marginBottom: 6,
  },
  weekday: {
    fontSize: 12,
    color: Colors.textSecondary,
  },
  selectedText: {
    color: Colors.textPrimary,
  },
});
