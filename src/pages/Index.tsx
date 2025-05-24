
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Smile, CupSoda, Activity, Moon, Zap, Users, ArrowRight, Heart } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Mood Tracker",
      description: "Log and analyze your daily moods.",
      icon: <Smile className="h-12 w-12 text-purple-500" />,
      path: "/mood",
      gradient: "from-purple-100 to-pink-100"
    },
    {
      title: "Water Intake",
      description: "Track your hydration goals.",
      icon: <CupSoda className="h-12 w-12 text-blue-500" />,
      path: "/water",
      gradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Breathing Exercises",
      description: "Practice guided breathing techniques.",
      icon: <Activity className="h-12 w-12 text-teal-500" />,
      path: "/breathing",
      gradient: "from-teal-100 to-green-100"
    },
    {
      title: "Sleep Tracker",
      description: "Monitor your sleep patterns.",
      icon: <Moon className="h-12 w-12 text-indigo-500" />,
      path: "/sleep",
      gradient: "from-indigo-100 to-purple-100"
    },
    {
      title: "Quick Log",
      description: "Rapidly log weight, activities, and journal entries.",
      icon: <Zap className="h-12 w-12 text-orange-500" />,
      path: "/quicklog",
      gradient: "from-orange-100 to-yellow-100"
    },
    {
      title: "Wellness Guide",
      description: "Get AI-powered wellness tips from your journal.",
      icon: <Users className="h-12 w-12 text-emerald-500" />,
      path: "/wellness",
      gradient: "from-emerald-100 to-teal-100"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Welcome to WellTrack!</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your personal space to nurture your health and wellness. Select a feature below to get started.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card 
              key={feature.title} 
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => navigate(feature.path)}
            >
              <CardHeader className="text-center pb-4">
                <div className={`mx-auto mb-4 p-6 rounded-full bg-gradient-to-br ${feature.gradient}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">
                  {feature.description}
                </p>
                <Button 
                  className="w-full group"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(feature.path);
                  }}
                >
                  Go to {feature.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Heart className="h-8 w-8 text-red-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">7</div>
              <p className="text-sm text-muted-foreground">Days tracked</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Smile className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">85%</div>
              <p className="text-sm text-muted-foreground">Happy days</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <CupSoda className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">2.1L</div>
              <p className="text-sm text-muted-foreground">Avg daily water</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Moon className="h-8 w-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">7.3h</div>
              <p className="text-sm text-muted-foreground">Avg sleep</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
