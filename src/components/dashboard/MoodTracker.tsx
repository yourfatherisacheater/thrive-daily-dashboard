
import React, { useState } from 'react';
import DashboardCard from './DashboardCard';
import { Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';

const moodOptions = [
  { emoji: "😊", label: "Happy", color: "bg-wellness-green text-white" },
  { emoji: "😃", label: "Excited", color: "bg-wellness-yellow text-black" },
  { emoji: "😌", label: "Calm", color: "bg-wellness-blue text-white" },
  { emoji: "😐", label: "Neutral", color: "bg-wellness-indigo text-white" },
  { emoji: "😞", label: "Sad", color: "bg-wellness-purple text-white" },
  { emoji: "😡", label: "Angry", color: "bg-wellness-red text-white" },
];

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <DashboardCard 
      title="How are you feeling today?" 
      icon={<Smile />} 
      className="bg-white"
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {moodOptions.map(({ emoji, label, color }) => (
            <Button
              key={label}
              variant="outline"
              className={`flex flex-col items-center p-2 w-[75px] h-[75px] ${selectedMood === label ? color : ''}`}
              onClick={() => setSelectedMood(label)}
            >
              <span className="text-2xl mb-1">{emoji}</span>
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </div>
        {selectedMood && (
          <div className="text-sm text-center pt-2">
            You're feeling <span className="font-medium">{selectedMood}</span> today
          </div>
        )}
      </div>
    </DashboardCard>
  );
};

export default MoodTracker;
