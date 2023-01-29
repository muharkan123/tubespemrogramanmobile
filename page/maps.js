import React, { Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { firebase } from "./fetch.jsx";
import { View, Text } from "react-native";

class MyMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [],
      selectedLocation: null,
      mapVisible: false,
      region: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }

  componentDidMount() {
    const maplistRef = firebase.firestore().collection("bengkel");
    maplistRef.onSnapshot((querySnapshot) => {
      const locations = [];
      querySnapshot.forEach((doc) => {
        const { username, longitude, latitude } = doc.data();
        locations.push({
          username,
          longitude,
          latitude,
        });
      });
      this.setState({ locations });
    });
  }

  render() {
    return (
      <View>
        <MapView
          style={{ height: "100%" }}
          region={this.state.region}
          showsUserLocation={true}
        >
          {this.state.locations.map((location, i) => (
            <Marker
              key={i}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.username}
            />
          ))}
        </MapView>
      </View>
    );
  }
}

export default MyMap;
