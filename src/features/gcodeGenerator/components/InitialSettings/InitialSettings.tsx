import React, { useEffect } from 'react';
import { View } from 'react-native';

import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import { useGcodeSettingsStore, useStepStore } from '../../store';
import { PageInfo } from '../PageInfo';

export const InitialSettings = () => {
  const activeStep = useStepStore.use.activeStep();
  const setSteps = useStepStore.use.setSteps();
  const height = useGcodeSettingsStore.use.height();
  const width = useGcodeSettingsStore.use.width();
  const setGcodeSettings = useGcodeSettingsStore.use.setGcodeSettings();

  useEffect(() => {
    setSteps({ [activeStep]: !!height || !!width });
  }, [activeStep, height, setSteps, width]);

  const handleHeightTextChange = (value: string) => {
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setGcodeSettings({ height: value.trim() });
  };

  const handleWidthTextChange = (value: string) => {
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setGcodeSettings({ width: value.trim() });
  };

  return (
    <View className="flex-1 p-2">
      <PageInfo
        title="Initial Settings"
        description={`Height and width value of the bed. You can supply both values.
If you supply one value, other one will be calculated according to the aspect ratio of svg image.`}
      />

      <Separator className="mt-5" orientation="horizontal" />

      <View className="flex-1 flex-row gap-5 items-center justify-center">
        <Input
          className="px-8 font-extrabold min-w-36 text-center"
          keyboardType="numeric"
          maxLength={5}
          value={height}
          placeholder="Height"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          onChangeText={handleHeightTextChange}
        />

        <Input
          className="px-8 font-extrabold min-w-36 text-center"
          keyboardType="numeric"
          maxLength={5}
          value={width}
          placeholder="Width"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          onChangeText={handleWidthTextChange}
        />
      </View>
    </View>
  );
};
