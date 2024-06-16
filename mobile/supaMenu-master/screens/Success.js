import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { AntDesign } from "@expo/vector-icons";

const PaymentSuccess = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/payment.png")}
        resizeMode="cover"
        style={{ marginVertical: 20 }}
      />

      <View style={styles.successText}>
        <Text style={{ fontSize: 16, color: "#F7941D", marginBottom: 10 }}>
          Payment Success, Yayy!
        </Text>
        <Text style={{ fontSize: 14, color: COLORS.white }}>
          we will send order details and invoice in your contact no. and
          registered email
        </Text>
      </View>

      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#F7941D", fontSize: 17, marginRight: 12 }}>
          Check Details
        </Text>
        <AntDesign name="arrowright" size={24} color="#F7941D" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: "80%",
          marginHorizontal: 20,
          padding: SIZES.padding,
          backgroundColor: "#F7941D",
          alignItems: "center",
          borderRadius: 15,
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => handleSubmit()}
      >
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          Download Invoice
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{ display: "flex", flexDirection: "row", marginTop: 30 }}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Text style={{ fontSize: 40, color: COLORS.white }}>Supa</Text>
        <Text style={{ color: "#F7941D", fontSize: 40 }}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#000000",
  },

  successText: {
    width: "70%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default PaymentSuccess;
