import { Platform } from 'react-native';

import * as NavigationBar from 'expo-navigation-bar';

import { APP_THEME } from '@/config';

export const setAndroidNavigationBar = async (theme: 'light' | 'dark') => {
  if (Platform.OS !== 'android') return;

  await NavigationBar.setButtonStyleAsync(theme === 'dark' ? 'light' : 'dark');
  await NavigationBar.setBackgroundColorAsync(
    theme === 'dark' ? APP_THEME.dark.background : APP_THEME.light.background,
  );
};
