
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function AboutScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>💡</Text>
      <Text style={styles.title}>About Emogo</Text>
      <Text style={styles.text}>Emogo is designed to help you track your emotions, chat with an AI, and visualize your mood trends over time.</Text>
      <Text style={styles.text}>Built with Expo Router, React Native, and a sprinkle of creativity!</Text>
      <Text style={styles.funFact}>Fun fact: 😊 Tracking your mood daily can improve your mental health!</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)")}> 
        <Text style={styles.buttonText}>Back to Home Tab</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#007AFF',
      paddingVertical: 10,
      paddingHorizontal: 28,
      borderRadius: 8,
      marginTop: 24,
      elevation: 2,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: '#fffbe6',
  },
  emoji: {
    fontSize: 40,
    marginBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#222',
  },
  text: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
    textAlign: 'center',
  },
  funFact: {
    fontSize: 15,
    color: '#007AFF',
    marginTop: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
