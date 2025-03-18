import IMAGES from "@/constants/images";
import { Layout, Text, ViewPager } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";
import { Image, Pressable, View } from "react-native";
import wellcomeStyle from "./Wellcome.style";

const WellcomeScreen = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const router = useRouter();
  const wellcomeTabs = useMemo(
    () => [
      {
        key: "1",
        imageSource: IMAGES.wellcome.wellcome5,
        title: `Chào mừng bạn đến với ${"\n"} Medicin Tracker`,
        button: {
          title: "Tiếp tục",
          onPress: () => setSelectedIndex(1),
        },
        description:
          "Medicin Tracker là ứng dụng giúp bạn theo dõi lịch trình uống thuốc, nhắc nhở bạn uống thuốc đúng giờ, đúng liều lượng và theo dõi sức khoẻ của mình một cách hiệu quả.",
      },
      {
        key: "2",
        imageSource: IMAGES.wellcome.wellcome4,
        title: `Chào mừng bạn đến với ${"\n"} Medicin Tracker`,
        button: {
          title: "Tiếp tục",
          onPress: () => setSelectedIndex(2),
        },
        description:
          "Medicin Tracker là ứng dụng giúp bạn theo dõi lịch trình uống thuốc, nhắc nhở bạn uống thuốc đúng giờ, đúng liều lượng và theo dõi sức khoẻ của mình một cách hiệu quả.",
      },
      {
        key: "3",
        imageSource: IMAGES.wellcome.wellcome6,
        title: `Chào mừng bạn đến với ${"\n"} Medicin Tracker`,
        button: {
          title: "Bắt đầu",
          onPress: () => router.replace("/login"),
        },
        description:
          "Medicin Tracker là ứng dụng giúp bạn theo dõi lịch trình uống thuốc, nhắc nhở bạn uống thuốc đúng giờ, đúng liều lượng và theo dõi sức khoẻ của mình một cách hiệu quả.",
      },
    ],
    []
  );
  return (
    <View style={{ position: "relative" }}>
      <ViewPager selectedIndex={selectedIndex} onSelect={(index) => setSelectedIndex(index)}>
        {wellcomeTabs.map((tab, index) => (
          <Layout key={index} level='2' style={wellcomeStyle.tab}>
            <View style={wellcomeStyle.imageBox}>
              <Image source={tab.imageSource} style={{ width: 300, height: 400 }} resizeMode='contain' />
            </View>
            <View style={wellcomeStyle.textBox}>
              <Text style={wellcomeStyle.tabTitle}>{tab.title}</Text>
              <Text style={wellcomeStyle.tabDescription}>{tab.description}</Text>
            </View>
          </Layout>
        ))}
      </ViewPager>
      <Pressable style={wellcomeStyle.tabButton} onPress={wellcomeTabs[selectedIndex]?.button?.onPress}>
        <Text style={wellcomeStyle.tabButtonText}>{wellcomeTabs[selectedIndex]?.button?.title}</Text>
      </Pressable>
      <Pressable style={wellcomeStyle.skipButton} onPress={() => router.replace("/login")}>
        <Text style={wellcomeStyle.skipButtonText}>Bỏ qua</Text>
      </Pressable>
    </View>
  );
};

export default WellcomeScreen;
