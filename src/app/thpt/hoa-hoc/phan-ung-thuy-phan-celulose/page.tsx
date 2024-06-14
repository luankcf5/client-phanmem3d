'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

import View3dModel from 'src/components/view-3d-model/view-3d-model';

// ----------------------------------------------------------------------

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/unity/3DThuyPhanCelulose/3DThuyPhanCelulose.loader.js',
    dataUrl: '/assets/unity/3DThuyPhanCelulose/3DThuyPhanCelulose.data',
    frameworkUrl: '/assets/unity/3DThuyPhanCelulose/3DThuyPhanCelulose.framework.js',
    codeUrl: '/assets/unity/3DThuyPhanCelulose/3DThuyPhanCelulose.wasm',
  });

  return (
    <View3dModel>
      <Unity style={{ height: '100%', width: '100%' }} unityProvider={unityProvider} />
    </View3dModel>
  );
}
