import React, { useState } from "react";
import { View, Text, Pressable, TouchableOpacity,StyleSheet } from "react-native";
import BackButton from "../../component/BackButton";
import Background from "../../component/Background";
import Button from "../../component/Button";
import Header from "../../component/Header";
import Logo from "../../component/Logo";
import TextInput from "../../component/TextInput";
import { theme } from "../../core/theme";
import { emailValidator } from "../../Utils/emailValidator";
import { passwordValidator } from "../../Utils/passwordValidator";
import {useDispatch} from "react-redux";
import { authentication, getAccount, loadata } from "./Login-reducer";

import axios from "axios";


export  function Login({ navigation }) {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const dispatch = useDispatch();

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    // if (emailError || passwordError) {
    //   setEmail({ ...email, error: emailError })
    //   setPassword({ ...password, error: passwordError })
    //   return
    // }
    // navigation.reset({
    //   index: 0,
    //   routes: [{ name: 'Dashboard' }],
    // })


    let data = {"username":"admin","password":"admin","rememberMe":false}

    dispatch(authentication(data))
    .then(data => {
  
      if(data){
       loaDatAccount(data.id_token);   
      }
      
    })
    .catch(e => {
        console.log(e);
    });

    // dispatch(loadata())
    //   .then(data => {
    //     console.log(data);
    //     navigation.navigate('mainpage');
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
    
  }

  function loaDatAccount(id_token){
        dispatch(getAccount(id_token))
      .then(data => {
        navigation.navigate('mainpage');
      })
      .catch(e => {
        console.log(e);
      });
    navigation.navigate('mainpage');
  }



  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

