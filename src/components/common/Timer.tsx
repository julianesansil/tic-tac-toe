import React, { useRef, useState, useEffect } from 'react';
import Typography, { TypographyProps } from './Typography';

interface TimerProps extends Omit<TypographyProps, 'children'> {
  isActive?: boolean;
}

const Timer = (props: TimerProps): React.ReactElement => {
  const { isActive, ...typographyProps } = props;
  const [hours, setHours] = useState<string>('00');
  const [minutes, setMinutes] = useState<string>('00');
  const [seconds, setSeconds] = useState<string>('00');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      let counter = 0;

      intervalRef.current = setInterval(() => {
        counter += 1;

        const hourCounter = Math.floor(counter / 60);
        const minuteCounter = Math.floor(counter / 60);
        const secondCounter = counter % 60;

        setHours(hourCounter < 10 ? `0${hourCounter}` : String(hourCounter));
        setMinutes(
          minuteCounter < 10 ? `0${minuteCounter}` : String(minuteCounter),
        );
        setSeconds(
          secondCounter < 10 ? `0${secondCounter}` : String(secondCounter),
        );
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [isActive]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return (
    <Typography {...typographyProps}>
      {hours}:{minutes}:{seconds}
    </Typography>
  );
};

export default Timer;
