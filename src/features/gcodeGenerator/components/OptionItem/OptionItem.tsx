import React, { ReactNode } from 'react';
import { View } from 'react-native';

import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

type Props = {
  title: string;
  last?: boolean;
  children: ReactNode;
};

export const OptionItem = ({ title, last, children }: Props) => {
  return (
    <>
      <View className="flex-row items-center justify-between">
        <Label className="text-lg">{title}</Label>
        {children}
      </View>
      {!last && <Separator orientation="horizontal" />}
    </>
  );
};
