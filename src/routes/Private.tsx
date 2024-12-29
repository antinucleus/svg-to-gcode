import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { ToggleTheme } from '@/components';
import { GcodeSetupScreen } from '@/features/gcodeGenerator/screens';

export type PrivateStackRoutesParamList = {
  SelectImage: undefined;
};

const Stack = createNativeStackNavigator<PrivateStackRoutesParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: true,
  title: '',
  headerRight: () => <ToggleTheme />,
};

export const Private = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SelectImage" component={GcodeSetupScreen} />
    </Stack.Navigator>
  );
};
