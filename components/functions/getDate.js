function getDayInfo(date) {
  const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("ru-RU", options);
}
