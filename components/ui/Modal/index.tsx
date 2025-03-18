import { Modal } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import ModalCustomStyles from "./Modal.style";

interface ModalCustomProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  children: React.ReactNode;
}

const ModalCustom = ({ visible, setVisible, children }: ModalCustomProps) => {
  return (
    <View style={ModalCustomStyles.container}>
      <Modal visible={visible} backdropStyle={ModalCustomStyles.backdrop} onBackdropPress={() => setVisible(false)}>
        {children}
      </Modal>
    </View>
  );
};

export default ModalCustom;
