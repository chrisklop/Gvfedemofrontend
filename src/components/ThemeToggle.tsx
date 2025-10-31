import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{
        cursor: 'pointer',
        border: 'none',
        backgroundColor: theme === 'light' ? '#e5e7eb' : '#374151',
      }}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full transition duration-200 ease-in-out ${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        }`}
        style={{
          backgroundColor: '#ffffff',
        }}
      />
    </button>
  );
}
