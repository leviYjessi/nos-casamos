import React from "react";
import Countdown from "react-countdown";

interface Props {
  date: Date;
}

interface RendererProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

const CountdownTimer = ({ date }: Props) => {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: RendererProps) => {
    if (completed) {
      return (
        <div className="flex flex-row flex-wrap gap-6 justify-center tracking-widest leading-6 py-3 text-sm">
          <p className="font-bold tabular-nums">
            {0} <span className="font-normal">días</span>
          </p>
          <p className="font-bold tabular-nums">
            {0} <span className="font-normal">horas</span>
          </p>
          <p className="font-bold tabular-nums">
            {0} <span className="font-normal">min</span>
          </p>
        </div>
      );
    } else {
      return (
        <div className="flex flex-row flex-wrap gap-6 justify-center tracking-widest leading-6 py-3 text-sm">
          <p className="font-bold tabular-nums">
            {days} <span className="font-normal">días</span>
          </p>
          <p className="font-bold tabular-nums">
            {hours} <span className="font-normal">horas</span>
          </p>
          <p className="font-bold tabular-nums">
            {minutes} <span className="font-normal">min</span>
          </p>
        </div>
      );
    }
  };

  return <Countdown date={date} renderer={renderer} />;
};

export default CountdownTimer;
