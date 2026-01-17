import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/views/components/themed-text';
import { ThemedView } from '@/views/components/themed-view';
import { useTheme } from '@/services/context/ThemeContext';

export default function HomeScreen() {
  const { colors, accent } = useTheme();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Bienvenido</ThemedText>

      <ThemedView variant="surface" style={styles.card}>
        <ThemedText type="cardTitle">Título de película</ThemedText>
        <ThemedText type="cardYear" style={{ color: colors.textMuted }}>2024</ThemedText>
      </ThemedView>

      <View style={styles.colorsDemo}>
        <ThemedText type="subtitle">Colores de acento:</ThemedText>
        <View style={styles.colorRow}>
          <View style={[styles.colorBox, { backgroundColor: accent.red }]} />
          <View style={[styles.colorBox, { backgroundColor: accent.orange }]} />
          <View style={[styles.colorBox, { backgroundColor: accent.yellow }]} />
          <View style={[styles.colorBox, { backgroundColor: accent.green }]} />
          <View style={[styles.colorBox, { backgroundColor: accent.blue }]} />
          <View style={[styles.colorBox, { backgroundColor: accent.purple }]} />
        </View>
      </View>

      <View style={styles.textDemo}>
        <ThemedText>Texto normal (Space Grotesk)</ThemedText>
        <ThemedText style={{ color: colors.textSecondary }}>Texto secundario</ThemedText>
        <ThemedText style={{ color: colors.textMuted }}>Texto muted</ThemedText>
        <ThemedText type="link">Enlace</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingTop: 60,
    gap: 24,
  },
  card: {
    padding: 16,
    borderRadius: 12,
    gap: 4,
  },
  colorsDemo: {
    gap: 12,
  },
  colorRow: {
    flexDirection: 'row',
    gap: 8,
  },
  colorBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  textDemo: {
    gap: 8,
  },
});
