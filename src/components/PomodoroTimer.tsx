import React from 'react';

interface PomodoroTimerProps {
  time: number;
  isBreak: boolean;
}

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ time, isBreak }) => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div className="text-center">
      <div className="text-7xl font-bold text-white mb-4">
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </div>
      <div className={`text-2xl font-semibold ${isBreak ? 'text-green-400' : 'text-white'}`}>
        {isBreak ? 'Break' : 'Focus'}
      </div>
    </div>
  );
};

export default PomodoroTimer;