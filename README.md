# React Native To-Do App

A task manager mobile app built with React Native, Expo Router, and Firebase Firestore.

## Features

- ✅ Add tasks with title, category, date, and time
- ✏️ Edit existing tasks
- 🗑️ Delete tasks with confirmation
- 🔄 Update status (`To Do`, `In Progress`, `Done`)
- 🎯 Filter tasks by status
- 📅 Filter tasks by selected date
- 👆 Long-press task cards for quick actions
- ☁️ Firestore-backed CRUD (data persists in Firebase)

## Tech Stack

- ⚛️ React Native + Expo
- 🧭 Expo Router
- 📘 TypeScript
- 🔥 Firebase Firestore

## Firebase Setup

1. 🔧 Create a Firebase project.
2. 🗂️ Enable Firestore Database.
3. 📄 Copy `.env.example` to `.env`.
4. 🔐 Fill Firebase values in `.env`:

```bash
EXPO_PUBLIC_FIREBASE_API_KEY=...
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=...
EXPO_PUBLIC_FIREBASE_PROJECT_ID=...
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=...
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
EXPO_PUBLIC_FIREBASE_APP_ID=...
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=...
```

## Firestore Data Shape

Collection: `tasks`

Document fields:

```ts
{
  title: string;
  category: string;
  date: string;
  time: string;
  status: string;
}
```

## Getting Started

1. 📦 Install dependencies:

```bash
npm install
```

2. ▶️ Start the app:

```bash
npm run start
# or
npx expo start
```

Then open on:

- 🤖 Android: press `a`
- 🍎 iOS (macOS): press `i`
- 🌐 Web: press `w`

## Available Scripts

- ▶️ `npm run start` - Start Expo dev server
- 🤖 `npm run android` - Start directly on Android
- 🍎 `npm run ios` - Start directly on iOS
- 🌐 `npm run web` - Start for web
