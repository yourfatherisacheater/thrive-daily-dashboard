
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Smile, Cup, Moon, Heart, Weight, Book, Activity } from 'lucide-react';
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
    icon: Cup,
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
    title: "Health",
    url: "/health",
    icon: Heart,
  },
  {
    title: "Weight",
    url: "/weight",
    icon: Weight,
  },
  {
    title: "Journal",
    url: "/journal",
    icon: Book,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center p-4">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Thrive</h2>
          <p className="text-sm text-muted-foreground">Wellness Dashboard</p>
        </div>
        <SidebarTrigger className="absolute top-4 right-2" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
