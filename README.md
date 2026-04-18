# React Native To-Do App

A task manager app built with React Native and Expo Router.  
You can create, edit, delete, filter, and update task status in a clean mobile UI.

## Features

- ✅ Add new tasks with title, category, date, and time
- ✏️ Edit existing tasks
- 🗑️ Delete tasks with confirmation alert
- 🔄 Change task status to `To Do`, `In Progress`, or `Done`
- 🎯 Filter tasks by status (`All`, `To Do`, `In Progress`, `Done`)
- 👆 Long-press a task card to open quick actions
- 🧠 Uses local in-memory state (`useState`) for task management

## Tech Stack

- ⚛️ React Native
- 🚀 Expo
- 🧭 Expo Router
- 📘 TypeScript
- 🪝 React Hooks
- 📅 `@react-native-community/datetimepicker`
- 📋 `@react-native-picker/picker`

## Project Structure

```text
app/
  _layout.tsx
  index.tsx
components/
  AddTaskButton.tsx
  AddTaskForm.tsx
  DateSelector.tsx
  EditTaskForm.tsx
  FilterTab.tsx
  Header.tsx
  TaskCard.tsx
constants/
  Color.ts
  tasks.ts
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the app

```bash
npm run start
# or
npx expo start
```

Then open on:

- 🤖 Android emulator/device: press `a`
- 🍎 iOS simulator/device (macOS): press `i`
- 🌐 Web: press `w`

## Available Scripts

- ▶️ `npm run start` - Start Expo dev server
- 🤖 `npm run android` - Start directly for Android
- 🍎 `npm run ios` - Start directly for iOS
- 🌐 `npm run web` - Start for web
- 🧹 `npm run lint` - Run lint checks

## Notes

- 📝 Initial sample tasks are defined in `constants/tasks.ts`.
- 💾 Data is not persisted yet (no AsyncStorage or backend in current version).
