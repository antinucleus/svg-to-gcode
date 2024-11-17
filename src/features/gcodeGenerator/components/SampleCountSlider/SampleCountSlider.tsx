import React from 'react';
import { StyleSheet } from 'react-native';

import Slider from '@react-native-community/slider';

import { useGcodeSettingsStore } from '../../store';

export const SampleCountSlider = () => {
  const setGcodeSettings = useGcodeSettingsStore.use.setGcodeSettings();

  const handleValueChange = (value: number) => {
    setGcodeSettings({ sampleCount: value });
  };

  return (
    <Slider
      style={styles.slider}
      step={1}
      onValueChange={handleValueChange}
      minimumValue={0}
      maximumValue={100}
      minimumTrackTintColor="#beffde"
      maximumTrackTintColor="gray"
      thumbTintColor="gray"
    />
  );
};

const styles = StyleSheet.create({
  slider: {
    width: 100,
  },
});
