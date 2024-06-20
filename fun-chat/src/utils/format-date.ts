const formatTwoDigits = (value: number): string =>
  value < 10 ? `0${value}` : value.toString();

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);
  const year = formatTwoDigits(date.getFullYear());
  const month = formatTwoDigits(date.getMonth() + 1);
  const day = formatTwoDigits(date.getDate());
  const hours = formatTwoDigits(date.getHours());
  const minutes = formatTwoDigits(date.getMinutes());
  const seconds = formatTwoDigits(date.getSeconds());
  return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
};
