
import React, { useState } from 'react';
import DashboardCard from './DashboardCard';
import { CupSoda, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { useWaterData } from '@/hooks/useWaterData';
import { useToast } from '@/hooks/use-toast';

const cups = [
  { size: 'Small', ml: 200, icon: '🥤' },
  { size: 'Medium', ml: 350, icon: '🥛' },
  { size: 'Large', ml: 500, icon: '🍶' }
];

const WaterIntake = () => {
  const { getTodaysWater, addWaterEntry, dailyGoal } = useWaterData();
  const [selectedCup, setSelectedCup] = useState<typeof cups[0] | null>(null);
  const { toast } = useToast();
  
  const consumed = getTodaysWater();
  const percentage = Math.min(Math.round((consumed / dailyGoal) * 100), 100);

  const handleCupSelect = (cup: typeof cups[0]) => {
    setSelectedCup(cup);
  };

  const handleConfirm = () => {
    if (selectedCup) {
      addWaterEntry(selectedCup.ml);
      toast({
        title: "Water logged!",
        description: `Added ${selectedCup.ml}ml to your daily intake.`,
      });
      setSelectedCup(null);
    }
  };

  const handleCancel = () => {
    setSelectedCup(null);
  };

  return (
    <DashboardCard 
      title="Water Intake" 
      icon={<CupSoda />}
      className="bg-white dark:bg-gray-800"
    >
      <div className="space-y-4">
        {!selectedCup ? (
          <div className="flex flex-wrap gap-2 justify-center">
            {cups.map((cup) => (
              <Button
                key={cup.size}
                variant="outline"
                className="flex flex-col items-center p-2 w-[75px] h-[75px] dark:border-gray-600"
                onClick={() => handleCupSelect(cup)}
              >
                <span className="text-2xl mb-1">{cup.icon}</span>
                <span className="text-xs">{cup.size}</span>
                <span className="text-xs text-muted-foreground">{cup.ml}ml</span>
              </Button>
            ))}
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="p-4 border rounded-lg dark:border-gray-600">
              <span className="text-3xl mb-2 block">{selectedCup.icon}</span>
              <h3 className="font-medium">{selectedCup.size}</h3>
              <p className="text-sm text-muted-foreground">{selectedCup.ml}ml</p>
            </div>
            <p className="text-sm">Confirm adding this to your daily intake?</p>
            <div className="flex gap-2 justify-center">
              <Button onClick={handleConfirm} size="sm" className="flex items-center gap-1">
                <Check className="h-4 w-4" />
                Confirm
              </Button>
              <Button onClick={handleCancel} variant="outline" size="sm" className="flex items-center gap-1">
                <X className="h-4 w-4" />
                Cancel
              </Button>
            </div>
          </div>
        )}
        
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
