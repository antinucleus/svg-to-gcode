import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { SelectImageScreen } from '@/features/gcodeGenerator/screens';

export type PrivateStackRoutesParamList = {
  SelectImage: undefined;
};

const Stack = createNativeStackNavigator<PrivateStackRoutesParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

export const Private = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="SelectImage" component={SelectImageScreen} />
    </Stack.Navigator>
  );
};
