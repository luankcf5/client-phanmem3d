'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

import View3dModel from 'src/components/view-3d-model/view-3d-model';

// ----------------------------------------------------------------------

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/unity/HeMatTroi/HeMatTroi.loader.js',
    dataUrl: '/assets/unity/HeMatTroi/HeMatTroi.data',
    frameworkUrl: '/assets/unity/HeMatTroi/HeMatTroi.framework.js',
    codeUrl: '/assets/unity/HeMatTroi/HeMatTroi.wasm',
  });

  return (
    <View3dModel>
      <Unity style={{ height: '100%', width: '100%' }} unityProvider={unityProvider} />
    </View3dModel>
  );
}
