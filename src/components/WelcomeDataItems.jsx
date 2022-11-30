import { View, Image, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import theme from "../theme";

const WelcomeDataItem = (props) => {
  return (
    <View style={styles.container}>
      <View
        style={{ flexDirection: "row", paddingBottom: 2, alignItems: "center" }}
      >
        <View>
          <Image style={styles.image} source={{ uri: props.img }} />
        </View>
        <View style={{ paddingLeft: 20 }}>
          <StyledText color="white" fontWeight="bold">
            {props.name}
          </StyledText>
          <StyledText color="white" fontWeight="bold">
            {props.description}
          </StyledText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 20,
    height: 20,
  },
  container: {
    // flexDirection: "column",
    // flexWrap: "wrap",
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
    backgroundColor: "rgba(145,145,145,0.7)",
    marginRight: 15,
    marginBottom: 15,
  },
});

export default WelcomeDataItem;
