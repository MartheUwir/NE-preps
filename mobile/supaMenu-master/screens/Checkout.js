import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  //   ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import MomoOptions from "../components/Momo";
import CreditCard from "../components/CreditCard";
import { COLORS, FONTS, SIZES } from "../constants/theme";

const Checkout = ({navigation}) => {
  const [activeTab, setActiveTab] = useState("momo");

  return (
      <SafeAreaView style={styles.container}>
      {/* details */}
      <View style={styles.detailsView}>
        <View style={{ width: "91%", height: "100%", marginHorizontal: 20 }}>
          <View style={styles.backIcon}>
            <MaterialIcons
              name="keyboard-arrow-left"
              size={24}
              color="#25D482"
            />
          </View>

          <View
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 10,
            }}
          >
            <View>
              <Text style={styles.pageTitle}>Checkout</Text>
              <Image source="" resizeMode="contain" />
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={[
                  { color: "#25D482", marginBottom: 10 },
                  styles.pageTitle,
                ]}
              >
                Frw 16,000
              </Text>
              <Text style={{ color: "#B1B1B1" }}>Including VAT(18%)</Text>
            </View>
          </View>
        </View>
      </View>

      {/* <TopTabs/> */}
      <View style={styles.togglePayment}>
        <TouchableOpacity
          onPress={() => setActiveTab("creditCard")}
          style={[styles.toggleItem, activeTab=='creditCard' ? styles.toggleItemActive : styles.toggleItemInactive]}
        >
          <Text style={activeTab=="creditCard" ? styles.toggleActive : styles.toggleInactive}>Credit Card</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab("momo")}
          style={[styles.toggleItem, activeTab=='momo' ? styles.toggleItemActive : styles.toggleItemInactive]}
        >
          <Text style={activeTab=="momo" ? styles.toggleActive : styles.toggleInactive}>Mobile & Cash</Text>
        </TouchableOpacity>
      </View>

      {activeTab == "momo" ? <MomoOptions /> : <CreditCard />}

      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.pageText}>
          We will send you an order details to your email after the successfull
          payment
        </Text>
      </View>

      <TouchableOpacity
        style={{
          width: "90%",
          marginHorizontal: 20,
          padding: SIZES.padding,
          backgroundColor: "#25D482",
          alignItems: "center",
          borderRadius: 13,
          marginTop: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => navigation.navigate("PaymentSuccess")}
      >
        <Image
          source={require("../assets/lock.png")}
          resizeMode="cover"
          style={{ marginRight: 15 }}
        />
        <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
          Pay for the order
        </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#ffffff",
    overflow: "scroll",
  },

  scrollView: {
    flexGrow: 1,
    maxHeight: "100%",
  },

  detailsView: {
    backgroundColor: "#ffffff",
    width: "96%",
    height: "32%",
    borderBottomEndRadius: 15,
    borderBottomLeftRadius: 15,
    elevation: 20,
    shadowColor: "#25D482",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },

  backIcon: {
    backgroundColor: "#f8f8fb",
    width: 40,
    height: 40,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },

  pageTitle: {
    fontStyle: "bold",
    fontSize: 20,
  },

  flexHorizontal: {
    display: "flex",
  },

  togglePayment: {
    backgroundColor: "#F8F8FB",
    height: "8.5%",
    width: "80%",
    borderRadius: 14,
    marginHorizontal: 35,
    position: "absolute",
    top: 220,
    elevation: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  toggleItem: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },

  toggleItemActive: {
    backgroundColor: "#25D482",
  },

  toggleItemInactive: {
    backgroundColor: '#F8F8FB'
  },

  toggleInactive: {
    font: "bold",
    fontSize: 18,
    backgroundColor: '#fffff'
  },

  toggleActive: {
    color: "#ffffff",
    fontStyle: "normal",
    fontSize: 18,
  },

  momoOption: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: 'space-between',
    padding: 20, //use padding for height
    width: "100%",
    // marginBottom: 20,
    // backgroundColor: '#ffffff'
  },

  pageText: {
    color: "#B1B1B1",
    fontSize: 15,
    width: "60%",
    textAlign: "center",
  },
});

export default Checkout;
