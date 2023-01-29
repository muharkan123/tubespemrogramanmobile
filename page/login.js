import React, { Component } from "react";
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Text,
  StyleSheet,
  Alert,
  StatusBar,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { getDocs, collection, doc, where, query } from "firebase/firestore";
import { db } from "./config";
import 'localstorage-polyfill';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from "@expo-google-fonts/poppins";
// import { ScrollView } from "react-native-gesture-handler";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      username:"",
      email: "",
      password: "",
      dbemail: "",
      dbpassword: "",
      pass_email:"",
      HP:"",
      check_textInputChange: false,
      secureTextEntry: true,
      pass_username:"",
      address:'',
      pass_address:'',
      usia:'',
    };
  }

  getUser = () => {
    var email = this.state.email;
    var password = this.state.password;
    if (email.length == 0 || password.length == 0) {
      alert("Harap isi data dengan benar!!");
    } else {
      getDocs(
        query(collection(db, "username"), where("email", "==", email))
      ).then((docSnap) => {
        let username = [];
        docSnap.forEach((doc) => {
          username.push({ ...doc.data(), id: doc.id });
        });
        this.setState({
          dbemail: username[0].email,
          dbpassword: username[0].password,
          user: username[0].username,
          HP: username[0].HP,
          address: username[0].Address,
          usia: username[0].usia,
        });
        if (
          this.state.email === this.state.dbemail &&
          this.state.password === this.state.dbpassword
        ) {
          this.setState({ pass_username: this.state.user, pass_HP:this.state.HP, pass_address:this.state.address, pass_usia:this.state.usia  }, () =>
            localStorage.setItem("pass_username", this.state.user),
            localStorage.setItem("pass_email", this.state.email),
            localStorage.setItem("pass_address", this.state.address),
            localStorage.setItem("pass_HP", this.state.HP),
            localStorage.setItem("pass_usia", this.state.usia)
          );
          Alert.alert("Login Berhasil");
          console.log(
            "Documen Data: ",
            username[0].email,
            username[0].password,
            username[0].username,
          );
          this.props.navigation.navigate("Tombol",{email});
        } else {
          Alert.alert("Login Gagal");
        }
      });
    }
  };
  updateSecureTextEntry() {
    this.setState({
      ...this.state,
      secureTextEntry: !this.state.secureTextEntry,
    });
  }

  render() {
    // let [fontsLoaded] = useFonts({
    //   Poppins_100Thin,
    //   Poppins_100Thin_Italic,
    //   Poppins_200ExtraLight,
    //   Poppins_200ExtraLight_Italic,
    //   Poppins_300Light,
    //   Poppins_300Light_Italic,
    //   Poppins_400Regular,
    //   Poppins_400Regular_Italic,
    //   Poppins_500Medium,
    //   Poppins_500Medium_Italic,
    //   Poppins_600SemiBold,
    //   Poppins_600SemiBold_Italic,
    //   Poppins_700Bold,
    //   Poppins_700Bold_Italic,
    //   Poppins_800ExtraBold,
    //   Poppins_800ExtraBold_Italic,
    //   Poppins_900Black,
    //   Poppins_900Black_Italic,
    // });

    return (
      <SafeAreaView>
        <ScrollView>
          <StatusBar />
          <Image
            source={require("../assets/ban1.png")}
            style={{
              width: '100%',
              height: 450,
              borderTopLeftRadius: 270 / 2,
              borderTopRightRadius: 270 / 2,
              overflow: "hidden",
              marginBottom: 10,
            }}
          />
          <View style={styles.viewStyle}>
            <Text style={styles.sila}>Silakan Login Terlebih Dahulu</Text>
            <View style={styles.inputStyle}>
              <TextInput
                placeholder="Enter Your Email"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                onChangeText={(email) => this.setState({ email })}
              />
            </View>
            <View style={styles.inputStyle2}>
              <TextInput
                placeholder="Enter Your Password"
                placeholderTextColor="#aaaaaa"
                style={styles.textInput}
                secureTextEntry={this.state.secureTextEntry ? true : false}
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

            {/* Button */}

            <View style={styles.loginButtonSection}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.getUser();
                }}
              >
                <Text style={styles.text}>Login</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginButtonSection}>
              <TouchableOpacity
                style={styles.loginButton}
                onPress={() => {
                  this.props.navigation.navigate("Register");
                }}
              >
                <Text style={styles.text}>Create new Account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 260,
    height: 260,
    marginBottom: 10,
    justifyContent: "center",
  },
  viewStyle: {
    paddingHorizontal: 20,
    alignItems: "center",
  },
  inputStyle: {
    width: "100%",
    height: 48,
    borderRadius: 200,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 5,
    // flexDirection: "row",
  },
  inputStyle2: {
    width: "100%",
    height: 48,
    borderRadius: 200,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 30,
    flexDirection: "row",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    elevation: 5,
  },
  mata: {
    paddingTop: 15,
    paddingRight: 20,
  },
  textInput: {
    height: 50,
    color: "black",
    fontSize: 15,
    flex: 1,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    textTransform: "uppercase",
  },
  loginButtonSection: {
    width: "100%",
    marginTop: 25,
  },
  loginButton: {
    backgroundColor: "#00337C",
    color: "white",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderRadius: 150,
  },
  sila: {
    marginVertical: 15,
    fontWeight: "bold",
    color: "#00337C",
    fontSize: 22,
  },
});
