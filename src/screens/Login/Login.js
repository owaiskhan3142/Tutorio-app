import React, {useState} from "react";
import AppContainer from '../../navigations/AppNavigation';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import styles from "./style";
import { Alert, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "react-native";

export default function LoginScreen() {
  
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [loginData, setLoginData] = useState({})
  const check = () => {
      var first = this.username;
      var last = this.username;
      var phone = this.username;
      var age = this.username;
      var gender = this.username;
      var country = this.username;
      var email = this.username;
      var pass = this.password;
  }

  const Handler = name => text => {
    // let {name, value} = e.target;
    setLoginData((e) => ({...e, [name]:text}))
  }

  const onLoginPress = () => {

    fetch("http://192.168.3.107/login.php", {
      method:"POST",
      headers: {'Accept' : 'application/json',
    'Content-Type': 'application.json'},
      body: JSON.stringify(loginData)
    })
  }

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Text style={styles.logoText}>Login</Text>
            <TextInput name="first" placeholder="First Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("first")} />
            <TextInput name="last" placeholder="Last Name" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("last")} />
            <TextInput name="phone" placeholder="Phone" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("phone")} />
            <TextInput name="age" placeholder="Age" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("age")} />
            <TextInput name="gender" placeholder="Gender" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("gender")} />
            <TextInput name="country" placeholder="Country" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("country")} />
            <TextInput name="username" placeholder="Username" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={Handler("username")} />
            <TextInput name="password" placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={Handler("password")}/>
            <Button buttonStyle={styles.loginButton} onPress={() => onLoginPress()} title="Login" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
