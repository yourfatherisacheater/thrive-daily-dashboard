
import React from 'react';
import { useMoodData } from '@/hooks/useMoodData';

const MoodTrendsChart = () => {
  const { getWeeklyMoods } = useMoodData();
  const weeklyMoods = getWeeklyMoods();

  if (weeklyMoods.length === 0) {
    return (
      <div className="h-[200px] flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
        <p className="text-muted-foreground">No mood data available. Start tracking your mood!</p>
      </div>
    );
  }

  // Get last 7 days
  const days = [];
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    days.push({
      date: date.toISOString().split('T')[0],
      dayName: date.toLocaleDateString('en-US', { weekday: 'short' })
    });
  }

  return (
    <div className="h-[200px] p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
      <div className="flex items-end justify-between h-full">
        {days.map((day) => {
          const moodForDay = weeklyMoods.find(mood => mood.date === day.date);
          return (
            <div key={day.date} className="flex flex-col items-center">
              <div className="text-2xl mb-2 h-8 flex items-center">
                {moodForDay ? moodForDay.emoji : '·'}
              </div>
              <div className="text-xs text-center">
                {day.dayName}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodTrendsChart;
