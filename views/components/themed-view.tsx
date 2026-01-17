import { View, type ViewProps } from 'react-native';

import { useTheme } from '@/services/context/ThemeContext';

export type ThemedViewProps = ViewProps & {
  variant?: 'background' | 'surface';
};

export function ThemedView({ style, variant = 'background', ...otherProps }: ThemedViewProps) {
  const { colors } = useTheme();
  const backgroundColor = variant === 'surface' ? colors.surface : colors.background;

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
