import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import * as NavigationBar from 'expo-navigation-bar';

import { Routes } from './routes';
import { IS_ANDROID } from '@/config';
import { PaperProvider, useTheme } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';

if (IS_ANDROID) {
  NavigationBar.setPositionAsync('absolute');
  NavigationBar.setBackgroundColorAsync('transparent');
}

export const App = () => {
  const theme = useTheme();
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.root}>
          <PaperProvider>
            <StatusBar style={theme.dark ? 'light' : 'dark'} />
            <Routes />
          </PaperProvider>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
