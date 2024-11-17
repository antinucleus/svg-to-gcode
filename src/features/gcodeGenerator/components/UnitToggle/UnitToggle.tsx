import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

import { useGcodeSettingsStore } from '../../store';

type Unit = 'mm' | 'in';

export const UnitToggle = () => {
  const unit = useGcodeSettingsStore.use.unit();
  const setGcodeSettings = useGcodeSettingsStore.use.setGcodeSettings();

  const handleUnitChange = (value: string | undefined) => {
    if (value) {
      setGcodeSettings({ unit: value as Unit });
    }
  };

  return (
    <View className="justify-center items-center">
      <ToggleGroup value={unit as string} onValueChange={handleUnitChange} type="single">
        <ToggleGroupItem value="mm" aria-label="Toggle mm">
          <Text>mm</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="in" aria-label="Toggle in">
          <Text>in</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
};
