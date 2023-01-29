import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Text,
  Alert,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { setDoc, doc } from "firebase/firestore";
import { useState } from "react";
import MapView from "react-native-maps";
import Constants from "expo-constants";
import { db } from "./config";
import ImagePicker from 'react-native-image-picker'

export default class Addbengkel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      HP: "",
      Address: "",
      email: "",
      check_textInputChange: false,
      confirmSecureTextEntry: true,
      secureTextEntry: true,
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    };
  }

  insertNewBengkel = () => {
    var user = this.state.user;
    var HP = this.state.HP;
    var Address = this.state.Address;
    var email = this.state.email;
    if (
      user.length == 0
      //   email.length == 0 ||
      //   password.length == 0 ||
      //   HP.length == 0 ||
      //   Address.length == 0 ||
      //   confirmPw.length == 0
    ) {
      alert("Harap isi data dengan benar!!");
    } else {
      setDoc(doc(db, "bengkel", user), {
        username: user,
        HP: HP,
        Address: Address,
        email: email,
      })
        .then(() => {
          console.log("data submitted");
          Alert.alert("Pendaftaran Bengkel Berhasil!");
          this.props.navigation.navigate("Dashboard");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "left",
                lineHeight: 50,
                marginHorizontal: 15,
                fontSize: 28,
                color: "#00337C",
                marginBottom: 15,
                marginTop: 10,
              }}
            >
              Silakan Tambahkan Bengkel
            </Text>
            
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >

              <TextInput
                placeholder="Masukkan Nama bengkel"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(user) => this.setState({ user })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Nomor HP Bengkel"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(HP) => this.setState({ HP })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Email Bengkel"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                borderRadius: 30,
                paddingLeft: 30,
                margin: 15,
              }}
            >
              <TextInput
                placeholder="Masukkan Alamat Bengkel"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(Address) => this.setState({ Address })}
              />
            </View>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", paddingHorizontal: 20 }}
          >
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                this.insertNewBengkel();
              }}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    color: "black",
    fontSize: 20,
    flex: 1,
  },
  registerButton: {
    backgroundColor: "#00337C",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
});
