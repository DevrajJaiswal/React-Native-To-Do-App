export type TaskStatus = "Done" | "In Progress" | "To Do";

export type TaskIcon = {
  name: string;
  backgroundColor: string;
};

export type Task = {
  id: string;
  category: string;
  title: string;
  date: string;
  time: string;
  status: TaskStatus;
  icon: TaskIcon;
};

export const TASKS: Task[] = [
  // Dummy Tasks
  // {
  //   id: "1",
  //   category: "Backend Integration",
  //   title: "API Integration for Tasks",
  //   date: "Sat Apr 11 2026",
  //   time: "04:00 PM",
  //   status: "To Do",
  //   icon: { name: "time", backgroundColor: "#EF4444" },
  // },
  // {
  //   id: "2",
  //   category: "Grocery Shopping App Design",
  //   title: "Create Wireframes",
  //   date: "Sat Apr 11 2026",
  //   time: "11:30 AM",
  //   status: "In Progress",
  //   icon: { name: "reload", backgroundColor: "#F59E0B" },
  // },
  // {
  //   id: "3",
  //   category: "Mobile App Development",
  //   title: "Setup React Native Project",
  //   date: "Sat Apr 11 2026",
  //   time: "01:00 PM",
  //   status: "Done",
  //   icon: { name: "checkmark-circle", backgroundColor: "#22C55E" },
  // },
];

export const FILTER_OPTIONS = ["All", "To Do", "In Progress", "Done"] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];

export const TASK_CATEGORIES = [
  { label: "Mobile Development", value: "mobile_dev" },
  { label: "Web Development", value: "web_dev" },
  { label: "API Integration", value: "api_int" },
];
