import { ThemeProvider } from '@/features/theme/theme-provider';

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
