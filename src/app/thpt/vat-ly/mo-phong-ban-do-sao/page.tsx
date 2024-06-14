'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

import View3dModel from 'src/components/view-3d-model/view-3d-model';

// ----------------------------------------------------------------------

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/unity/BanDoSao/BanDoSao.loader.js',
    dataUrl: '/assets/unity/BanDoSao/BanDoSao.data',
    frameworkUrl: '/assets/unity/BanDoSao/BanDoSao.framework.js',
    codeUrl: '/assets/unity/BanDoSao/BanDoSao.wasm',
  });

  return (
    <View3dModel>
      <Unity style={{ height: '100%', width: '100%' }} unityProvider={unityProvider} />
    </View3dModel>
  );
}
