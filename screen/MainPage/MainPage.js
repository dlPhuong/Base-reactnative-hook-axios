import React from "react";
import { View,Text,Pressable } from "react-native";
import {useDispatch, useSelector} from "react-redux";


export function MainPage({ navigation }) {
  const displays = useSelector(state => state.display);
  console.log(displays);
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>{displays.Account?displays.Account.firstName:null}</Text>
        <Text>{displays.Account?displays.Account.email:null}</Text>
        <Text>{displays.Account?displays.Account.login:null}</Text>
        <Text>{displays.Account?displays.Account.authorities:null}</Text>
        <Text>{displays.Token.id_token}</Text>
         <Pressable
          onPress={() => navigation.navigate('login')}
          style={{ padding: 10, marginBottom: 10, marginTop: 10 }}
        >
        <Text>Go to login</Text>
        </Pressable>
      </View>
    );
  }