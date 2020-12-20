import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./components/navigation";

const getFonts = () =>
  Font.loadAsync({
    arizonia: require("./assets/fonts/Arizonia-Regular.ttf"),
    libreBaskerville: require("./assets/fonts/LibreBaskerville-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}
