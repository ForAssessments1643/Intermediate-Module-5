import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home/Home';
import Details from './src/Home/Details';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./src/Register";
import Reset from "./src/Reset";
import Dashboard from "./src/Dashboard";
import UserData from "./src/UserData";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <  Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register} options={{title:"Register"}} />
      <Stack.Screen name="Reset" component={Reset} options={{title:"Reset Password"}} />
      <Stack.Screen name="Dashboard" component={Dashboard} options={{title:"Dashboard"}} />
      <Stack.Screen name="UserData" component={UserData} options={{title:"User Info"}} />
      <Stack.Screen name="Home" component={Home} options={{title:"Home"}}  />
      <Stack.Screen name="Detail" component={Details} options={{title:"Service "}}  />
      </Stack.Navigator>
   
    </NavigationContainer>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


