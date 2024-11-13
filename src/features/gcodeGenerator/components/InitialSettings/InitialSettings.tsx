import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Input } from '@/components/ui/input';

export const InitialSettings = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    console.log({ value });
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setText(value);
  };

  return (
    <View className="flex-1 p-10 items-center justify-center">
      <Text className="font-semibold text-primary text-xl mb-16">Enter Height & Width Values</Text>

      <View className="flex-row gap-5">
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
