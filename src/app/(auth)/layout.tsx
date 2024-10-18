import { AppHeader } from '@/widjets/app-header/app-header';

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader variant="auth" />
      {children}
    </>
  );
};

export default AuthLayout;
