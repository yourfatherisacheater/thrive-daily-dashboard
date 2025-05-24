
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import WaterIntake from '@/components/dashboard/WaterIntake';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Target, Trophy } from 'lucide-react';

const WaterPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Water Intake</h1>
          <p className="text-muted-foreground">
            Track your hydration goals and maintain optimal water intake throughout the day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <WaterIntake />
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Weekly Hydration Pattern
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <p className="text-muted-foreground">Hydration pattern chart will appear here</p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Daily Goal
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2500ml</div>
                    <p className="text-sm text-muted-foreground">Current target</p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Adjust Goal
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>7-Day Streak:</span>
                      <span className="font-medium">🔥 3 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Best Week:</span>
                      <span className="font-medium">💪 5/7 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WaterPage;
