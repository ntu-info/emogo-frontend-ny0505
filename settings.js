
import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, Animated } from "react-native";
import { useRouter } from "expo-router";

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifMsg, setShowNotifMsg] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const router = useRouter();

  const handleNotifications = (value) => {
    setNotifications(value);
    setShowNotifMsg(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start(() => setShowNotifMsg(false));
      }, 1200);
    });
  };

  const containerStyle = [
    styles.container,
    darkMode && { backgroundColor: '#222' }
  ];
  const titleStyle = [
    styles.title,
    darkMode && { color: '#fff' }
  ];
  const optionLabelStyle = [
    styles.optionLabel,
    darkMode && { color: '#eee' }
  ];
  const tipStyle = [
    styles.tip,
    darkMode && { color: '#80bfff' }
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.emoji}>⚙️</Text>
      <Text style={titleStyle}>Settings</Text>
      <View style={styles.optionRow}>
        <Text style={optionLabelStyle}>Enable Notifications</Text>
        <Switch value={notifications} onValueChange={handleNotifications} />
      </View>
      <View style={styles.optionRow}>
        <Text style={optionLabelStyle}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={setDarkMode} />
      </View>
      <Text style={tipStyle}>Tip: Customization makes your experience better! 🎨</Text>
      {showNotifMsg && (
        <Animated.View style={[styles.notifMsg, { opacity: fadeAnim }]}> 
          <Text style={styles.notifMsgText}>
            Notifications {notifications ? "enabled" : "disabled"}!
          </Text>
        </Animated.View>
      )}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/(tabs)")}> 
        <Text style={styles.buttonText}>Back to Home Tab</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  // ...existing styles...
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
    backgroundColor: '#e6f7ff',
  },
  emoji: {
    fontSize: 36,
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#222',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '80%',
    justifyContent: 'space-between',
  },
  optionLabel: {
    fontSize: 16,
    color: '#555',
  },
  tip: {
    fontSize: 15,
    color: '#007AFF',
    marginTop: 32,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  notifMsg: {
    position: 'absolute',
    bottom: 32,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  notifMsgText: {
    backgroundColor: '#007AFF',
    color: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
});
