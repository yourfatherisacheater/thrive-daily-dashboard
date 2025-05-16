
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MoodTracker from '@/components/dashboard/MoodTracker';
import WaterIntake from '@/components/dashboard/WaterIntake';
import BreathingExercise from '@/components/dashboard/BreathingExercise';
import SleepTracker from '@/components/dashboard/SleepTracker';
import { Heart } from 'lucide-react';
import DashboardCard from '@/components/dashboard/DashboardCard';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Track and manage your wellness journey all in one place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <MoodTracker />
          <WaterIntake />
          <BreathingExercise />
          <SleepTracker />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <DashboardCard 
            title="Health Overview" 
            icon={<Heart />}
            className="bg-white"
          >
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Connect your wearable device to see health metrics
              </p>
            </div>
          </DashboardCard>

          <DashboardCard 
            title="Weekly Activity" 
            icon={<Heart />}
            className="bg-white"
          >
            <div className="h-[200px] flex items-center justify-center">
              <p className="text-muted-foreground text-sm">
                Your activity trends will appear here
              </p>
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
