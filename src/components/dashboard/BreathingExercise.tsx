
import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';
import { Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

type BreathState = 'idle' | 'inhale' | 'hold' | 'exhale' | 'rest';

const BreathingExercise = () => {
  const [isActive, setIsActive] = useState(false);
  const [breathState, setBreathState] = useState<BreathState>('idle');
  const [timer, setTimer] = useState(0);
  const [message, setMessage] = useState('Start a breathing exercise');

  // Reset exercise
  const resetExercise = () => {
    setIsActive(false);
    setBreathState('idle');
    setTimer(0);
    setMessage('Start a breathing exercise');
  };

  // Start/stop the exercise
  const toggleExercise = () => {
    if (isActive) {
      resetExercise();
    } else {
      setIsActive(true);
      setBreathState('inhale');
      setMessage('Inhale...');
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isActive) {
      interval = setInterval(() => {
        setTimer(prevTimer => prevTimer + 1);

        // Simple 4-7-8 breathing technique
        if (breathState === 'inhale' && timer >= 4) {
          setBreathState('hold');
          setTimer(0);
          setMessage('Hold...');
        } else if (breathState === 'hold' && timer >= 7) {
          setBreathState('exhale');
          setTimer(0);
          setMessage('Exhale...');
        } else if (breathState === 'exhale' && timer >= 8) {
          setBreathState('inhale');
          setTimer(0);
          setMessage('Inhale...');
        }
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, breathState, timer]);

  return (
    <DashboardCard 
      title="Breathing Exercise" 
      icon={<Activity />}
      className="bg-white"
    >
      <div className="flex flex-col items-center justify-center space-y-4">
        <div 
          className={`relative h-32 w-32 rounded-full flex items-center justify-center bg-wellness-teal/20 transition-all duration-300
            ${breathState === 'inhale' ? 'animate-breathe-in' : 
              breathState === 'exhale' ? 'animate-breathe-out' : ''}
          `}
        >
          <span className="text-lg font-medium text-wellness-teal">
            {breathState !== 'idle' ? timer : ''}
          </span>
        </div>
        
        <div className="text-center">
          <p className="text-md font-medium">{message}</p>
          <p className="text-sm text-muted-foreground">
            {breathState !== 'idle' ? '4-7-8 Technique' : 'Reduce stress and increase focus'}
          </p>
        </div>

        <Button 
          onClick={toggleExercise}
          variant={isActive ? "destructive" : "default"}
          className="mt-2"
        >
          {isActive ? 'Stop' : 'Start'}
        </Button>
      </div>
    </DashboardCard>
  );
};

export default BreathingExercise;
