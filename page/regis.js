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
import styles from "../style";
import Constants from "expo-constants";
import { db } from "./config";

export default class Regis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      email: "",
      password: "",
      HP: "",
      Address: "",
      usia:'',
      confirmPw: "",
      check_textInputChange: false,
      confirmSecureTextEntry: true,
      secureTextEntry: true,
    };
  }

  insertNewUser = () => {
    var user = this.state.user;
    var email = this.state.email;
    var HP = this.state.HP;
    var Address = this.state.Address;
    var usia = this.state.usia;
    var password = this.state.password;
    var confirmPw = this.state.confirmPw;

    if (
      user.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      HP.length == 0 ||
      Address.length == 0 ||
      usia.length == 0 ||
      confirmPw.length == 0
    ) {
      alert("Harap isi data dengan benar!!");
    } else if (password !== confirmPw) {
      Alert.alert("Password tidak cocok!!");
    } else {
      setDoc(doc(db, "username", user), {
        username: user,
        email: email,
        HP: HP,
        Address: Address,
        password: password,
        usia: usia,
      })
        .then(() => {
          console.log("data submitted");
          Alert.alert("Pendaftaran Berhasil!");
          this.props.navigation.navigate("Login");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  updateConfirmSecureTextEntry() {
    this.setState({
      ...this.state,
      confirmSecureTextEntry: !this.state.confirmSecureTextEntry,
    });
  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewStyle}>
            <Text
              style={{
                fontWeight: "bold",
                textAlign: "left",
                lineHeight: 50,
                marginHorizontal: 15,
                fontSize: 28,
                color: "#00337C",
                marginBottom: 15,
              }}
            >
              Selamat Datang, Silakan Registrasi Terlebih Dahulu :)
            </Text>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your Username"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(user) => this.setState({ user })}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your HP"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(HP) => this.setState({ HP })}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your Address"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(Address) => this.setState({ Address })}
              />
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your Age"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(usia) => this.setState({ usia })}
              />
            </View>
            <View style={styles.inputStyle2}>
              <TextInput
                placeholder="Enter Your Password"
                placeholderTextColor="#aaaaaa"
                secureTextEntry={this.state.secureTextEntry ? true : false}
                style={styles.textInput}
                onChangeText={(password) => this.setState({ password })}
              />
              <TouchableOpacity
                style={styles.mata}
                onPress={this.updateSecureTextEntry.bind(this)}
              >
                {this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="black" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.inputStyle2}>
              <TextInput
                placeholder="Confirms Password"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(confirmPw) => this.setState({ confirmPw })}
                secureTextEntry={
                  this.state.confirmSecureTextEntry ? true : false
                }
              />
              <TouchableOpacity
                style={styles.mata}
                onPress={this.updateConfirmSecureTextEntry.bind(this)}
              >
                {this.state.confirmSecureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="black" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={() => {
                this.insertNewUser();
              }}
            >
              <Text style={styles.text}>SignUp</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, flexDirection: "row", marginTop:15 }}>
              <Text
                style={{
                  // Note the quoting of the value for `fontFamily` here; it expects a string!
                  fontWeight: "bold",
                }}
              >
                Memiliki Akun?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Login");
                }}
              >
                <Text
                  style={{
                    color: "#00337C",
                    paddingLeft:5,
                    fontWeight:'bold'
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
