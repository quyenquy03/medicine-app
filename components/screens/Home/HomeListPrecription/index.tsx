import COLORS from "@/constants/color";
import IMAGES from "@/constants/images";
import React from "react";
import { Image, Text, View } from "react-native";
import HomeListPrecriptionStyles from "./HomeListPrecription.style";

const HomeListPrecription = () => {
  return (
    <View style={HomeListPrecriptionStyles.container}>
      <View style={HomeListPrecriptionStyles.emptyBox}>
        <Image style={HomeListPrecriptionStyles.emptyImage} source={IMAGES.icons.iconDrawing} />
        <Text style={HomeListPrecriptionStyles.emptyText}>
          Chưa có đơn thuốc nào! {"\n"}
          Bấm vào nút <Text style={{ color: COLORS.secondary, fontSize: 25 }}>+</Text> để thêm mới
        </Text>
      </View>
    </View>
  );
};

export default HomeListPrecription;
