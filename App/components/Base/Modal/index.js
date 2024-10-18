import React from 'react';
import { createStyles } from './style';
import { useTheme } from '@react-navigation/native';
import View from '../View';
import Text from '../Text';
import { TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";

const CustomModal = (props) => {

  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <Modal
      transparent={true}
      isVisible={props.visible}
      // isVisible={true}
      onRequestClose={props.onRequestClose}
      animationType="slide"
      backdropColor='rgba(0,0,0,0.8)'
      onBackdropPress={props.onBackDrop}
      style={{ flex: 1,justifyContent:'center',alignItems:'center' }}
    >
      <View style={styles.modalContainer}>
        <Text style={styles.headerText}>{props.headerText}</Text>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.description}>{props.description}</Text>
        <View style={styles.buttonContainer}>
          {props?.buttons?.map((button, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.button]}
              onPress={button.onClick}
            >
              <Text style={styles.buttonText}>{button.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};


export default CustomModal;