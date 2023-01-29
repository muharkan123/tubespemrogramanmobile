import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  StyleSheet,
} from "react-native";
import React from "react";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import Dashboard from "./dashboard";
import { colors } from "react-native-elements";
import { db } from "./config";
import { useState } from "react";

export default function UpdateBengkell({ route, navigation }) {
  const { username, Address, HP, email, longitude, latitude } = route.params;
  const [myUsername, setMyUsername] = useState(username);
  const [myHP, setMyHP] = useState(HP);
  const [myemail, setMyemail] = useState(email);
  const [myaddress, setMyaddress] = useState(Address);

  const updateLokasi = (username, HP, email, Address) => {
    updateDoc(doc(db, "bengkel", myUsername), {
      username: myUsername,
      HP: myHP,
      email: myemail,
      Address: myaddress,
    })
      .then(() => {
        console.log("berhasil");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteLokasi = () => {
    deleteDoc(doc(db, "bengkel", username))
      .then(() => {
        console.log("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", margin: 20 }}>
      <Text style={styles.sila1}>Silakan Update Data</Text>
      <View style={styles.conta}>
        <TextInput
          placeholder={username}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(username) => setMyUsername(username)}
        />
      </View>
      <View style={styles.conta}>
        <TextInput
          placeholder={HP}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(HP) => setMyHP(HP)}
        />
      </View>
      <View style={styles.conta}>
        <TextInput
          placeholder={email}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(email) => setMyemail(email)}
        />
      </View>
      <View style={styles.conta}>
        <TextInput
          placeholder={Address}
          placeholderTextColor="#aaaaaa"
          style={styles.sila}
          onChangeText={(address) => setMyaddress(address)}
        />
      </View>
      <View style={{ flexDirection: "row", flex:1, marginTop:20 }}>
        <TouchableOpacity
          style={{ marginHorizontal: 20, backgroundColor: "blue", width: 150, height:40, justifyContent:'center', alignItems:"center", borderRadius:40}}
          onPress={() => {
            updateLokasi();
            navigation.navigate("Update Bengkel");
          }}
        >
          <Text style={styles.tulis}>Update</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginHorizontal: 20, backgroundColor: "red", width: 150, height:40,justifyContent:'center', alignItems:"center", borderRadius:40 }}
          onPress={() => {
            Alert.alert(
              "Delete Confirmation",
              "Are you sure you want to delete this location?",
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel",
                },
                {
                  text: "OK",
                  onPress: () => deleteLokasi(db, "bengkel", myUsername),
                },
              ],
              { cancelable: false }
            );
          }}
        >
          <Text style={styles.tulis}>deleteLokasi</Text>
        </TouchableOpacity>
      </View>
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
    marginVertical: 15,
    fontWeight: "bold",
    color: "#00337C",
    fontSize: 22,
  },
  conta: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingLeft: 30,
    margin: 15,
    width: "100%",
  },
  tulis:{
    fontSize:15,
    fontWeight:'bold',
    color:'white'
  }
});
