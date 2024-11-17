import React from 'react';
import { View } from 'react-native';

import { Text } from '@/components/ui/text';
type Props = {
  description: string;
  title: string;
};

export const PageInfo = ({ description, title }: Props) => {
  return (
    <View>
      <Text className="font-medium leading-none native:text-xl">{title} </Text>
      <Text className="text-sm text-muted-foreground mt-2">{description}</Text>
    </View>
  );
};
