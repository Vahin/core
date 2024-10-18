import { AppHeader } from '@/widjets/app-header/app-header';

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader variant="public" />
      {children}
    </>
  );
};

export default PublicLayout;
