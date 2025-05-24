
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Smile, CupSoda, Moon, Heart, Weight, Book, Activity, Zap, Users } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

// Menu items
const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
  },
  {
    title: "Mood Tracker",
    url: "/mood",
    icon: Smile,
  },
  {
    title: "Water Intake",
    url: "/water",
    icon: CupSoda,
  },
  {
    title: "Breathing",
    url: "/breathing",
    icon: Activity,
  },
  {
    title: "Sleep",
    url: "/sleep",
    icon: Moon,
  },
  {
    title: "Quick Log",
    url: "/quicklog",
    icon: Zap,
  },
  {
    title: "Wellness Guide",
    url: "/wellness",
    icon: Users,
  },
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-teal-600">WellTrack</h2>
          <p className="text-sm text-muted-foreground">Wellness Dashboard</p>
        </div>
        <SidebarTrigger className="absolute top-4 right-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const isActive = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link 
                        to={item.url} 
                        className={cn(
                          "flex items-center gap-3",
                          isActive && "bg-teal-50 text-teal-700 border-r-2 border-teal-500"
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
