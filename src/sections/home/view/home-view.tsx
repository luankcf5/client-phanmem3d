'use client';

import { useEffect } from 'react';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

// ----------------------------------------------------------------------

export default function HomeView() {
  const { push } = useRouter();

  useEffect(() => {
    push(paths.dashboard.thpt.hoahoc.phanungnitrohoabezenne);
  }, [push]);
  return null;
}
