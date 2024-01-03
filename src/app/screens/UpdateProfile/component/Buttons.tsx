import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../../../utils/theme/theme';
interface ButtonsProps {
  isEditMode: boolean;
  onSaveChange: () => void;
  onLogout: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ isEditMode, onSaveChange, onLogout }) => {
  return (
    <>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onSaveChange}>
          <Text style={styles.buttonText}>{isEditMode ? 'Save Changes' : 'Edit Profile'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
    gap: 20,
  },
  button: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: theme.colors.primary[700],
  },
  buttonText: {
    color: '#fff',
  },
});
