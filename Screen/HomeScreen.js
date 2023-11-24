import { StyleSheet, Text, View , Button} from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text style={{marginVertical:10}}>Home Screen</Text>
    <Button
      title="Go to Login"
      onPress={() => navigation.navigate('Login')}
    />
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})