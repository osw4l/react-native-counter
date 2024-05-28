import { Platform, Pressable, StyleSheet, Text } from "react-native";

interface Props {
  label?: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
  return (
    <Pressable
      onPress={() => {
        onPress && onPress()
      }}
      onLongPress={() => {
        onLongPress && onLongPress()
      }}
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
    >
      <Text style={{ color: Platform.OS === 'android' ? 'white' : '#5c5fff' }}>
        { label }
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#75c21c' : 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderColor: Platform.OS === 'android' ? 'transparent' : '#5c5fff',
    borderWidth: 1,
  },
  buttonPressed: {
    backgroundColor: Platform.OS === 'android' ? '#5a9416' : 'white',
  },
});
