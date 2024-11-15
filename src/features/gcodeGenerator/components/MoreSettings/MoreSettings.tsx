import React from 'react';
import { View } from 'react-native';

import Slider from '@react-native-community/slider';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export const MoreSettings = () => {
  const [value, setValue] = React.useState<string | undefined>(undefined);
  const [checked, setChecked] = React.useState(false);
  return (
    <View className="flex-1 p-5 gap-5">
      <View>
        <Text className="font-medium leading-none native:text-xl">Extra Options</Text>
        <Text className="text-sm text-muted-foreground">Set other options</Text>
      </View>

      <View className="w-full flex-row items-center justify-between">
        <Text
          className="text-lg font-semibold"
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}>
          Unit
        </Text>
        <View className="justify-center items-center">
          <ToggleGroup value={value} onValueChange={setValue} type="single">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Text>mm</Text>
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Text>in</Text>
            </ToggleGroupItem>
          </ToggleGroup>
        </View>
      </View>

      <Separator orientation="horizontal" />

      <View className="flex-row items-center justify-between">
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}>
          Line Numbering
        </Label>
        <Switch checked={checked} onCheckedChange={setChecked} nativeID="airplane-mode" />
      </View>

      <Separator orientation="horizontal" />

      <View className="flex-row items-center justify-between">
        <Label
          nativeID="airplane-mode"
          onPress={() => {
            setChecked((prev) => !prev);
          }}>
          Fill Bed
        </Label>
        <Switch checked={checked} onCheckedChange={setChecked} nativeID="airplane-mode" />
      </View>
      <Separator orientation="horizontal" />

      <View className="flex-row items-center justify-between">
        <Label>Center X</Label>
        <Input
          className="font-extrabold min-w-24 text-center"
          keyboardType="numeric"
          // value={text}
          placeholder="X"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          // onChangeText={handleTextChange}
        />
      </View>
      <Separator orientation="horizontal" />

      <View className="flex-row items-center justify-between">
        <Text className="text-lg">Center Y</Text>
        <Input
          className=" font-extrabold min-w-24 text-center"
          keyboardType="numeric"
          // value={text}
          placeholder="Y"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          // onChangeText={handleTextChange}
        />
      </View>
      <Separator orientation="horizontal" />

      <View className="flex-row items-center justify-between">
        <Label>Sample Count</Label>
        <Slider
          style={{ width: 100 }}
          step={1}
          onSlidingComplete={(value) => console.log(value)}
          onValueChange={(value) => console.log(value)}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor="#beffde"
          maximumTrackTintColor="gray"
          thumbTintColor="gray"
        />
      </View>
    </View>
  );
};
