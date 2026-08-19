import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className, id }: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        'w-full max-w-[1100px] mx-auto px-4 sm:px-6',
        className
      )}
    >
      {children}
    </div>
  );
}
