import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function DetailsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.emoji}>🌈</Text>
        <Text style={styles.title}>What is Emogo?</Text>
        <Text style={styles.description}>
          Emogo is your personal emotion tracker and AI companion. Easily log your daily mood, chat with an AI to reflect on your feelings, and visualize your emotional trends over time. Emogo helps you build self-awareness, track habits, and improve your mental well-being in a fun, interactive way.
        </Text>
        <View style={styles.featuresBox}>
          <Text style={styles.featuresTitle}>Key Features:</Text>
          <Text style={styles.feature}>• Mood & activity logging</Text>
          <Text style={styles.feature}>• AI-powered chat for reflection</Text>
          <Text style={styles.feature}>• Data export & visualization</Text>
          <Text style={styles.feature}>• Customizable settings</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)")}> 
          <Text style={styles.buttonText}>Back to Home Tab</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emoji: {
    fontSize: 40,
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
    lineHeight: 22,
  },
  featuresBox: {
    backgroundColor: '#e0f7fa',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    width: '100%',
    maxWidth: 350,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#007AFF',
  },
  feature: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
