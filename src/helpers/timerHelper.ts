const toHHMMSS = (totalSeconds: number): string => {
  const hourCounter = Math.floor(totalSeconds / 60);
  const minuteCounter = Math.floor(totalSeconds / 60);
  const secondCounter = totalSeconds % 60;

  const hours = hourCounter < 10 ? `0${hourCounter}` : String(hourCounter);
  const minutes =
    minuteCounter < 10 ? `0${minuteCounter}` : String(minuteCounter);
  const seconds =
    secondCounter < 10 ? `0${secondCounter}` : String(secondCounter);

  return `${hours}:${minutes}:${seconds}`;
};

export default { toHHMMSS };
