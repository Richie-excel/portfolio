import { Moon } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() =>
        setTheme(isDark ? "dark" : "dark")
      }
      className="w-9 h-9 rounded-lg border border-border hover:cursor-pointer flex items-center justify-center text-muted-foreground hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Moon className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </button>
  );
}