import React, { useState } from 'react';
import { Text, 
View, 
StyleSheet, 
TextInput, 
TouchableOpacity, 
ImageBackground,
Image,
KeyboardAvoidingView,
Platform,
SafeAreaView,
Dimensions} from 'react-native';
const App = () =>{
    const [number, setNumber] = useState("");
  function checkNumber(num){
    var total = 1;
    if(num < 0 || isNaN(num) || num === undefined || num ==="" ){
      return alert("Please enter a positive number.")
    } else {
      for (var i = 2 ; i < num; i++) {
        if(num % i == 0){
            total += i
        }
    }
      if (total == num){
        alert(`${num} is a Perfect Number`)
      } else {
        alert(`${num} is not a Perfect Number`) 
      }
    } 
}
  return(
    <SafeAreaView style = {{flex:1}}>
      <View style={styles.container}>
        <Text style = {styles.text}>
         Perfect Numbers
        </Text>
        <TextInput
        style ={styles.input}
        onChangeText = {(num) => setNumber(num)}
        value = {number}
        keyboardType = "number-pad"
        autoFocus = {true}
         onSubmitEditing={() => {
              checkNumber(number);
              setNumber('');
            }}
        placeholder = "Please enter a number"
      />
      <TouchableOpacity
        onPress ={() => {checkNumber(number);setNumber("")}}
        style = {styles.button}
      >
        <Text style = {{textAlign:"center"}}>Check the Number</Text>
      </TouchableOpacity>
      <Image source={{uri:"https://images.slideplayer.com/27/9150237/slides/slide_2.jpg"}}
      style={styles.image}/>
      </View>
    </SafeAreaView>
  )
};
const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor:"#ffeeff"
      },
      text:{
        color :"#ff6090",
        margin :10,
        fontSize:25,
        fontWeight:"bold",
        textAlign:"center",
      },
      image:{
        flex:1,
        resizeMode:"contain",
        justifyContent:"center",
        alignItems:"center",
        height:Dimensions.get("window").height/4
      },
      input: {
        marginBottom: 10,
        padding: 10,
        paddingHorizontal:30,
        backgroundColor: "white",
        borderRadius:10, 
      },
      button: {
        backgroundColor:"#f8bbd0",
        padding:10,
        borderRadius:10,
        fontFamily:"Segoe UI",
        margin:10,
      },
      info:{
        width: 200,
        height:200,
        margin:10,
        borderRadius:15,
      }
      })
export default App;