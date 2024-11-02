import { Surface, Title } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export const ImagePicker = () => {
  return (
    <Surface style={styles.container}>
      <Title>Select Image</Title>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
