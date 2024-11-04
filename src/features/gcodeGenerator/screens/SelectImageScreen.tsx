import { StyleSheet, View } from 'react-native';

import { Button, Surface } from 'react-native-paper';

import { ImagePicker, TextArea } from '../components/';
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
    <Surface style={styles.container}>
      {activeStep === 0 && <ImagePicker />}
      {activeStep === 1 && <TextArea />}

      <View style={styles.buttonContainer}>
        {activeStep > 0 && <Button onPress={handlePreviousPress}>Previous</Button>}
        {activeStep === 0 && <View />}

        <Button disabled={!isNextButtonActive()} onPress={handleNextPress}>
          Next
        </Button>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  buttonContainer: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    width: '100%',
  },
});
