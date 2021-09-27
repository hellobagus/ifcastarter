import { useTheme } from "@config";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getHeightDevice, getWidthDevice } from "@utils";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { DarkModeProvider } from "react-native-dark-mode";
import SplashScreen from "react-native-splash-screen";
import { Text } from "./components";
import { Images } from "./config";
import ECommerce from "./modules/e-commerce/navigation";
import Mazi from "./modules/news/navigation";
import SignIn from "@screens/SignIn";

const RootStack = createStackNavigator();

const App = () => {
  const { theme, colors } = useTheme();
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <DarkModeProvider>
      <NavigationContainer theme={theme}>
        <RootStack.Navigator headerMode="none">
          <RootStack.Screen name="SignIn" component={SignIn} />
          {/* <RootStack.Screen name="ECommerce" component={ECommerce} /> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </DarkModeProvider>
  );
};

export default App;
