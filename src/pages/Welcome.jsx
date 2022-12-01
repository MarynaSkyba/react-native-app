import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import StyledText from "../components/StyledText";
import WelcomeMain from "../components/WelcomeMain.jsx";
import WelcomeInfo from "../components/WelcomeInfo";
import WelcomeOffers from "../components/WelcomeOffers";
import NavigationBar from "../components/NavigationBar";
import theme from "../theme";

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
      <View style={styles.container}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <StyledText fontWeight="bold" style={{ fontSize: 20 }}>
            Buenos dias,
          </StyledText>
          <StyledText style={styles.name}>{repositories.name} !</StyledText>
        </View>
        <WelcomeMain data={repositories} />
        <WelcomeInfo />
        <WelcomeOffers />
      </View>
      <View>
        <NavigationBar />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  name: {
    color: theme.colors.textWarn,
    fontSize: 20,
    marginLeft: 10,
  },
});

export default Welcome;
