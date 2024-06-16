import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import axiosInstance from "../config";

const CategoryProductsScreen = ({ navigation }) => {
    
    const categoryId = navigation.getParam('categoryId')
    const [items, setItems] = useState([])

    const handleGoBack = () => {
        navigation.goBack();
    }

    axiosInstance.get(`/product/${categoryId}`)
        .then(res => {
            setItems(res.data.options)
        }).catch(err => {
          console.log("error", err)
      })

  return (
    <View style={{ flex: 1 }}>
      {/* Top block */}
      <View style={styles.topNav}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="chevron-back-outline" size={24} style={styles.icon} />
        </TouchableOpacity>
      </View>

      <View style={styles.middleBlock}>
        <Text style={{ fontWeight: "bold", fontSize: 18, textAlign: "center" }}>
          Choose Kigali
        </Text>
        <Text style={{ color: "#F7941D" }}>{category}</Text>
        <View style={styles.scrollview}>
          <FlatList
            ShowVerticalScrollIndicator={false}
            data={items}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <DrinkItem drink={item} onUpdateTotal={handleUpdateTotal} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default CategoryProductsScreen;

const styles = StyleSheet.create({
  topNav: {
    // backgroundColor: 'orange',
    height: "10%",
    paddingTop: 35,
    paddingLeft: 10,
  },
  icon: {
    backgroundColor: "#F8F8FB",
    color: "#F7941D",
    width: 25,
  },
  middleBlock: {
    flex: 1,
    padding: 16,
    height: "75%",
    // backgroundColor: 'red'
  },

  scrollview: {
    // backgroundColor: 'yellow',
    height: "70%",
  },
});
