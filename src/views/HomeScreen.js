import React from "react";
import { View, Text, Button } from "react-native";
import { logoutUser } from "../controllers/authController";

const HomeScreen = () => {
  const handleLogout = () => {
    logoutUser();
  };

  return (
    <View>
      <Text>Welcome to Home Screen</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
