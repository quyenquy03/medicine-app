import IMAGES from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import HomeAddPresciptionStyles from "./HomeAddPrescription.style";

const HomeAddPrescription = () => {
  const router = useRouter();
  const handleGoToAddPrescriptionPage = () => {
    router.push("/(tabs)/home/add-prescription");
  };
  return (
    <View style={HomeAddPresciptionStyles.container}>
      <Text style={HomeAddPresciptionStyles.text}>Today</Text>
      <Pressable onPress={handleGoToAddPrescriptionPage} style={HomeAddPresciptionStyles.buttonAdd}>
        <Image style={HomeAddPresciptionStyles.plusImage} source={IMAGES.icons.iconPlus} resizeMode='contain' />
      </Pressable>
    </View>
  );
};

export default HomeAddPrescription;
