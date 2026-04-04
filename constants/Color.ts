const Colors = {
  background: "#0F172A", // main background (deep dark blue)
  surface: "#1E293B", // cards / todo items
  surfaceLight: "#334155", // hover / subtle sections
  border: "#475569", // borders

  primary: "#6366F1", // indigo (modern highlight)
  primaryMuted: "#818CF8", // lighter indigo

  textPrimary: "#F8FAFC", // main text (almost white)
  textSecondary: "#94A3B8", // secondary text (soft gray)

  statusDone: "#22C55E", // green (completed)
  statusInProgress: "#F59E0B", // amber (progress)
  statusToDo: "#EF4444", // red (pending)
} as const;

export default Colors;
