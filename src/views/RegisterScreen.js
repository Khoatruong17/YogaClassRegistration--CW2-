import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Toast from "react-native-toast-message";
import { TextInput, Button, Card, Text } from "react-native-paper";
import { registerUser } from "../controllers/authController";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    // Basic validation
    if (!email || !password) {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: "Email and password are required.",
      });
      return;
    }

    try {
      await registerUser(email, password);
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: "You can now log in!",
      });
      //navigation.navigate("LoginScreen");
    } catch (error) {
      console.log(error); // Log the entire error for debugging

      // Check for Firebase error codes
      if (error.code) {
        switch (error.code) {
          case "auth/email-already-in-use":
            Toast.show({
              type: "error",
              text1: "Error",
              text2: "This email is already in use. Please try another.",
            });
            break;
          case "auth/invalid-email":
            Toast.show({
              type: "error",
              text1: "Error",
              text2: "Please enter a valid email address.",
            });
            break;
          case "auth/weak-password":
            Toast.show({
              type: "error",
              text1: "Error",
              text2: "Password should be at least 6 characters.",
            });
            break;
          default:
            Toast.show({
              type: "error",
              text1: "Error",
              text2:
                error.message ||
                "An unexpected error occurred. Please try again.",
            });
        }
      } else {
        // Handle cases where the error does not have a code
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "An unexpected error occurred. Please try again.",
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Register" />
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
          <Button
            mode="contained"
            onPress={handleRegister}
            style={styles.button}
          >
            Register
          </Button>
          <Button
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.link}
          >
            Already have an account? Login
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

export default RegisterScreen;
