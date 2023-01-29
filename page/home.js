import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  StatusBar,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { db } from "./config";
import { updateDoc ,setDoc, doc } from "firebase/firestore";

export default class Mapss extends Component {
  state = {
    nama: "",
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    hasilLongitude: 0,
    hasilLatitude: 0,
  };

  componentDidMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        errorMessage:
          "Oops, this will not work on Sketch in an Android emulator. Try it on your device!",
      });
    } else {
      this._getLocationAsync();
    }


  }

  _handleMapRegionChange = (mapRegion) => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      this.setState({
        locationResult: "Permission to access location was denied",
      });
    } else {
      this.setState({ hasLocationPermissions: true });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
    this.setState({
      hasilLongitude: location.coords.longitude,
      hasilLatitude: location.coords.latitude,
    });
    // this.setState({
    //   hasilLongitude: JSON.stringify(Object.values(longi)),
    //   hasilLatitude: JSON.stringify(Object.values(lati)),
    // });

    // Center the map on the location we just fetched.
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      },
    });
  };

  InsertMap = () => {
    var nama = this.state.nama;
    var latitude = this.state.hasilLatitude;
    var longitude = this.state.hasilLongitude;

    updateDoc(doc(db, "bengkel", nama), {
      nama: nama,
      latitude: latitude,
      longitude: longitude,
    })
      .then(() => {
        console.log("data submitted");
        Alert.alert("Data Berhasil Disimpan");
        // this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={"#00337C"}></StatusBar>

        {this.state.locationResult === null ? (
          <Text style={styles.regular}>Finding your current location...</Text>
        ) : this.state.hasLocationPermissions === false ? (
          <Text style={styles.regular}>
            Location permissions are not granted.
          </Text>
        ) : this.state.mapRegion === null ? (
          <Text style={styles.regular}>Map region doesn't exist.</Text>
        ) : (
          <MapView
            style={{
              flex: 1,
              alignSelf: "stretch",
            }}
            region={this.state.mapRegion}
            showsUserLocation={true}
            onRegionChange={this._handleMapRegionChange}
          >
            <Marker pinColor={"red"} coordinate={this.state.mapRegion}/>
          </MapView>
        )}
        <View style={styles.inputStyle}>
          <TextInput
            placeholder="Input Nama Lokasi Yang Ingin Anda Masukkan"
            placeholderTextColor="#aaaa"
            style={styles.textInput}
            onChangeText={(nama) => this.setState({ nama })}
          />
        </View>

        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => {
              this.InsertMap();
            }}
          >
            <Text style={styles.regular}>Simpan lokasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00337C",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  regular: {
    fontSize: 12,
    textAlign: "center",
    color: "black",
    fontWeight: 'bold'
  },
  saveButton: {
    margin: 20,
    backgroundColor: "#fff",
    color: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderRadius: 70,
  },
  historyButton: {
    margin: 10,
    backgroundColor: "#AD8E70",
    color: "white",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    width: "30%",
    borderRadius: 70,
  },
  inputStyle: {
    width: "80%",
    height: 48,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 20,
    paddingLeft: 16,
    flexDirection: "row",
  },
  textInput: {
    height: 50,
    color: "black",
    fontSize: 14,
    flex: 1,
  },
});
