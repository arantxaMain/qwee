import { TextStyle } from 'react-native';

// Colores neutros
export const Neutral = {
  100: '#f7f7f7',
  300: '#b4b4b4',
  500: '#868686',
  700: '#585858',
  900: '#141414',
};

// Colores de acento
export const Accent = {
  red: '#a9565c',
  orange: '#d7897f',
  yellow: '#fab95d',
  green: '#96c7b2',
  blue: '#6398a8',
  purple: '#7a6fa3',
};

// Colores semánticos para light/dark mode
export const Colors = {
  light: {
    text: Neutral[900],
    textSecondary: Neutral[700],
    textMuted: Neutral[500],
    background: Neutral[100],
    surface: '#ffffff',
    border: Neutral[300],
    accent: Accent,
    neutral: Neutral,
  },
  dark: {
    text: Neutral[100],
    textSecondary: Neutral[300],
    textMuted: Neutral[500],
    background: Neutral[900],
    surface: Neutral[700],
    border: Neutral[700],
    accent: Accent,
    neutral: Neutral,
  },
};

// Familias de fuentes
export const FontFamily = {
  title: 'Montagu Slab',
  body: 'Space Grotesk',
};

// Estilos de tipografía
export const Typography: Record<string, TextStyle> = {
  titulo: {
    fontFamily: FontFamily.title,
    fontSize: 32,
    fontWeight: '500',
    letterSpacing: -0.32,
    lineHeight: 35.2,
  },
  cardTitulo: {
    fontFamily: FontFamily.title,
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.32,
    lineHeight: 19.2,
  },
  cardAnio: {
    fontFamily: FontFamily.body,
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: -0.28,
    lineHeight: 16.8,
  },
};

// Tipo del tema
export type ThemeColors = typeof Colors.light;
export type ColorScheme = 'light' | 'dark';
