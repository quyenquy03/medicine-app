import IMAGES from "@/constants/images";
import { getNextMonths, getNextWeeks, getWeekName } from "@/helpers/date";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React, { useMemo } from "react";
import { Image, Pressable, Text, View } from "react-native";
import HomeCalendarStyle from "./HomeCalendar.style";

const HomeCalendar = () => {
  const [week, setWeek] = React.useState(0);
  const [month, setMonth] = React.useState(0);
  const [mode, setMode] = React.useState<"full" | "less">("full");
  const listDayOfWeek = useMemo(() => {
    const listDay = getNextWeeks(week);
    return listDay;
  }, [week]);
  const listWeekNames = useMemo(() => {
    return getWeekName();
  }, []);
  const listDayOfMonth = useMemo(() => {
    const listDay = getNextMonths(month);
    return listDay;
  }, [month]);
  const handlePressNextButton = () => {
    if (mode === "less") {
      setWeek((prev) => prev + 1);
      return;
    }
    if (mode === "full") {
      setMonth((prev) => prev + 1);
      return;
    }
  };
  const handlePressPreviousButton = () => {
    if (mode === "less") {
      setWeek((prev) => prev - 1);
      return;
    }
    if (mode === "full") {
      setMonth((prev) => prev - 1);
      return;
    }
  };
  return (
    <View style={HomeCalendarStyle.container}>
      <View style={HomeCalendarStyle.header}>
        <View style={HomeCalendarStyle.titleBox}>
          <Text style={HomeCalendarStyle.titleText}>Tháng 3 năm 2025</Text>
        </View>
        <View style={HomeCalendarStyle.actionBox}>
          <Pressable onPress={handlePressPreviousButton}>
            <FontAwesome name='chevron-left' size={16} color='black' />
          </Pressable>
          <View style={HomeCalendarStyle.modeBox}>
            <Pressable
              onPress={() => setMode("less")}
              style={[HomeCalendarStyle.modeItem, mode === "less" && HomeCalendarStyle.active]}
            >
              <Image style={HomeCalendarStyle.iconCalendar} resizeMode='contain' source={IMAGES.icons.iconCalendar1} />
            </Pressable>
            <Pressable
              onPress={() => setMode("full")}
              style={[HomeCalendarStyle.modeItem, mode === "full" && HomeCalendarStyle.active]}
            >
              <Image style={HomeCalendarStyle.iconCalendar} resizeMode='contain' source={IMAGES.icons.iconCalendar2} />
            </Pressable>
          </View>
          <Pressable onPress={handlePressNextButton}>
            <FontAwesome name='chevron-right' size={16} color='black' />
          </Pressable>
        </View>
      </View>
      {mode === "less" ? (
        <View style={HomeCalendarStyle.calendar}>
          {listDayOfWeek.map((day, index) => (
            <Pressable key={index} style={[HomeCalendarStyle.calendarItem, index === 0 && HomeCalendarStyle.calendarItemActive]}>
              <Text style={[HomeCalendarStyle.traceText, index === 0 && HomeCalendarStyle.traceTextActive]}>{day.weekday}</Text>
              <Text style={[HomeCalendarStyle.dateText, index === 0 && HomeCalendarStyle.dateTextActive]}>
                {day.day}
                {day.day === 1 && <Text style={HomeCalendarStyle.monthText}>/{day.month}</Text>}
              </Text>
            </Pressable>
          ))}
        </View>
      ) : (
        <View style={HomeCalendarStyle.calendarFull}>
          <View style={HomeCalendarStyle.calendarFullHeader}>
            {listWeekNames.map((weekName, index) => (
              <Text style={HomeCalendarStyle.calendarFullHeaderItem} key={index}>
                {weekName}
              </Text>
            ))}
          </View>
          <View style={HomeCalendarStyle.calendarFullBody}>
            {listDayOfMonth.map((day, index) => (
              <View style={HomeCalendarStyle.calendarFullBodyItem} key={index}>
                <View
                  style={[
                    HomeCalendarStyle.calendarFullItemTextBox,
                    index === 0 && HomeCalendarStyle.calendarFullItemTextBoxInactive,
                  ]}
                >
                  <Text
                    style={[HomeCalendarStyle.calendarFullItemText, index === 0 && HomeCalendarStyle.calendarFullItemTextActive]}
                  >
                    {day.day}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default HomeCalendar;
