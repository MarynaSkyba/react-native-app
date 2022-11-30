import { View, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import StyledText from "./StyledText";
import dataIcon from "../data/dataIcon";
import theme from "../theme";

const WelcomeOffers = () => {
  return (
    <View style={{ paddingTop: 15, paddingHorizontal: 10 }}>
      <StyledText fontWeight="bold">Que mas podemos ofrecerte? </StyledText>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={dataIcon}
          numColumns={3}
          renderItem={({ item: data }) => {
            return (
              <View style={styles.container}>
                <View style={styles.imageContainer}>
                  <Image source={data.img} style={styles.image} />
                </View>
                <StyledText style={styles.text}>{data.description}</StyledText>
              </View>
            );
          }}
        />
      </View>
      <View style={{ height: 60 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 10,
  },
  imageContainer: {
    borderRadius: 4,
    borderColor: theme.colors.borderColor,
    borderWidth: 1,
    backgroundColor: theme.colors.white,
    // alignItems: "flex-start",
    paddingHorizontal: 33,
    paddingVertical: 20,
  },
  image: {
    width: 25,
    height: 25,
  },
  text: {
    marginTop: 5,
  },
});

export default WelcomeOffers;
