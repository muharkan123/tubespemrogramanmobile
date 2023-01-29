import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Touchable,
  TextInput
} from "react-native";
import { firebase } from "./fetch.jsx";
import { SpeedDial } from "@rneui/themed";

class UpdateBengkel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      locations: [],
      selectedLocation: null,
      mapVisible: false,
    };
  }

  componentDidMount() {
    const maplistRef = firebase.firestore().collection("bengkel");
    maplistRef.onSnapshot((querySnapshot) => {
      const locations = [];
      querySnapshot.forEach((doc) => {
        const { username, HP, Address, email, longitude, latitude } = doc.data();
        locations.push({
          username,
          HP,
          Address,
          email,
          longitude,
          latitude
        });
      });
      this.setState({ locations });
    });
  }

  handlePress = (item) => {
    console.log({ item });
    var username = item.username;
    var Address = item.Address;
    var HP = item.HP;
    var email = item.email;
    var longitude = item.longitude;
    var latitude = item.latitude;
    // console.log(username, Address, HP, email, longitude, latitude);

    this.props.navigation.navigate("UpdateBengkell", {
      username,
      Address,
      HP,
      email,
      longitude, 
      latitude
    });
  };

  render() {
    return (
      <SafeAreaView>
        <Text style={styles.sila}>Pilih Bengkel yang ingin di update</Text>
        <FlatList
          style={{ height: "100%" }}
          data={this.state.locations}
          numColumn={1}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.container}
              onPress={() => {
                this.handlePress(item);
              }}
            >
              <View style={styles.innerContainer}>
                <Text style={styles.itemHeading}>{item.username}</Text>
                <Text style={styles.itemText}>{item.Address}</Text>
                <Text style={styles.itemText}>{item.email}</Text>
                <Text style={styles.itemText}>{item.HP}</Text>
                <Text style={styles.itemText}>{item.longitude}</Text>
                <Text style={styles.itemText}>{item.latitude}</Text>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    backgroundColor: "#e5e5e5",
    padding: 10,
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    marginLeft: "5%",
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
  },
  itemHeading: {
    fontWeight: "bold",
  },
  itemText: {
    fontWeight: "300",
  },
  sila: {
    marginVertical: 15,
    fontWeight: "bold",
    color: "#00337C",
    fontSize: 22,
    paddingLeft: 20,
  },
});

export default UpdateBengkel;
