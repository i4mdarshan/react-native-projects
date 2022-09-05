import React, { useState } from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Text, Input, Card } from "react-native-elements";
import Spacer from "./Spacer";
import { assets } from "../constants";

const AuthForm = ({ cardTitle, onSubmit, buttonTitle, navText, navClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Card containerStyle={styles.card}>
        <Spacer>
          <Image
            source={assets.logo}
            resizeMode='contain'
            style={{
              width: "100%",
              height: 250,
            }}
          />
          <Card.Title style={styles.header} h3>
            {cardTitle}
          </Card.Title>
        </Spacer>
        <Card.Divider />
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          label='Email'
          placeholder='Enter Your Email'
          onChangeText={setEmail}
          value={email}
          placeholderTextColor='#d3d3d3'
        />
        <Input
          autoCapitalize='none'
          autoCorrect={false}
          label='Password'
          placeholder='Enter Your Password'
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor='#d3d3d3'
        />
        <Button style={styles.button} title={buttonTitle} onPress={onSubmit} />
        <TouchableOpacity onPress={navClick}>
          <Text style={styles.loginButton}>{navText}</Text>
        </TouchableOpacity>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    textAlign: "left",
    marginTop: 20,
  },
  card: {
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    borderRadius: 10,
  },
  loginButton: {
    color: "#2089dc",
    marginTop: 10,
    marginBottom: 20,
  },
});

export default AuthForm;
