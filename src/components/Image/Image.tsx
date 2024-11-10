import { Image as ExpoImage, ImageProps } from 'expo-image';
import { cssInterop } from 'nativewind';

cssInterop(ExpoImage, { className: 'style' });

export const Image = (props: ImageProps) => {
  return <ExpoImage transition={750} {...props} />;
};
