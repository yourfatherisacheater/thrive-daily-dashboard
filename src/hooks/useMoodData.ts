
import { useState, useEffect } from 'react';

export interface MoodEntry {
  id: string;
  mood: string;
  emoji: string;
  date: string;
  timestamp: number;
}

export const useMoodData = () => {
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

  // Load mood entries from localStorage on component mount
  useEffect(() => {
    const savedMoods = localStorage.getItem('moodEntries');
    if (savedMoods) {
      setMoodEntries(JSON.parse(savedMoods));
    }
  }, []);

  // Save mood entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
  }, [moodEntries]);

  const addMoodEntry = (mood: string, emoji: string) => {
    const now = new Date();
    const entry: MoodEntry = {
      id: Date.now().toString(),
      mood,
      emoji,
      date: now.toISOString().split('T')[0], // YYYY-MM-DD format
      timestamp: now.getTime()
    };

    setMoodEntries(prev => [entry, ...prev]);
  };

  const getTodaysMood = () => {
    const today = new Date().toISOString().split('T')[0];
    return moodEntries.find(entry => entry.date === today);
  };

  const getWeeklyMoods = () => {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    
    return moodEntries.filter(entry => 
      new Date(entry.timestamp) >= oneWeekAgo
    );
  };

  const getMoodStats = () => {
    if (moodEntries.length === 0) {
      return {
        mostCommon: null,
        weeklyCount: 0
      };
    }

    // Count mood frequencies
    const moodCounts = moodEntries.reduce((acc, entry) => {
      acc[entry.mood] = (acc[entry.mood] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find most common mood
    const mostCommonMood = Object.entries(moodCounts).reduce((a, b) => 
      moodCounts[a[0]] > moodCounts[b[0]] ? a : b
    )[0];

    const mostCommonEntry = moodEntries.find(entry => entry.mood === mostCommonMood);

    return {
      mostCommon: mostCommonEntry ? { mood: mostCommonEntry.mood, emoji: mostCommonEntry.emoji } : null,
      weeklyCount: getWeeklyMoods().length
    };
  };

  return {
    moodEntries,
    addMoodEntry,
    getTodaysMood,
    getWeeklyMoods,
    getMoodStats
  };
};
