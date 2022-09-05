import React, { useState } from "react";
import FocusedStatusBar from "../components/FocusedStatusBar";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { Button, Text, Input, Card } from "react-native-elements";
import Spacer from "./../components/Spacer";
import { assets } from "../constants";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <FocusedStatusBar />
      <ScrollView>
        <View style={styles.container}>
          {/* <AuthForm
            cardTitle='Sign Up'
            buttonTitle='Sign Up'
            onSubmit={() => navigation.navigate("RestaurantList")}
            navText='Already have an account ? Sign In'
            navClick={() => {
              navigation.navigate("Signin");
            }}
          /> */}
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
                Sign Up
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
            <Button
              style={styles.button}
              title='Sign Up'
              onPress={() => navigation.navigate("RestaurantList")}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signin");
              }}
            >
              <Text style={styles.loginButton}>
                Already have an account ? Sign In
              </Text>
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>
    </>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
  animationTypeForReplace: "pop",
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginTop: 40,
  },
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
    marginHorizontal: 10,
  },
});

export default SignupScreen;
