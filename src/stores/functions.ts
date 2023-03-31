export function getDaysInMonth(month: number, year: number) {
  console.log(month, year);
  console.log('Date', new Date(year, month, 0).getDate());
  return new Date(year, month, 0).getDate();
}
