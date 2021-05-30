import React, { useRef, useState, useEffect } from 'react';

import TimerHelper from 'helpers/timerHelper';
import Typography, { TypographyProps } from './Typography';

interface TimerProps extends Omit<TypographyProps, 'children'> {
  isActive?: boolean;
}

const Timer = (props: TimerProps): React.ReactElement => {
  const { isActive, ...typographyProps } = props;

  const [timer, setTimer] = useState<string>('00:00:00');

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive) {
      let counter = 0;

      intervalRef.current = setInterval(() => {
        counter += 1;
        setTimer(TimerHelper.toHHMMSS(counter));
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [isActive]);

  useEffect(() => {
    return () => clearInterval(intervalRef.current as NodeJS.Timeout);
  }, []);

  return <Typography {...typographyProps}>{timer}</Typography>;
};

export default Timer;
