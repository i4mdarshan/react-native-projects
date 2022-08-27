import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")

  return (
    <View>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Your Name"
            placeholderTextColor={'grey'}
            onChangeText={(newVal) => setName(newVal)}
            value={name}
        />

        <TextInput 
            style={styles.input} 
            textContentType={'newPassword'}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter Password"
            placeholderTextColor={'grey'}
            onChangeText={(newVal) => setPassword(newVal)}
            value={password}
        />
        { password.length != "" && password.length < 4 ? <Text style={styles.passwordError}>Pasword must be greater than 5 characters.</Text> : null}

        <Text style={styles.text}>Your Name is : {name}</Text>
        
    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        margin: 15,
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 15,
        padding: 10,

    },
    text:{
        color: 'green',
        margin: 20,
        fontSize: 24,

    },
    passwordError:{
        color: 'red',
        marginLeft: 15,
    }    
});

export default TextScreen