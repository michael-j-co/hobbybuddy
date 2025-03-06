import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const LogoHeader = () => {
  return (
    <View style={styles.container}>
      {/* Use the locally stored logo */}
      <Image source={require("../../assets/HBLogo.png")} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
  logo: {
    width: 74,
    height: 74,
    borderRadius: 50,
  },
});

export default LogoHeader;
