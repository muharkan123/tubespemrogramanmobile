// import { View, Text } from "react-native";
// import React from "react";
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import Splash from "./page/splash";
// import SignIn from "./page/login";
// import SignUp from "./page/regis";
// import viewloc from "./page/viewloc";
// import Dashboard from "./page/dashboard";
// import Daftar from "./page/DaftarBengkel";
// import Profile from "./page/profile";

// const Stack = createNativeStackNavigator();

// const Tombol = () => {
//     return (
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
  
//             if (route.name === 'Dashboard') {
//               iconName = focused ? 'home' : 'home-outline';
//             } else if (route.name === 'Daftar Bengkel') {
//               iconName = focused ? 'albums' : 'albums-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'person' : 'person-outline';
//             }
  
//             // You can return any component that you like here!
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//           tabBarActiveTintColor: '#00337C',
//           tabBarInactiveTintColor: '#567189',
  
//         })}>
//         <Tab.Screen
//           name="Dashboard"
//           component={Dashboard}
//           options={{ headerShown: false, }}
//         />
//         <Tab.Screen name="Daftar Bengkel" component={Daftar} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     );
//   };

// export default function Router() {
//   return (
//     <Stack.Navigator initialRouteName="Splash">
//       <Stack.Screen
//         name="Splash"
//         component={Splash}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Login"
//         component={SignIn}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Register"
//         component={SignUp}
//         options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Viewloc"
//         component={viewloc}
//         options={{ headerShown: false }}
//       />
      
//     </Stack.Navigator>
//   );
// }
