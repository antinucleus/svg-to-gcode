import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import * as NavigationBar from 'expo-navigation-bar';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider, useTheme } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { IS_ANDROID } from '@/config';

import { Routes } from './routes';

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
    height: '100%',
  },
});
