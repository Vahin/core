import { ToggleTheme } from '@/features/theme/toogle-theme';
import { Layout } from './_ui/layout';
import { Logo } from './_ui/logo';
import { MainNav } from './_ui/main-nav';
import { Profile } from './_ui/profile';

interface AppHeaderProps {
  variant: 'auth' | 'private' | 'public';
}

export const AppHeader = ({ variant }: AppHeaderProps) => {
  const isAuth = variant === 'auth';

  return (
    <Layout
      logo={<Logo />}
      nav={<MainNav />}
      profile={!isAuth && <Profile />}
      actions={<ToggleTheme />}
    />
  );
};
