'use client';

import { AppSessionProvider } from '@/entities/session/app-session-provider';
import { ThemeProvider } from '@/features/theme/theme-provider';
import { queryClient } from '@/shared/api/query-client';
import { QueryClientProvider } from '@tanstack/react-query';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <AppSessionProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </AppSessionProvider>
    </ThemeProvider>
  );
};
