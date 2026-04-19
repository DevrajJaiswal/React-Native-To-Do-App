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
  {
    id: "1",
    category: "web_dev",
    title: "API Integration for Tasks",
    date: "2026-04-19",
    time: "2026-04-11T16:00:00.000Z",
    status: "To Do",
    icon: { name: "time", backgroundColor: "#EF4444" },
  },
  {
    id: "2",
    category: "api_int",
    title: "Create Wireframes",
    date: "2026-04-20",
    time: "2026-04-11T11:30:00.000Z",
    status: "In Progress",
    icon: { name: "reload", backgroundColor: "#F59E0B" },
  },
  {
    id: "3",
    category: "mobile_dev",
    title: "Setup React Native Project",
    date: "2026-04-21",
    time: "2026-04-11T13:00:00.000Z",
    status: "Done",
    icon: { name: "checkmark-circle", backgroundColor: "#22C55E" },
  },
];

export const FILTER_OPTIONS = ["All", "To Do", "In Progress", "Done"] as const;

export type FilterOptions = (typeof FILTER_OPTIONS)[number];

export const TASK_CATEGORIES = [
  { label: "Mobile Development", value: "mobile_dev" },
  { label: "Web Development", value: "web_dev" },
  { label: "API Integration", value: "api_int" },
];
