import React from "react";
import { View } from "react-native";
import HomeAddPrescription from "./HomeAddPrescription";
import HomeCalendar from "./HomeCalendar";
import HomeHeader from "./HomeHeader";
import HomeListPrecription from "./HomeListPrecription";

const HomeScreen = () => {
  return (
    <View>
      <HomeCalendar />
      <HomeHeader />
      <HomeAddPrescription />
      <HomeListPrecription />
      {/* <HomeBanner /> */}
      {/* <HomeAbout /> */}
      {/* <HomeFeedback /> */}
      {/* <HomeEvaluate /> */}
    </View>
  );
};

export default HomeScreen;
