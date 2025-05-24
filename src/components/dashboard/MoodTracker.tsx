
import React, { useState } from 'react';
import DashboardCard from './DashboardCard';
import { Smile } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useMoodData } from '@/hooks/useMoodData';
import { useToast } from '@/hooks/use-toast';

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
  const { addMoodEntry, getTodaysMood } = useMoodData();
  const { toast } = useToast();
  
  const todaysMood = getTodaysMood();

  const handleConfirm = () => {
    if (selectedMood) {
      const selectedMoodOption = moodOptions.find(option => option.label === selectedMood);
      if (selectedMoodOption) {
        addMoodEntry(selectedMood, selectedMoodOption.emoji);
        toast({
          title: "Mood saved!",
          description: `Your ${selectedMood.toLowerCase()} mood has been recorded for today.`,
        });
        setSelectedMood(null);
      }
    }
  };

  // If user already logged mood today, show it
  if (todaysMood) {
    return (
      <DashboardCard 
        title="Today's Mood" 
        icon={<Smile />} 
        className="bg-white"
      >
        <div className="text-center space-y-4">
          <div className="text-4xl">{todaysMood.emoji}</div>
          <div className="text-lg font-medium">You're feeling {todaysMood.mood}</div>
          <div className="text-sm text-muted-foreground">
            Logged today at {new Date(todaysMood.timestamp).toLocaleTimeString()}
          </div>
        </div>
      </DashboardCard>
    );
  }

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
          <div className="space-y-3 pt-2">
            <div className="text-sm text-center">
              You're feeling <span className="font-medium">{selectedMood}</span> today
            </div>
            <Button 
              onClick={handleConfirm}
              className="w-full"
            >
              Confirm Mood
            </Button>
          </div>
        )}
      </div>
    </DashboardCard>
  );
};

export default MoodTracker;
