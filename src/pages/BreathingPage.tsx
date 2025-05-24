
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import BreathingExercise from '@/components/dashboard/BreathingExercise';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Heart, Waves } from 'lucide-react';

const BreathingPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Breathing Exercises</h1>
          <p className="text-muted-foreground">
            Practice guided breathing techniques to reduce stress and increase focus.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <BreathingExercise />
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Waves className="h-4 w-4" />
                    4-7-8 Technique
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Inhale for 4, hold for 7, exhale for 8
                  </p>
                  <Button size="sm" className="w-full">Start Session</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Heart className="h-4 w-4" />
                    Box Breathing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    4-4-4-4 equal breathing pattern
                  </p>
                  <Button size="sm" variant="outline" className="w-full">Start Session</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Clock className="h-4 w-4" />
                    Deep Breathing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Simple deep breathing exercise
                  </p>
                  <Button size="sm" variant="outline" className="w-full">Start Session</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Session History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[150px] flex items-center justify-center bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
                  <p className="text-muted-foreground">Breathing session history will appear here</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BreathingPage;
