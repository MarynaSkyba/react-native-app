import {
  View,
  StyleSheet,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import StyledButton from "./StyledButton";
import StyledText from "./StyledText";
import { Link } from "react-router-native";
import AppBar from "./AppBar";
import theme from "../theme";
import Google from "../../assets/google.png";
import Person from "../../assets/user.png";
import Heart from "../../assets/heart-b.png";
import { Button } from "react-native-paper";
import AnimatedHome from "./AnimatedHome";

const Home = () => {
  // const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {/* <AnimatedHome style={{ flex: 0.5 }} /> */}
      <View style={styles.container}>
        <StyledText fontSize="subheading" style={styles.heading}>
          Bienvenido a Senniors familias,
        </StyledText>
        <StyledText
          fontSize="subheading"
          fontWeight="bold"
          style={styles.heading}
        >
          el complemento perfecto del Homecare
        </StyledText>
        <StyledText style={styles.textGrey}>
          Nuestra aplicacion te ayudara a saber como estan tus seres queridos en
          tiempo real.
        </StyledText>
      </View>
      <View>
        <View style={styles.button}>
          <Image source={Heart} style={styles.img} />
          <StyledText style={styles.text}>Acceder con Senniors ID</StyledText>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 8,
            marginBottom: 15,
          }}
        >
          <View style={styles.divider} />
          <View>
            <StyledText style={styles.dividerText}>O</StyledText>
          </View>
          <View style={styles.divider} />
        </View>

        <View style={styles.button}>
          <Image source={Google} style={styles.img} />
          <StyledText style={styles.text}>Continuar con Google</StyledText>
        </View>

        {/* <Button
          icon="google"
          mode="contained"
          color="white"
          style={styles.button}
          uppercase="false"
          onPress={() => console.log("Pressed")}
        >
          Continuar con Google
        </Button> */}
        {/* <Link to="/signin"> */}
        {/* <Button
            icon="account-circle-outline"
            mode="contained"
            color="white"
            style={styles.button}
            uppercase="false"
            onPress={() => console.log("Pressed")}
          >
            <StyledText style={{}}>Crear una cuenta</StyledText>
          </Button>
        </Link> */}

        <Link to="/signin">
          <View style={styles.button}>
            <Image source={Person} style={styles.img} />
            <StyledText style={styles.text}>Crear una cuenta</StyledText>
          </View>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 40,
    // paddingRight: 40,
  },
  heading: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 40,
  },
  textGrey: {
    color: theme.colors.borderColor,
    fontSize: 18,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme.colors.borderColor,
  },
  dividerText: {
    width: 40,
    textAlign: "center",
    color: theme.colors.borderColor,
  },
  button: {
    borderRadius: 8,
    borderWidth: 1,
    alignContent: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 15,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeight.normal,
    backgroundColor: theme.colors.white,
    color: theme.colors.primary,
    borderColor: "#B2B5C1",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: theme.fontSizes.body,
    alignSelf: "center",
  },
  img: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});

export default Home;
