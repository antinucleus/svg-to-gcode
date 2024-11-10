import '../global.css';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Layout } from './components';
import { Routes } from './routes';

export const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={'bg-background flex-1'}>
        <NavigationContainer>
          <Layout>
            <Routes />
          </Layout>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
