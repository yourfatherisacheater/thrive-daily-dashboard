
import React, { useState } from 'react';
import DashboardCard from './DashboardCard';
import { Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const SleepTracker = () => {
  const [sleepHours] = useState(7.5);
  const [sleepQuality] = useState(4);

  // Demo sleep data for the week (hours)
  const weekData = [6.5, 7, 8, 7.5, 6, 9, 7.5];
  const currentDay = new Date().getDay();
  
  // Format date for display
  const today = new Date();
  const displayDate = format(today, 'EEE, MMM d');
  
  const getQualityLabel = (quality: number) => {
    switch (quality) {
      case 1: return 'Poor';
      case 2: return 'Fair';
      case 3: return 'Good';
      case 4: return 'Very Good';
      case 5: return 'Excellent';
      default: return 'Not rated';
    }
  };

  return (
    <DashboardCard 
      title="Sleep Tracker" 
      icon={<Moon />}
      className="bg-white"
    >
      <div className="space-y-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold">{sleepHours} hrs</h3>
          <p className="text-sm text-muted-foreground">{displayDate}</p>
          <div className="flex items-center justify-center mt-1">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={cn(
                    "w-4 h-4",
                    star <= sleepQuality ? "text-wellness-yellow fill-wellness-yellow" : "text-gray-300"
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-xs">{getQualityLabel(sleepQuality)}</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end h-20 mt-2 px-1">
          {weekData.map((hours, index) => {
            const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const isToday = index === currentDay;
            const barHeight = (hours / 12) * 100; // Scale to percentage
            
            return (
              <div key={index} className="flex flex-col items-center">
                <div 
                  className={`w-6 rounded-t-sm ${isToday ? 'bg-wellness-blue' : 'bg-wellness-blue/40'}`} 
                  style={{ height: `${barHeight}%` }}
                ></div>
                <span className="text-xs mt-1">{dayNames[index]}</span>
              </div>
            );
          })}
        </div>
        
        <Button className="w-full">Log Last Night's Sleep</Button>
      </div>
    </DashboardCard>
  );
};

export default SleepTracker;
