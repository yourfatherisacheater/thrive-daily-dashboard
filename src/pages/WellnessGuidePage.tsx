
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Lightbulb, Target, Users } from 'lucide-react';

const WellnessGuidePage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Wellness Guide</h1>
          <p className="text-muted-foreground">
            Get AI-powered wellness tips from your journal and discover personalized health insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Daily Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Personalized wellness recommendations based on your activity patterns.
              </p>
              <div className="space-y-2">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium">Hydration Reminder</p>
                  <p className="text-xs text-muted-foreground">You're behind on water intake today</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium">Sleep Schedule</p>
                  <p className="text-xs text-muted-foreground">Try going to bed 30 minutes earlier</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Wellness Articles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="border-l-4 border-purple-400 pl-3">
                  <h4 className="font-medium text-sm">Mindful Breathing Techniques</h4>
                  <p className="text-xs text-muted-foreground">5 min read</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-3">
                  <h4 className="font-medium text-sm">The Science of Sleep</h4>
                  <p className="text-xs text-muted-foreground">8 min read</p>
                </div>
                <div className="border-l-4 border-green-400 pl-3">
                  <h4 className="font-medium text-sm">Hydration and Health</h4>
                  <p className="text-xs text-muted-foreground">3 min read</p>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View All Articles
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Weekly Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Drink 8 glasses daily</span>
                  <span className="text-xs text-green-600 font-medium">5/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Log mood daily</span>
                  <span className="text-xs text-green-600 font-medium">7/7</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Breathing exercises</span>
                  <span className="text-xs text-orange-600 font-medium">3/7</span>
                </div>
              </div>
              <Button size="sm" className="w-full mt-4">
                Set New Goals
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Community Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">72%</div>
                  <p className="text-sm text-muted-foreground">Users improved mood tracking</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-teal-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">89%</div>
                  <p className="text-sm text-muted-foreground">Achieved hydration goals</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-teal-600">65%</div>
                  <p className="text-sm text-muted-foreground">Practice breathing exercises</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default WellnessGuidePage;
