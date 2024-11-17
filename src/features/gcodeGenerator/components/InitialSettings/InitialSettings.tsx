import React, { useState } from 'react';
import { View } from 'react-native';

import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

import { PageInfo } from '../PageInfo';

export const InitialSettings = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setText(value);
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
          className="px-8 font-extrabold min-w-32 text-center"
          keyboardType="numeric"
          value={text}
          placeholder="Height"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          onChangeText={handleTextChange}
        />

        <Input
          className="px-8 font-extrabold min-w-32 text-center"
          keyboardType="numeric"
          value={text}
          placeholder="Width"
          aria-labelledby="inputLabel"
          aria-errormessage="inputError"
          onChangeText={handleTextChange}
        />
      </View>
    </View>
  );
};
