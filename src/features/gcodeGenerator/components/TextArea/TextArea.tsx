import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import { Surface, Text, TextInput } from 'react-native-paper';

export const TextArea = () => {
  const [text, setText] = useState('');

  const handleTextChange = (value: string) => {
    console.log({ value });
    const valueToNum = Number(value);

    if (isNaN(valueToNum)) return;

    setText(value);
  };
  return (
    <Surface style={styles.container}>
      <Text variant="titleSmall">Enter value</Text>
      <TextInput
        label="Value"
        keyboardType="numeric"
        mode="outlined"
        value={text}
        placeholder="Enter value"
        onChangeText={handleTextChange}
      />
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 10,
  },
});
