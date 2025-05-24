
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import MoodTracker from '@/components/dashboard/MoodTracker';
import MoodTrendsChart from '@/components/dashboard/MoodTrendsChart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, TrendingUp, BarChart3 } from 'lucide-react';
import { useMoodData } from '@/hooks/useMoodData';

const MoodPage = () => {
  const { getMoodStats } = useMoodData();
  const stats = getMoodStats();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Mood Tracker</h1>
          <p className="text-muted-foreground">
            Log and analyze your daily moods to understand patterns and improve your emotional wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <MoodTracker />
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Weekly Mood Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <MoodTrendsChart />
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Mood Calendar
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full">
                    View Monthly Calendar
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Mood Statistics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Most Common:</span>
                      <span className="font-medium">
                        {stats.mostCommon ? `${stats.mostCommon.mood} ${stats.mostCommon.emoji}` : 'No data yet'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>This Week:</span>
                      <span className="font-medium">{stats.weeklyCount} entries</span>
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

export default MoodPage;
