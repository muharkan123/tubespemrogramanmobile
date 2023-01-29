import { ImageBackground, StyleSheet, Image } from 'react-native';
import React from 'react';
import { useEffect } from 'react';

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout( () => {
      //pake kurung kurawal dan tidak pakai juga bisa
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../assets/sp.png')}
      style={styles.background}>
      <Image source={require('../assets/spc.png')} style={styles.logo} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 286,
    height: 187,
  },
});
