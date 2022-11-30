import {
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";

import StyledText from "../components/StyledText";
import WelcomeMain from "../components/WelcomeMain.jsx";
import WelcomeInfo from "../components/WelcomeInfo";
import WelcomeOffers from "../components/WelcomeOffers";
import NavigationBar from "../components/NavigationBar";

const Welcome = () => {
  const [repositories, setRepositories] = useState([]);

  const fetchRepositories = async () => {
    const response = await fetch("https://api.agify.io?name=Claudia");
    const json = await response.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return (
    <NavigationContainer>
      <View>
        <View style={{ flexDirection: "row" }}>
          <StyledText fontWeight="bold" style={{ fontSize: 14 }}>
            Buenos dias,
          </StyledText>
          <StyledText>{repositories.name}</StyledText>
          {/* <LinearGradient
          colors={["#4c669f", "#3b5998", "#192f6a"]}
          style={styles.background}
        >
          <Text style={styles.text}>Claudia</Text>
        </LinearGradient> */}
        </View>
        <WelcomeMain data={repositories} />
        <WelcomeInfo />
        <WelcomeOffers />
      </View>
      <NavigationBar />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Welcome;
