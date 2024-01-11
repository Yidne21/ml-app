import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../../../../utils/theme/theme';
interface ButtonsProps {
  onEditProfile: () => void;
  onLogout: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onEditProfile, onLogout }) => {
  return (
    <>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={onEditProfile}>
          <Text style={styles.buttonText}>Edit Profile</Text>
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
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    gap: 20,
  },
  button: {
    backgroundColor: theme.colors.primary[500],
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
