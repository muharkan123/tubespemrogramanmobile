import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { firebase } from "./fetch.jsx";
import { Title } from "react-native-paper";

const Mapopup = ({ route, navigation }) => {
  const { username, longitude, latitude } = route.params;
  return (
    <MapView
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
      }}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      showsUserLocation={true}
      loadingEnabled={true}
    >
      <Marker coordinate={{ latitude: latitude, longitude: longitude }} title={username}/>
    </MapView>
  );
};

export default Mapopup;
