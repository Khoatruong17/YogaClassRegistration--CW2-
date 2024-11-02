import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Card, Text } from "react-native-paper";
import { loginUser } from "../controllers/authController";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginUser(email, password);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Login" />
        <Card.Content>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Login
          </Button>
          <Button
            onPress={() => navigation.navigate("RegisterScreen")}
            style={styles.link}
          >
            Don’t have an account? Register
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  card: {
    padding: 20,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  link: {
    marginTop: 8,
  },
});

export default LoginScreen;
