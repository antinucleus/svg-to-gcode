import {
  getMediaLibraryPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
} from 'expo-image-picker';

export const checkMediaLibraryPermissions = async () => {
  const { canAskAgain, granted } = await getMediaLibraryPermissionsAsync();

  if (granted) return true;

  if (canAskAgain) {
    const result = await requestMediaLibraryPermissionsAsync();

    return result.granted;
  }

  return false;
};
