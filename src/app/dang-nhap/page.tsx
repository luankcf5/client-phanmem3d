import { JwtLoginView } from 'src/sections/auth/jwt';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'Trang đăng nhập',
};

export default function LoginPage() {
  return <JwtLoginView />;
}
