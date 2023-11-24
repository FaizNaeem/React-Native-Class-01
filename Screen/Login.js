import { Button, StyleSheet, Text, TextInput, View ,TouchableOpacity, LinearGradient} from 'react-native';

export default function Login({navigation}) {
  const handler = () =>{
alert("Login Suucess")

  }
  return (

    <View style={styles.container}>
      <Text style={{fontSize:30, fontFamily:"serif"}}>Login</Text>
         <TextInput
        style={styles.input}
        placeholder='Enter Email'
        keyboardType='email-address'
       
      />
         <TextInput
        style={styles.input}
        placeholder='Enter Password'
        keyboardType='visible-password'
       
      />
      {/* <Button
        title='Login'
        onPress={() => navigation.navigate('Home')}
      /> */}
        <TouchableOpacity onPress={handler} style={{backgroundColor:"lightblue", width:300,alignItems:"center", marginTop:15,padding:10,borderRadius:5}}>
  
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
  input :{
  // width:200,
   backgroundColor:"white",
   padding:10,
   borderColor:"gray",
   borderStyle:"solid",
   borderWidth:1,
   borderRadius:5,
   width:350,
   marginTop:10
  
  },
  appButtonText:{
    fontSize:20
  }


});
