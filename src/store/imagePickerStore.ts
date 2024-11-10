import { ImagePickerAsset } from 'expo-image-picker';
import { create } from 'zustand';

import { createSelectors } from './storeSelector';

type Image = ImagePickerAsset | null;

type ImagePickerState = {
  image: Image;
};

type ImagePickerAction = {
  setImage: (image: Image) => void;
};

const initialValues: ImagePickerState = {
  image: null,
};

const useImagePickerStoreBase = create<ImagePickerState & ImagePickerAction>((set) => ({
  ...initialValues,
  setImage: (image: Image) => set(() => ({ image })),
}));

export const useImagePickerStore = createSelectors(useImagePickerStoreBase);
