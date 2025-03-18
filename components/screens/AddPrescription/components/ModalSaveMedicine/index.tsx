import ModalCustom from "@/components/ui/Modal";
import React from "react";
import { Text, View } from "react-native";
import ModalSaveMedicineStyles from "./ModalSaveMedicine.style";

interface ModalSaveMedicineProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
}

const ModalSaveMedicine = ({ visible, setVisible }: ModalSaveMedicineProps) => {
  return (
    <ModalCustom visible={visible} setVisible={setVisible}>
      <View style={ModalSaveMedicineStyles.container}>
        <Text>Modal</Text>
      </View>
    </ModalCustom>
  );
};

export default ModalSaveMedicine;
