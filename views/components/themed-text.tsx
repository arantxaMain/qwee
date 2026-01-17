import { StyleSheet, Text, type TextProps } from 'react-native';

import { useTheme } from '@/services/context/ThemeContext';

export type ThemedTextProps = TextProps & {
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'cardTitle' | 'cardYear';
};

export function ThemedText({
  style,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const { colors, typography, fontFamily } = useTheme();

  const getStyle = () => {
    switch (type) {
      case 'title':
        return typography.titulo;
      case 'cardTitle':
        return typography.cardTitulo;
      case 'cardYear':
        return typography.cardAnio;
      case 'subtitle':
        return { ...styles.subtitle, fontFamily: fontFamily.title };
      case 'defaultSemiBold':
        return { ...styles.defaultSemiBold, fontFamily: fontFamily.body };
      case 'link':
        return { ...styles.link, color: colors.accent.blue, fontFamily: fontFamily.body };
      default:
        return { ...styles.default, fontFamily: fontFamily.body };
    }
  };

  return (
    <Text
      style={[
        { color: colors.text },
        getStyle(),
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '500',
    lineHeight: 24,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
  },
});
