import { useState } from 'react';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';

import SvgColor from 'src/components/svg-color';

// ----------------------------------------------------------------------

type Props = {
  children?: any;
};

export default function View3dModel({ children }: Props) {
  const [fullscreen, setFullscreen] = useState(false);
  return (
    <Card
      sx={{
        height: '100vh',
        borderRadius: 0,
        ...(fullscreen && {
          position: 'fixed',
          inset: 0,
          width: '100vw',
          zIndex: 999999999999,
        }),
      }}
    >
      <Button
        variant="contained"
        color="inherit"
        onClick={() => setFullscreen(!fullscreen)}
        sx={{
          position: 'absolute',
          left: '50%',
          top: 12,
          transform: 'translate(-50%)',
          zIndex: 999999999,
        }}
      >
        <SvgColor
          src={`/assets/icons/setting/${fullscreen ? 'ic_exit_full_screen' : 'ic_full_screen'}.svg`}
          sx={{ width: 16, height: 16, mr: 1 }}
        />

        {fullscreen ? 'Thoát toàn màn hình' : 'Toàn màn hình'}
      </Button>

      {children}
    </Card>
  );
}
