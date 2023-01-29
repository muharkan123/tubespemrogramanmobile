import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./page/login";
import Regis from "./page/regis";
import Splash from "./page/splash";
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from "./page/dashboard";
import DaftarBengkel from "./page/daftarbengkel";
import Profile from "./page/profile";
import DetailBengkel from "./page/detailbengkel";
import { useFonts } from 'expo-font';
import Addbengkel from "./page/addbengkel";
import Mapss from "./page/home";
import Viewloc from "./page/viewloc";
import Lokasi from "./page/maps";
import Updatebengkel from "./page/updatebengkel";
import Mapopup from "./page/mapopup";
import UpdateBengkell from "./page/updateBengkel2";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Tombol = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Lokasi Bengkel') {
            iconName = focused ? 'albums' : 'albums-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#00337C',
        tabBarInactiveTintColor: '#567189',

      })}>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{ headerShown: false, }}
      />
      <Tab.Screen name="Lokasi Bengkel" component={DaftarBengkel} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
    'Poppins-BlackItalic': require('./assets/fonts/Poppins-BlackItalic.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('./assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Regis}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tombol"
          component={Tombol}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetailBengkel"
          component={DetailBengkel}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Addbengkel"
          component={Addbengkel}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Mapss"
          component={Mapss}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ViewLoc"
          component={Viewloc}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Lokasi"
          component={Lokasi}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Update Bengkel"
          component={Updatebengkel}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="Mapopup"
          component={Mapopup}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="UpdateBengkell"
          component={UpdateBengkell}
        >
        
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
