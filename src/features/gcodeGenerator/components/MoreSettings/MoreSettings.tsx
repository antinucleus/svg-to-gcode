import React from 'react';
import { ScrollView, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';

import { useGcodeSettingsStore } from '../../store';
import { OptionItem } from '../OptionItem';
import { PageInfo } from '../PageInfo';
import { SampleCountSlider } from '../SampleCountSlider';
import { UnitToggle } from '../UnitToggle';

export const MoreSettings = () => {
  const lineNumbering = useGcodeSettingsStore.use.lineNumbering();
  const fill = useGcodeSettingsStore.use.fill();
  const centerX = useGcodeSettingsStore.use.centerX();
  const centerY = useGcodeSettingsStore.use.centerY();
  const setGcodeSettings = useGcodeSettingsStore.use.setGcodeSettings();

  const handleLineNumberingChange = (value: boolean) => {
    setGcodeSettings({ lineNumbering: value });
  };

  const handleFillChange = (value: boolean) => {
    setGcodeSettings({ fill: value });
  };

  const handleCenterXTextChange = (value: string) => {
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setGcodeSettings({ centerX: value });
  };

  const handleCenterYTextChange = (value: string) => {
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setGcodeSettings({ centerY: value });
  };

  const handleGenerateGcodePress = () => {
    const { setGcodeSettings, ...rest } = useGcodeSettingsStore.getState();
    console.log(rest);
  };

  return (
    <View className="flex-1">
      <ScrollView contentContainerClassName="p-2 gap-5">
        <PageInfo
          title="Extra Options"
          description="Set other options. You can get info by clicking the info icon near options."
        />

        <Separator orientation="horizontal" />

        <OptionItem title="Unit">
          <UnitToggle />
        </OptionItem>

        <OptionItem title="Sample Count">
          <SampleCountSlider />
        </OptionItem>

        <OptionItem title="Line Numbering">
          <Switch
            checked={lineNumbering}
            onCheckedChange={handleLineNumberingChange}
            nativeID="airplane-mode"
          />
        </OptionItem>

        <OptionItem title="Fill Bed">
          <Switch checked={fill} onCheckedChange={handleFillChange} nativeID="airplane-mode" />
        </OptionItem>

        <OptionItem title="Center X">
          <Input
            className=" font-extrabold min-w-24 text-center"
            keyboardType="numeric"
            maxLength={5}
            value={centerX}
            placeholder="X"
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
            onChangeText={handleCenterXTextChange}
          />
        </OptionItem>

        <OptionItem title="Center Y" last>
          <Input
            className=" font-extrabold min-w-24 text-center"
            keyboardType="numeric"
            maxLength={5}
            value={centerY}
            placeholder="Y"
            aria-labelledby="inputLabel"
            aria-errormessage="inputError"
            onChangeText={handleCenterYTextChange}
          />
        </OptionItem>

        <Button onPress={handleGenerateGcodePress}>
          <Text>Generate Gcode</Text>
        </Button>
      </ScrollView>
    </View>
  );
};
