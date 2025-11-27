import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.emoji}>😊</Text>
        <Text style={styles.title}>Welcome to Emogo!</Text>
        <Text style={styles.subtitle}>Your interactive emotion tracker & AI companion</Text>
      </View>
      <View style={styles.features}>
        <Text style={styles.featureTitle}>Features:</Text>
        <Text style={styles.featureItem}>• Track your mood and activities</Text>
        <Text style={styles.featureItem}>• Chat with your AI assistant</Text>
        <Text style={styles.featureItem}>• Export and visualize your data</Text>
      </View>
      <Link href="/details" style={styles.link}>Go to Details</Link>
      <Link href="/(tabs)/about" style={styles.link}>About</Link>
      <Link href="/(tabs)/settings" style={styles.link}>Settings</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: '#f0f4ff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
  },
  features: {
    marginBottom: 24,
    alignItems: 'flex-start',
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#007AFF',
  },
  featureItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 2,
  },
  link: {
    fontSize: 18,
    marginVertical: 8,
    color: "#007AFF",
    textDecorationLine: "underline",
  },
});
