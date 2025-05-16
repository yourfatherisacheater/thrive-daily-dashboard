
import React, { useState } from 'react';
import DashboardCard from './DashboardCard';
import { CupSoda } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

const cups = [
  { size: 'Small', ml: 200, icon: '🥤' },
  { size: 'Medium', ml: 350, icon: '🥛' },
  { size: 'Large', ml: 500, icon: '🍶' }
];

const WaterIntake = () => {
  const [dailyGoal] = useState(2500); // Daily water intake goal in ml
  const [consumed, setConsumed] = useState(0);

  const percentage = Math.min(Math.round((consumed / dailyGoal) * 100), 100);

  const addWater = (amount: number) => {
    setConsumed(prev => Math.min(prev + amount, dailyGoal));
  };

  return (
    <DashboardCard 
      title="Water Intake" 
      icon={<CupSoda />}
      className="bg-white"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {cups.map((cup) => (
            <Button
              key={cup.size}
              variant="outline"
              className="flex flex-col items-center p-2 w-[75px] h-[75px]"
              onClick={() => addWater(cup.ml)}
            >
              <span className="text-2xl mb-1">{cup.icon}</span>
              <span className="text-xs">{cup.size}</span>
              <span className="text-xs text-muted-foreground">{cup.ml}ml</span>
            </Button>
          ))}
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{consumed}ml</span>
            <span>{dailyGoal}ml</span>
          </div>
          <Progress value={percentage} className="h-2" />
          <div className="text-center text-sm">
            {percentage}% of daily goal
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default WaterIntake;
