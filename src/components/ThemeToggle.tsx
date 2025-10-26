import { Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        cursor: 'pointer',
        background: 'transparent',
        border: 'none',
        padding: 0
      }}
    >
      {theme === 'light' ? (
        <span className="text-xl">🍊</span>
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
