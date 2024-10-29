import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Routes } from './routes';

export const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.root}>
        <Routes />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
