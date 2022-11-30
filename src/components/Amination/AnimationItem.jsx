import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
} from "react-native";
import React from "react";
// import StyledText from "../StyledText";
import theme from "../../theme";

const AnimatedItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.img}
        style={[styles.img, { width, resizeMode: "contain" }]}
      />
      <View>
        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.text}>{item.text}</Text>

        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    flex: 0.7,
    width: 50,
    height: 50,
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: "red",
    textAlign: "center",
  },
  title: {
    fontSize: 28,
    marginBottom: 10,
    color: "blue",
    textAlign: "center",
  },
  description: {
    color: "green",
    textAlign: "center",
    paddingHorizontal: 54,
  },
});
export default AnimatedItem;
