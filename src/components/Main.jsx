import { View, Text } from "react-native";
import React, { useState } from "react";
import { Route, Routes } from "react-router-native";
import AppBar from "./AppBar";
import SignIn from "../pages/SignIn";
import Home from "./Home";
import Welcome from "../pages/Welcome";

const Main = () => {
  // const [inputName, setInputName] = useState([]);
  // console.log("inputName", inputName);
  // const formSubmit = (name) => {
  //   setInputName(name);
  // };

  return (
    <View>
      <AppBar />
      <Routes>
        <Route path="/bienvenido" exact element={<Welcome />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </View>
  );
};

export default Main;

//change welcome =  home
