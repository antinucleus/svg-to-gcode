import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { PrivateStackRoutesParamList } from '@/routes/Private';

type AppNavigationProp = NativeStackNavigationProp<PrivateStackRoutesParamList>;

export const useAppNavigation = () => {
  return useNavigation<AppNavigationProp>();
};
