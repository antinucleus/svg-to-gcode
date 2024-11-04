import { StyleSheet, View } from 'react-native';

import * as ExpoImagePicker from 'expo-image-picker';
import { Button, Surface } from 'react-native-paper';

import { Image } from '@/components';
import { useImagePickerStore } from '@/store';

import { useStepStore } from '../../store';
import { checkMediaLibraryPermissions } from '../../utils';

export const ImagePicker = () => {
  const image = useImagePickerStore.use.image();
  const setImage = useImagePickerStore.use.setImage();
  const setSteps = useStepStore.use.setSteps();
  const activeStep = useStepStore.use.activeStep();

  const handleSelectImagePress = async () => {
    const granted = await checkMediaLibraryPermissions();

    if (!granted) return;

    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (result.canceled) return;

    // if (result.assets[0].uri.split('.').pop()?.toLowerCase() === 'svg') {
    setImage(result.assets[0]);
    setSteps({ [activeStep]: true });
    // } else {
    //   console.log('handleSelectImagePress:err:', 'FILE IS NOT SVG');
    // }
  };

  return (
    <Surface style={styles.container}>
      <View style={styles.imageContainer}>
        {image && <Image source={{ uri: image.uri }} style={styles.image} />}
      </View>
      <Button theme={{ roundness: 2 }} onPress={handleSelectImagePress} mode="contained">
        {image ? 'Change Image' : 'Select an Image'}
      </Button>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    borderRadius: 5,
    marginVertical: 10,
  },
  image: {
    alignSelf: 'center',
    aspectRatio: 1,
    width: '100%',
    borderRadius: 5,
  },
});
