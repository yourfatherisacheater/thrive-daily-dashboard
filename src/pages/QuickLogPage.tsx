
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { PlusCircle, Scale, Apple, Dumbbell, Heart } from 'lucide-react';

const QuickLogPage = () => {
  const [weight, setWeight] = useState('');
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Quick Log</h1>
          <p className="text-muted-foreground">
            Rapidly log weight, activities, and journal entries in one convenient place.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5" />
                  Weight Entry
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="weight">Weight (kg)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="70.5"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <Button className="w-full">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Log Weight
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  Quick Mood
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="mood">How are you feeling?</Label>
                  <Input
                    id="mood"
                    placeholder="Happy, tired, energetic..."
                    value={mood}
                    onChange={(e) => setMood(e.target.value)}
                  />
                </div>
                <Button className="w-full">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Log Mood
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="h-5 w-5" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Apple className="h-4 w-4 mr-2" />
                  Log a Meal
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Dumbbell className="h-4 w-4 mr-2" />
                  Log Exercise
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Heart className="h-4 w-4 mr-2" />
                  Take Wellness Survey
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Daily Notes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="notes">What's on your mind?</Label>
                  <Textarea
                    id="notes"
                    placeholder="Write your thoughts, goals, or reflections..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={4}
                  />
                </div>
                <Button className="w-full">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Save Notes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default QuickLogPage;
