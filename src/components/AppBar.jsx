import { View, Text, StyleSheet, Image } from "react-native";
import { Link, useLocation } from "react-router-native";
import React from "react";
import Constants from "expo-constants";
import Back from "../../assets/back.png";
import StyledText from "./StyledText";
import theme from "../theme";

const AppBar = ({ signin }) => {
  const { pathname } = useLocation();
  const createAcount = pathname === "/signin";

  return createAcount ? (
    <View>
      <View style={styles.containerSignin}>
        <View>
          <Link to="/">
            <Image source={Back} style={styles.img} />
          </Link>
        </View>

        <View>
          <StyledText style={{ textAlign: "center", fontSize: 14 }}>
            Crear una cuenta
          </StyledText>
        </View>
        <View></View>
      </View>
      <View style={styles.separator} />
    </View>
  ) : (
    <View style={styles.container}>
      <Link to="/">
        <StyledText fontSize="subheading" fontWeight="bold" style={styles.text}>
          Senniors
        </StyledText>
      </Link>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
  },
  separator: {
    // marginVertical: 8,
    borderBottomColor: theme.colors.borderColor,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  text: {
    fontWeight: "900",
  },
  img: {
    width: 10,
    height: 10,
    // marginRight: 100,
  },
  containerSignin: {
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 13,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default AppBar;
