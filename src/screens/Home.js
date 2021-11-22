import React from "react";
import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../../assets/1.png")} />
      <Text style={styles.title}> Vespa Scooter </Text>
      <Text style={styles.detail}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
        consectetur suscipit tortor. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Pellentesque elementum in sem ut sagittis. 
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Detail")}
      >
        <Text style={styles.text}> Next </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginTop: 20,
    fontWeight: "bold",
  },
  detail: {
    color: "#fff",
    fontSize: 18,
    lineHeight: 22,
    textAlign: "center",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  btn: {
    backgroundColor: "#2d6ba8",
    marginTop: 50,
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
});
