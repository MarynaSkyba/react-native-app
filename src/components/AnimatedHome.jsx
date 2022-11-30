import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Animated,
  useWindowDimensions,
} from "react-native";
import { useState, useRef } from "react";
import React from "react";
import data from "../data/dataAnimation";
import AnimatedItem from "./AnimatedItem";

const AnimatedHome = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const slidesRef = useRef(null);
  // const scrollX = useRef(new Animated.Value(0)).current;

  // const viewableItemsChanged = useRef(({ viewableItems }) => {
  //   setCurrentIndex(viewableItems[0].index);
  // }).current;

  // const viewConfig = useRef({ viewAreaCoveragePercentThresfold: 50 }).current;

  return (
    <View style={styles.container}>
      <View style={{ flex: 3 }}>
        <FlatList
          data={data}
          horizontal
          showHorizontalScrollIndicator
          pagingEnabled
          bounces={false}
          keyExtractor={(item) => item.id}
          // onScroll={Animated.event(
          //   [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          //   {
          //     useNativeDriver: false,
          //   }
          // )}
          // scrollEventThrottle={32}
          // onViewableItemsChanged={viewableItemsChanged}
          // viewabilityConfig={viewConfig}
          // ref={slidesRef}
          renderItem={({ item }) => <AnimatedItem item={item} />}
        />
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
});

export default AnimatedHome;