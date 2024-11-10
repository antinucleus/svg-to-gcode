import React, { useState } from 'react';
import { Text, View } from 'react-native';

import { Input } from '@/components/ui/input';

export const TextArea = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    console.log({ value });
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setText(value);
  };

  return (
    <View className="flex-1 p-10">
      <Text>Enter value</Text>
      <Input
        keyboardType="numeric"
        value={text}
        placeholder="Enter value"
        aria-labelledby="inputLabel"
        aria-errormessage="inputError"
        onChangeText={handleTextChange}
      />
    </View>
  );
};
