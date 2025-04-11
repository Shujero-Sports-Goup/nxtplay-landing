
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const LaunchCountdown = () => {
  const launchDate = new Date('2024-09-01T00:00:00Z'); // Set your planned launch date here
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const renderTimeUnit = (value: number, label: string) => (
    <div className="flex flex-col items-center bg-nextplay-blue/10 p-2 rounded-lg">
      <span className="text-2xl font-bold text-nextplay-blue">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );

  return (
    <div className="flex items-center space-x-2 mt-6">
      <Clock className="text-nextplay-blue mr-2" size={24} />
      <div className="flex space-x-2">
        {renderTimeUnit(timeLeft.days, 'DAYS')}
        {renderTimeUnit(timeLeft.hours, 'HRS')}
        {renderTimeUnit(timeLeft.minutes, 'MINS')}
        {renderTimeUnit(timeLeft.seconds, 'SECS')}
      </div>
    </div>
  );
};

export default LaunchCountdown;
