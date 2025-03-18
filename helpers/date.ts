export const getWeekName = () => {
  return ["Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7", "CN"];
};

export const getNextWeeks = (n: number) => {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0: Chủ nhật, 1: Thứ Hai, ..., 6: Thứ Bảy

  // Xác định ngày đầu tuần (Thứ Hai)
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - (dayOfWeek === 0 ? 6 : dayOfWeek - 1));

  // Dịch chuyển đến tuần n tiếp theo
  startOfWeek.setDate(startOfWeek.getDate() + n * 7);

  const weekDays = [];
  const weekNames = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

  for (let i = 0; i < 7; i++) {
    const day = new Date(startOfWeek);
    day.setDate(startOfWeek.getDate() + i);

    weekDays.push({
      date:
        day.getDate().toString().padStart(2, "0") +
        "/" +
        (day.getMonth() + 1).toString().padStart(2, "0") +
        "/" +
        day.getFullYear(),
      day: day.getDate(),
      month: day.getMonth() + 1, // Tháng trong JS bắt đầu từ 0
      year: day.getFullYear(),
      weekday: weekNames[day.getDay()],
    });
  }

  return weekDays;
};

export const getNextMonths = (n: number) => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1; // Lấy tháng hiện tại (JS tháng bắt đầu từ 0)

  // Xác định tháng cần lấy
  const targetDate = new Date(year, month - 1 + n, 1);
  const targetYear = targetDate.getFullYear();
  const targetMonth = targetDate.getMonth() + 1;

  // Lấy ngày đầu tiên của tháng và tìm Thứ Hai gần nhất
  let startDate = new Date(targetYear, targetMonth - 1, 1);
  while (startDate.getDay() !== 1) {
    // 1 là Thứ Hai
    startDate.setDate(startDate.getDate() - 1);
  }

  // Lấy ngày cuối cùng của tháng và tìm Chủ Nhật gần nhất
  let endDate = new Date(targetYear, targetMonth, 0); // Ngày cuối tháng
  while (endDate.getDay() !== 0) {
    // 0 là Chủ Nhật
    endDate.setDate(endDate.getDate() + 1);
  }

  // Mảng thứ theo thứ tự mong muốn (bắt đầu từ Thứ 2)
  const weekNames = getWeekName();

  const daysArray = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    // Đổi `getDay()` của JS (bắt đầu từ Chủ Nhật) sang thứ tự mới (bắt đầu từ Thứ 2)
    const adjustedDayIndex = (currentDate.getDay() + 6) % 7; // Đưa Chủ Nhật (0) về cuối
    daysArray.push({
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      weekday: weekNames[adjustedDayIndex],
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysArray;
};
