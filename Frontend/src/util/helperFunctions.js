export const isAboveEighteen = (date) => {
  const currentDate = new Date();
  const selectedDate = new Date(date)
  const eighteenYearsAgo = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  return selectedDate < eighteenYearsAgo;
};
