
import React, { ReactNode } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DashboardCardProps {
  title: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  footer?: ReactNode;
  onClick?: () => void;
}

const DashboardCard = ({ 
  title, 
  icon, 
  children, 
  className,
  footer,
  onClick 
}: DashboardCardProps) => {
  return (
    <Card 
      className={cn("wellness-card h-full", className)} 
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-medium">{title}</CardTitle>
        {icon && <div className="w-6 h-6">{icon}</div>}
      </CardHeader>
      <CardContent className="py-2">
        {children}
      </CardContent>
      {footer && (
        <CardFooter className="pt-2">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default DashboardCard;
