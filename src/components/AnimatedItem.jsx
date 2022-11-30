import { View, Text, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import theme from "../theme";

const AnimatedItem = ({ item }) => {
  //   const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <StyledText fontSize="subheading" style={styles.heading}>
          {item.title}
        </StyledText>
        <StyledText
          fontSize="subheading"
          fontWeight="bold"
          style={styles.heading}
        >
          {item.text}
        </StyledText>
        <StyledText style={styles.textGrey}>{item.description}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    // paddingHorizontal: 20,
    // width: "70%",
    // justifyContent: "center",
    // alignItems: "center",
    // paddingRight: 40,
  },
  wrapper: {
    marginHorizontal: 20,
  },
  heading: {
    fontSize: 30,
    letterSpacing: 2,
    lineHeight: 40,
    width: "50%",
  },
  textGrey: {
    color: theme.colors.borderColor,
    fontSize: 18,
    width: "40%",
  },
});
export default AnimatedItem;
