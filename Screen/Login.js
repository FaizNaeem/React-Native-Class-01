import axios from 'axios';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity, LinearGradient } from 'react-native';

export default function Login({ navigation }) {
  let [email, setEmail] = useState("Random1@gmail.com")
  let [password, setPassword] = useState("192022")
  console.log('email-->', email);
  console.log("password-->", password);
  const login = {
    email:email ,
    password:password
  }
  // console.log(login);
  const handler = () => {
    axios.post("https://nice-blue-calf-gown.cyclic.app/user/Login",login)
    alert("Login success")
    navigation.goBack();

  }
  return (

    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontFamily: "serif" }}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Email'
        onChangeText={(e) => setEmail(e)}
        value={email}
        keyboardType='email-address'

      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={(e) => setPassword(e)}
        placeholder='Enter Password'
        keyboardType='visible-password'

      />
      {/* <Button
        title='Login'
        onPress={() => navigation.navigate('Home')}
      /> */}
      <TouchableOpacity onPress={handler} style={{ backgroundColor: "lightblue", width: 300, alignItems: "center", marginTop: 15, padding: 10, borderRadius: 5 }}>

        <Text style={styles.appButtonText}>Login</Text>

      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    justifyContent: 'center',
  },
  input: {
    // width:200,
    backgroundColor: "white",
    padding: 10,
    borderColor: "gray",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    width: 350,
    marginTop: 10

  },
  appButtonText: {
    fontSize: 20
  }


});
