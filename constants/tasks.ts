export type TaskStatus = "Done" | "In Progress" | "To-Do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Task[] = [
  {
    id: "1",
    category: "Grocery Shopping App Design",
    title: "Market Research",
    time: "10:00 AM",
    status: "Done",
    icon: { name: "grid", backgroundColor: "#22C55E" },
  },
  {
    id: "2",
    category: "Grocery Shopping App Design",
    title: "Create Wireframes",
    time: "11:30 AM",
    status: "In Progress",
    icon: { name: "layout", backgroundColor: "#F59E0B" },
  },
  {
    id: "3",
    category: "Mobile App Development",
    title: "Setup React Native Project",
    time: "01:00 PM",
    status: "Done",
    icon: { name: "code", backgroundColor: "#22C55E" },
  },
  {
    id: "4",
    category: "Mobile App Development",
    title: "Build Todo UI Screen",
    time: "02:30 PM",
    status: "In Progress",
    icon: { name: "smartphone", backgroundColor: "#F59E0B" },
  },
  {
    id: "5",
    category: "Backend Integration",
    title: "API Integration for Tasks",
    time: "04:00 PM",
    status: "To-Do",
    icon: { name: "server", backgroundColor: "#EF4444" },
  },
  {
    id: "6",
    category: "Testing & Debugging",
    title: "Fix UI Bugs and Improve UX",
    time: "06:00 PM",
    status: "To-Do",
    icon: { name: "tool", backgroundColor: "#EF4444" },
  },
];

export const FILTER_OPTIONS = [
  "All",
  "To Do",
  "In Progress",
  "Completed",
] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];
