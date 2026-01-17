import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme as useDeviceColorScheme } from 'react-native';
import { Colors, Typography, FontFamily, Accent, Neutral, ThemeColors, ColorScheme } from '@/constants/theme';

interface ThemeContextType {
  colors: ThemeColors;
  typography: typeof Typography;
  fontFamily: typeof FontFamily;
  accent: typeof Accent;
  neutral: typeof Neutral;
  colorScheme: ColorScheme;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
  forcedColorScheme?: ColorScheme;
}

export function ThemeProvider({ children, forcedColorScheme }: ThemeProviderProps) {
  const deviceColorScheme = useDeviceColorScheme();
  const colorScheme: ColorScheme = forcedColorScheme ?? deviceColorScheme ?? 'light';
  const isDark = colorScheme === 'dark';

  const theme = useMemo<ThemeContextType>(() => ({
    colors: Colors[colorScheme],
    typography: Typography,
    fontFamily: FontFamily,
    accent: Accent,
    neutral: Neutral,
    colorScheme,
    isDark,
  }), [colorScheme, isDark]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de ThemeProvider');
  }
  return context;
}
