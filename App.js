import { StyleSheet, Text, View } from "react-native";
import { NativeRouter } from "react-router-native";
import Main from "./src/components/Main";
import NavigationBar from "./src/components/NavigationBar";
import theme from "./src/theme";
import { useFonts } from "expo-font";
import AnimationScreen from "./src/screen/AnimationScreen";
// import AppLoading from "expo-app-loading";

import { Epilogue_900Black } from "@expo-google-fonts/epilogue";

export default function App() {
  const [fontsLoaded] = useFonts({
    Epilogue: require("./assets/fonts/Epilogue.ttf"),
  });

  return (
    <>
      <NativeRouter>
        <View style={styles.container}>
          <Main />
          {/* <AnimationScreen /> */}
        </View>
      </NativeRouter>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
