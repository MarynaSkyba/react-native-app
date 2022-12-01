import {
  View,
  FlatList,
  StyleSheet,
  ImageBackground,
  Text,
} from "react-native";
import React from "react";
import dataList from "../data/data.js";
import StyledText from "./StyledText";
import WelcomeDataItem from "./WelcomeDataItems";
import Granny from "../image/granny.jpg";
import theme from "../theme.js";

const WelcomeMain = ({ data }) => {
  return (
    <View>
      <View style={{ borderRadius: 8 }}>
        <ImageBackground
          source={{ uri: "../image/granny.jpg" }}
          resizeMode="cover"
          style={styles.image}
        >
          <View style={styles.container}>
            <View style={styles.family}>
              <StyledText fontWeight="bold">Mama</StyledText>
            </View>
            <StyledText fontSize="subheading" fontWeight="bold" color="white">
              Antonia Lopez
            </StyledText>
            <StyledText fontSize="subheading" color="white">
              Anos:{data.age}
            </StyledText>
            <View>
              <FlatList
                data={dataList}
                numColumns={2}
                // ItemSeparatorComponent={() => <Text> </Text>}
                renderItem={({ item: data }) => <WelcomeDataItem {...data} />}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8,
    opacity: 0.9,
  },
  family: {
    backgroundColor: theme.colors.blue,
    borderRadius: 20,
    alignSelf: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 5,
    flexDirection: "row",
  },
});

export default WelcomeMain;
