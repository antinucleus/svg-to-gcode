import { StyleSheet } from 'react-native';

import * as ExpoImagePicker from 'expo-image-picker';
import { Button, Surface } from 'react-native-paper';

import { Image } from '@/components';
import { useImagePickerStore } from '@/store';

import { checkMediaLibraryPermissions } from '../../utils';

export const ImagePicker = () => {
  const image = useImagePickerStore.use.image();
  const setImage = useImagePickerStore.use.setImage();

  const handleSelectImagePress = async () => {
    const granted = await checkMediaLibraryPermissions();

    if (!granted) return;

    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  return (
    <Surface style={styles.container}>
      <Button onPress={handleSelectImagePress}>Select an Image</Button>
      {image && <Image source={{ uri: image.uri }} style={styles.image} />}
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  image: {
    alignSelf: 'center',
    aspectRatio: 1,
    width: 200,
  },
});
