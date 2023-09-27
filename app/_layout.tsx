import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { Text, useColorScheme } from "react-native";
import Menu from "../screens/Menu";
import Layout from "../components/Layout.tsx";
import RootNavigator from "../navigations";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "index",
};

const RootLayoutNav = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      {/* <Stack> */}
      {/* <Stack.Screen
          name="index"
          options={{
            header: () => (
              <Layout>
                <Menu />
              </Layout>
            ),
          }}
        /> */}
      {/* <Stack.Screen
          name="index"
          options={{
            header: () => (
              <Layout>
                <Menu />
              </Layout>
            ),
          }}
        /> */}
      {/* </Stack> */}
       <Layout>
          <RootNavigator />
      </Layout>
    </ThemeProvider>
  );
};

export default RootLayoutNav;
