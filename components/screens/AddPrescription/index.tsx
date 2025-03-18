import DatePickerCustom from "@/components/ui/DatePicker";
import InputCustom from "@/components/ui/Input";
import StackHeader from "@/components/ui/StackHeader";
import COLORS from "@/constants/color";
import FONTS from "@/constants/fonts";
import IMAGES from "@/constants/images";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import AddPrescriptionStyles from "./AddPrescription.style";
import ModalSaveMedicine from "./components/ModalSaveMedicine";

const AddPrescriptionScreen = () => {
  const [date, setDate] = React.useState(new Date());
  const [visible, setVisible] = React.useState(true);

  const handleOpenModalSaveMedicine = () => {
    setVisible(true);
  };
  return (
    <View style={AddPrescriptionStyles.container}>
      <StackHeader showBackButton title='Thêm mới đơn thuốc' />
      <View style={AddPrescriptionStyles.formBox}>
        <View style={AddPrescriptionStyles.formItem}>
          <View style={AddPrescriptionStyles.formItemLabel}>
            <Text style={AddPrescriptionStyles.textLabel}>Tên đơn thuốc</Text>
          </View>
          <View style={AddPrescriptionStyles.formItemInputBox}>
            <InputCustom
              placeholderTextColor={COLORS.placeHoderTextColor}
              style={{ color: COLORS.secondary, fontSize: 16, fontFamily: FONTS.MERIENDA_MEDIUM }}
              iconLeft={<FontAwesome name='envelope-o' size={24} color={COLORS.secondary} />}
              placeholder='Nhập tên đơn thuốc ...'
            />
          </View>
        </View>
        <View style={AddPrescriptionStyles.flexRow}>
          <View style={AddPrescriptionStyles.flexCol}>
            <View style={AddPrescriptionStyles.formItem}>
              <View style={AddPrescriptionStyles.formItemLabel}>
                <Text style={AddPrescriptionStyles.textLabel}>Ngày bắt đầu - kết thúc</Text>
              </View>
              <View>
                <DatePickerCustom
                  leftIcon={<FontAwesome name='calendar' size={20} color={COLORS.secondary} />}
                  date={date}
                  setDate={setDate}
                  selectedTextStyle={{ color: COLORS.secondary, fontFamily: FONTS.MERIENDA_MEDIUM }}
                />
              </View>
              <View style={{ marginTop: 5 }}>
                <DatePickerCustom
                  leftIcon={<FontAwesome name='calendar' size={20} color={COLORS.secondary} />}
                  date={date}
                  setDate={setDate}
                  selectedTextStyle={{ color: COLORS.secondary, fontFamily: FONTS.MERIENDA_MEDIUM }}
                />
              </View>
            </View>
          </View>
          <View style={AddPrescriptionStyles.flexCol}>
            <View style={AddPrescriptionStyles.formItem}>
              <View style={AddPrescriptionStyles.imageBox}>
                <View style={AddPrescriptionStyles.chooseImageBox}></View>
              </View>
            </View>
          </View>
        </View>
        {/* MEDICINE BOX */}
        <View style={AddPrescriptionStyles.medicineBox}>
          <View style={AddPrescriptionStyles.medicineHeader}>
            <Text style={AddPrescriptionStyles.medicineHeaderText}>Danh sách thuốc trong đơn</Text>
          </View>
          {/* <View style={AddPrescriptionStyles.medicineList}></View> */}
          <View style={AddPrescriptionStyles.emptyMedicineBox}>
            <Text style={AddPrescriptionStyles.emptyMedicineText}>
              Chưa có đơn thuốc nào! {"\n"}
              Bấm vào nút <Text style={{ color: COLORS.primary, fontSize: 25 }}>+</Text> để thêm mới
            </Text>
            <Pressable onPress={handleOpenModalSaveMedicine} style={AddPrescriptionStyles.buttonAdd}>
              <Image style={AddPrescriptionStyles.plusImage} source={IMAGES.icons.iconPlus} resizeMode='contain' />
            </Pressable>
          </View>
        </View>
      </View>
      {/* MODAL BOX */}
      <View>
        <ModalSaveMedicine visible={visible} setVisible={setVisible} />
      </View>
    </View>
  );
};

export default AddPrescriptionScreen;
