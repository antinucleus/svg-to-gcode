import { StyleSheet, View } from 'react-native';

import { Button } from '@/components/ui/button';
import { Text } from '@/components/ui/text';

import { ImagePicker, InitialSettings, MoreSettings } from '../components/';
import { useStepStore } from '../store';

export const SelectImageScreen = () => {
  const steps = useStepStore.use.steps();
  const activeStep = useStepStore.use.activeStep();
  const setActiveStep = useStepStore.use.setActiveStep();

  const handleNextPress = () => {
    setActiveStep(activeStep + 1);
  };
  const handlePreviousPress = () => {
    setActiveStep(activeStep - 1);
  };

  const isNextButtonActive = () => {
    return steps[activeStep];
  };

  return (
    <View className="flex-1">
      {activeStep === 0 && <ImagePicker />}
      {activeStep === 1 && <InitialSettings />}
      {activeStep === 2 && <MoreSettings />}

      <View style={styles.buttonContainer}>
        {activeStep > 0 && (
          <Button variant="ghost" onPress={handlePreviousPress}>
            <Text>Previous</Text>
          </Button>
        )}

        {activeStep === 0 && <View />}

        <Button variant="ghost" disabled={!isNextButtonActive()} onPress={handleNextPress}>
          <Text>Next</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
