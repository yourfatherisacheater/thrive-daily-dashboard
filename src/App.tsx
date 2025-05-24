
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MoodPage from "./pages/MoodPage";
import WaterPage from "./pages/WaterPage";
import BreathingPage from "./pages/BreathingPage";
import SleepPage from "./pages/SleepPage";
import QuickLogPage from "./pages/QuickLogPage";
import WellnessGuidePage from "./pages/WellnessGuidePage";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <Index />
                </ProtectedRoute>
              } />
              <Route path="/mood" element={
                <ProtectedRoute>
                  <MoodPage />
                </ProtectedRoute>
              } />
              <Route path="/water" element={
                <ProtectedRoute>
                  <WaterPage />
                </ProtectedRoute>
              } />
              <Route path="/breathing" element={
                <ProtectedRoute>
                  <BreathingPage />
                </ProtectedRoute>
              } />
              <Route path="/sleep" element={
                <ProtectedRoute>
                  <SleepPage />
                </ProtectedRoute>
              } />
              <Route path="/quicklog" element={
                <ProtectedRoute>
                  <QuickLogPage />
                </ProtectedRoute>
              } />
              <Route path="/wellness" element={
                <ProtectedRoute>
                  <WellnessGuidePage />
                </ProtectedRoute>
              } />
              <Route path="*" element={
                <ProtectedRoute>
                  <NotFound />
                </ProtectedRoute>
              } />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
