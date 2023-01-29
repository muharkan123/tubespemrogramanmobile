import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, Pressable, Modal } from 'react-native';
import { firebase } from "./fetch.jsx";
class Viewloc extends Component {
    state = {
        locations: [],
        selectedLocation: null,
        mapVisible: false,
    };

    componentDidMount() {
        const maplistRef = firebase.firestore().collection('map');
        maplistRef.onSnapshot((querySnapshot) => {
            const locations = [];
            querySnapshot.forEach((doc) => {
                const { nama, latitude, longitude } = doc.data();
                locations.push({
                    nama,
                    latitude,
                    longitude,
                });
            });
            this.setState({ locations });
        });
    }

    handlePress = item => {
        console.log({ item });
        var nama = item.nama;
        var latitude = item.latitude;
        var longitude = item.longitude;
        console.log(nama, latitude, longitude);

        this.props.navigation.navigate("Map", {
            nama,
            latitude,
            longitude,
        });

        

    }

    render() {
        return (
            <View style={{ flex: 1, marginTop: 5 }}>

                <FlatList
                    style={{ height: '100%' }}
                    data={this.state.locations}
                    numColumn={1}
                    renderItem={({ item }) => (
                        <Pressable style={styles.container} onPress={() => { this.handlePress(item); }}>
                            {/* <Map></Map> */}
                            <View style={styles.innerContainer}>
                                <Text style={styles.itemHeading}>{item.nama}</Text>
                                <Text style={styles.itemText}>{item.latitude}</Text>
                                <Text style={styles.itemText}>{item.longitude}</Text>
                            </View>
                        </Pressable>
                    )}
                // keyExtractor={item => item.nama}
                ></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        backgroundColor: '#e5e5e5',
        padding: 10,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        marginLeft: "5%",
    },
    innerContainer: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    itemHeading: {
        fontWeight: 'bold',
    },
    itemText: {
        fontWeight: '300',
    },
});

export default Viewloc;