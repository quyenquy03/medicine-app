import AddPrescriptionScreen from "@/components/screens/AddPrescription";
import ScrollViewCustom from "@/components/ui/ScrollViewCustom";
import React from "react";

const HomeTab = () => {
  return (
    <ScrollViewCustom>
      <AddPrescriptionScreen />
    </ScrollViewCustom>
  );
};

export default HomeTab;
