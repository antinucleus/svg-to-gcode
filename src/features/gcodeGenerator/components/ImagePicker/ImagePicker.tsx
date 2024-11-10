import { View } from 'react-native';

import * as ExpoImagePicker from 'expo-image-picker';

import { Image } from '@/components';
import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';
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
    <View className="items-center justify-center p-10">
      <View className="rounded-sm my-10">
        {image && <Image source={{ uri: image.uri }} className="w-full aspect-square rounded-md" />}
      </View>
      <Button onPress={handleSelectImagePress} variant="outline">
        <Text>{image ? 'Change Image' : 'Select an Image'}</Text>
      </Button>
    </View>
  );
};
