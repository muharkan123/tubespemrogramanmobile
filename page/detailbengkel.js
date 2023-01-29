import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import React from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import Dashboard from "./dashboard";
import { colors } from "react-native-elements";
import { db } from "./config";

export default function DetailBengkel({ route, navigation }) {
  const { username, Address, HP, email, longitude, latitude } = route.params;
  const handlePress = (username, latitude, longitude) => {
    var username = username;
    var longitude = longitude;
    var latitude = latitude;
    // console.log(username, latitude, longitude );
    navigation.navigate("Mapopup", {
      username,
      longitude,
      latitude,
    });
  };

  return (
    <View>
      <Text style={styles.sila1}>Detail Dari Lokasi</Text>
      <View style={styles.card}>
        <Text style={styles.sila2}>
          <Text style={{ fontWeight:'bold' }}>
          Nama Bengkel :
          </Text> 
          {"\n"}
          {username}
        </Text>
        <Text style={styles.sila2}>
          {"\n"}<Text style={{ fontWeight:'bold' }}>
          Nomor HP Bengkel:
          </Text> {"\n"}
          {HP}
        </Text>
        <Text style={styles.sila2}>
          {"\n"}<Text style={{ fontWeight:'bold' }}>
          Lokasi Bengkel:
          </Text> {"\n"}
          {longitude}, {latitude}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: "center",
          marginTop: 20,
          backgroundColor: "green",
          width: "60%",
          alignSelf: "center",
          borderRadius: 50,
          height: 50,
          justifyContent: "center",
        }}
        onPress={() => {
          handlePress(username, latitude, longitude, navigation);
        }}
      >
        <Text
          style={{ alignSelf: "center", fontWeight: "bold", color: "white" }}
        >
          Tampilkan Lokasi
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sila: {
    height: 50,
    color: "black",
    fontSize: 20,
  },
  sila1: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#00337C",
    fontSize: 22,
    marginLeft: 20,
  },
  sila2: {
    color: "black",
    fontSize: 20,
    marginLeft: 20,
  },
  conta: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 30,
    margin: 15,
    width: "100%",
  },
  tulis: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  card: {
    backgroundColor: "white",
    width: "80%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 40,
  },
});
