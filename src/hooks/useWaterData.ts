
import { useState, useEffect } from 'react';

export interface WaterEntry {
  id: string;
  amount: number;
  date: string;
  timestamp: number;
}

export const useWaterData = () => {
  const [waterEntries, setWaterEntries] = useState<WaterEntry[]>([]);
  const [dailyGoal] = useState(2500);

  useEffect(() => {
    const savedWater = localStorage.getItem('waterEntries');
    if (savedWater) {
      setWaterEntries(JSON.parse(savedWater));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('waterEntries', JSON.stringify(waterEntries));
  }, [waterEntries]);

  const addWaterEntry = (amount: number) => {
    const now = new Date();
    const entry: WaterEntry = {
      id: Date.now().toString(),
      amount,
      date: now.toISOString().split('T')[0],
      timestamp: now.getTime()
    };

    setWaterEntries(prev => [entry, ...prev]);
  };

  const getTodaysWater = () => {
    const today = new Date().toISOString().split('T')[0];
    return waterEntries
      .filter(entry => entry.date === today)
      .reduce((total, entry) => total + entry.amount, 0);
  };

  const getWaterStats = () => {
    const totalEntries = waterEntries.length;
    if (totalEntries === 0) return { averageDaily: 0, daysTracked: 0 };

    const uniqueDays = new Set(waterEntries.map(entry => entry.date));
    const daysTracked = uniqueDays.size;
    
    const totalWater = waterEntries.reduce((sum, entry) => sum + entry.amount, 0);
    const averageDaily = Math.round(totalWater / daysTracked);

    return { averageDaily, daysTracked };
  };

  return {
    waterEntries,
    addWaterEntry,
    getTodaysWater,
    getWaterStats,
    dailyGoal
  };
};
