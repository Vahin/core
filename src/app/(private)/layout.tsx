import { AppHeader } from '@/widjets/app-header/app-header';

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader variant="private" />
      {children}
    </>
  );
};

export default PrivateLayout;
