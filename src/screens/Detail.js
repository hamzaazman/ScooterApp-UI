import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function Detail({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} >
          <Feather name="chevron-left" color="#fff" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#fff" size={25} />
      </View>

      <Image source={require("../../assets/2.png")} style={styles.img} />

      <View style={styles.cardContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Vespa Scooter</Text>
          <Text style={styles.subTitle}>Sprint 50</Text>
        </View>

        <View style={styles.colorContainer}>
          <Text style={styles.colorText}>Colors</Text>

          <View style={styles.selectColor}>
            <View
              style={{
                ...styles.circle,
                backgroundColor: "red",
                borderWidth: 2,
              }}
            />
            <View style={{ ...styles.circle, backgroundColor: "green" }} />
            <View style={{ ...styles.circle, backgroundColor: "#2d6ba8" }} />
          </View>
        </View>

        <View style={styles.detailContainer}>
          <Text style={styles.detailText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Feather name="heart" size={25} />

          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
  },
  header: {
    width: "100%",
    marginTop: 36,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  img: {
    width: "100%",
    height: "42%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: "#fff",
    height: "100%",
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 20,
  },
  titleContainer: {
    marginTop: 28,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    color: "#474747",
    fontWeight: "bold",
    fontSize: 18,
  },
  colorContainer: {
    marginTop: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  colorText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  selectColor: {
    flexDirection: "row",
  },
  circle: {
    width: 24,
    height: 24,
    marginRight: 10,
    backgroundColor: "red",
    borderRadius: 24,
  },
  detailContainer: {
    marginTop: 30,
    width: "80%",
  },
  detailText: {
    lineHeight: 22,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop:30,
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
  },
  btn: {
    paddingHorizontal:80,
    paddingVertical:10,
    borderRadius:30,
    backgroundColor:'#2d6ba8'
  },
  btnText: {
    color:'#fff',
    fontSize:18,
    fontWeight: "bold",
  },
});
