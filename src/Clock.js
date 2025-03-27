import { useState, useEffect } from 'react';

export function Clock({ isDarkMode, clockStyle }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      id='theme-clock'
      style={{ borderColor: isDarkMode ? 'black' : 'white' }}
    >
      <div className='needle sec' style={clockStyle.secondsNeedle}></div>
      <div
        className='needle min'
        style={{
          ...clockStyle.minutesNeedle,
          backgroundColor: isDarkMode ? 'black' : 'white',
        }}
      ></div>
      <div
        className='needle hour'
        style={{
          ...clockStyle.hoursNeedle,
          backgroundColor: isDarkMode ? 'black' : 'white',
        }}
      ></div>
      <div className='needle_holder'></div>
      <div style={{ position: "relative", fontSize: 30, color: 'blue', top: '85%' }}>❄️𝖑𝘊Ɇ❄️</div>
      
     
     
    </div>
  );
}