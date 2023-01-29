import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { Component } from "react";
import {
  useFonts,
  DMSans_400Regular,
  DMSans_400Regular_Italic,
  DMSans_500Medium,
  DMSans_500Medium_Italic,
  DMSans_700Bold,
  DMSans_700Bold_Italic,
} from "@expo-google-fonts/dm-sans";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Card } from "react-native-paper";

export default class Profile extends Component {
  state = {
    username: localStorage.getItem("pass_username"),
    HP: localStorage.getItem("pass_HP"),
    email: localStorage.getItem("pass_email"),
    address: localStorage.getItem("pass_address"),
    usia: localStorage.getItem("pass_usia"),
  };

  // let [fontsLoaded] = useFonts({
  //   DMSans_400Regular,
  //   DMSans_400Regular_Italic,
  //   DMSans_500Medium,
  //   DMSans_500Medium_Italic,
  //   DMSans_700Bold,
  //   DMSans_700Bold_Italic,
  // });

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingTop: 20,
              paddingBottom: 10,
            }}
          >
            <Ionicons name="person-circle" size={80} color="#656565" />
            <Text
              style={{
                paddingRight: 7,
                // fontFamily: "DMSans_400Regular",
                fontSize: 13,
              }}
            >
              {this.state.email}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              width: "95%",
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Card
              style={{
                marginTop: 15,
                backgroundColor: "white",
                height: 70,
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.tulisan1}>Username</Text>
              <Text style={styles.tulisan2}>{this.state.username}</Text>
            </Card>
            <Card
              style={{
                marginTop: 15,
                backgroundColor: "white",
                height: 70,
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.tulisan1}>Nomor Hp</Text>
              <Text style={styles.tulisan2}>{this.state.HP}</Text>
            </Card>
            <Card
              style={{
                marginTop: 15,
                backgroundColor: "white",
                height: 70,
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.tulisan1}>Alamat</Text>
              <Text style={styles.tulisan2}>{this.state.address}</Text>
            </Card>
            <Card
              style={{
                marginTop: 15,
                backgroundColor: "white",
                height: 70,
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.tulisan1}>Gmail</Text>
              <Text style={styles.tulisan2}>{this.state.email}</Text>
            </Card>
            <Card
              style={{
                marginTop: 15,
                backgroundColor: "white",
                height: 70,
                justifyContent: "center",
                marginBottom: 15,
              }}
            >
              <Text style={styles.tulisan1}>Usia</Text>
              <Text style={styles.tulisan2}>{this.state.usia}</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  kart: {
    flex: 1,
    width: "90%",
  },
  tulisan1: {
    // fontFamily: "DMSans_700Bold",
    fontSize: 16,
    paddingLeft: 30,
  },
  tulisan2: {
    // fontFamily: "DMSans_400Regular",
    fontSize: 13,
    paddingLeft: 30,
    marginTop: 5,
  },
});
