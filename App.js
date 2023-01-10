
import React,{useState} from 'react';
import {
  StyleSheet,
  View,LogBox
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {HomeScreen} from './screens'





const Drawer=createDrawerNavigator();
const Stack = createNativeStackNavigator();
   

LogBox.ignoreAllLogs();

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppContext.Provider value={DATA}> */}
    <Stack.Navigator
    //  drawerContent={()=> <DrawerContent />}
    initialRouteName="Home"
    screenOptions={{
       headerShown:false,
    }}
      >
      <Stack.Screen name="Home" component={HomeScreen} ></Stack.Screen>
    </Stack.Navigator>
    {/* </AppContext.Provider> */}
  </NavigationContainer>
  );
};
const styles = StyleSheet.create({
});
export default App;
