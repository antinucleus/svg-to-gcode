import React from 'react';
import { View } from 'react-native';

import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const MoreSettings = () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const [checked, setChecked] = React.useState(false);

  return (
    <View className="flex-1 justify-center items-center">
      <View className="justify-center items-center p-6 gap-12">
        <ToggleGroup value={value} onValueChange={setValue} type="single">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Text>Test</Text>
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Text>Test</Text>
          </ToggleGroupItem>
        </ToggleGroup>
      </View>

      <View className="flex-row items-center gap-2">
        <Switch checked={checked} onCheckedChange={setChecked} nativeID="airplane-mode" />
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}>
          Line Numbering
        </Label>
      </View>
    </View>
  );
};
