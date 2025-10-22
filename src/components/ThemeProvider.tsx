/**
 * ThemeProvider Component
 * 
 * Provides theme state management for the entire application.
 * Handles dark/light mode switching with persistence to localStorage
 * and automatic detection of system preferences.
 * 
 * Features:
 * - Persists theme choice to localStorage
 * - Detects system color scheme preference on first visit
 * - Provides toggle and set functions to child components
 * - Updates document class for CSS variable switching
 * 
 * @component
 * @example
 * // In App.tsx
 * <ThemeProvider>
 *   <YourApp />
 * </ThemeProvider>
 * 
 * // In any child component
 * const { theme, toggleTheme } = useTheme();
 * 
 * @see /THEME.md for complete theme system documentation
 * @see /components/ThemeToggle.tsx for UI implementation
 */

import { createContext, useContext, useEffect, useState } from 'react';

/**
 * Available theme options
 * Currently supports light and dark modes
 */
type Theme = 'light' | 'dark';

/**
 * Shape of the theme context value
 */
interface ThemeContextType {
  /** Current active theme */
  theme: Theme;
  /** Toggle between light and dark */
  toggleTheme: () => void;
  /** Set specific theme directly */
  setTheme: (theme: Theme) => void;
}

/**
 * React context for theme state
 * Initialized as undefined to enforce using the hook within provider
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider component
 * Must wrap the entire application to provide theme functionality
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  /**
   * Theme state with smart initialization
   * Priority: localStorage > system preference > default (light)
   */
  const [theme, setThemeState] = useState<Theme>(() => {
    // First, check if user has previously selected a theme
    const stored = localStorage.getItem('genuverity-theme') as Theme;
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    
    // If no stored preference, check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    // Default to light mode
    return 'light';
  });

  /**
   * Effect: Update DOM and localStorage when theme changes
   * 
   * This effect runs whenever the theme state changes and:
   * 1. Updates the document root class (triggers CSS variable change)
   * 2. Persists the choice to localStorage for next visit
   * 
   * The class on <html> element controls which CSS variables are active
   * via the :root and .dark selectors in globals.css
   */
  useEffect(() => {
    const root = document.documentElement;
    
    // Remove both theme classes to ensure clean state
    // This prevents having both 'light' and 'dark' classes simultaneously
    root.classList.remove('light', 'dark');
    
    // Add the current theme class
    // This triggers the CSS variable switch in globals.css
    root.classList.add(theme);
    
    // Persist user's preference to localStorage
    // Will be read on next page load for consistent experience
    localStorage.setItem('genuverity-theme', theme);
  }, [theme]);

  /**
   * Toggle between light and dark themes
   * Used by ThemeToggle button component
   */
  const toggleTheme = () => {
    setThemeState(prev => prev === 'light' ? 'dark' : 'light');
  };

  /**
   * Set theme directly to a specific value
   * Useful for theme selection dropdown or advanced controls
   */
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Custom hook to access theme context
 * 
 * Must be used within a component that's wrapped by ThemeProvider.
 * Throws an error if used outside the provider to catch bugs early.
 * 
 * @returns Theme context value with current theme and control functions
 * @throws {Error} If used outside ThemeProvider
 * 
 * @example
 * function MyComponent() {
 *   const { theme, toggleTheme } = useTheme();
 *   return <button onClick={toggleTheme}>Current: {theme}</button>;
 * }
 */
export function useTheme() {
  const context = useContext(ThemeContext);
  
  // Enforce that hook is used within provider
  // This prevents silent bugs where theme state doesn't exist
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
}
