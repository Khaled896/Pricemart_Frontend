import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from '../screens/SigninScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';



const Stack = createNativeStackNavigator();

const Navigation =()=>{

return (

    <NavigationContainer>

    <Stack.Navigator >

    <Stack.Screen name="SignIn" component={SigninScreen} />
    <Stack.Screen name="Signup" component={SignUpScreen} />

    <Stack.Screen name="forgotpassword" component={ForgotPasswordScreen} />

    <Stack.Screen name="newpassword" component={NewPasswordScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />




    </Stack.Navigator>

    </NavigationContainer>
);


};

export default Navigation;