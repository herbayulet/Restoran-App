import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { Text, useColorScheme } from 'react-native';
import Menu from '../screens/Menu';


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

const RootLayoutNav = () => {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Text>Herbayu</Text>
        <Stack.Screen name="index" options={{ header: () => <Menu /> }} />
      </Stack>
    </ThemeProvider>
  );
}
