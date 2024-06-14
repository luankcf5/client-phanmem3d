'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

import View3dModel from 'src/components/view-3d-model/view-3d-model';

// ----------------------------------------------------------------------

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/unity/MoPhongDaoDong/MoPhongDaoDong.loader.js',
    dataUrl: '/assets/unity/MoPhongDaoDong/MoPhongDaoDong.data',
    frameworkUrl: '/assets/unity/MoPhongDaoDong/MoPhongDaoDong.framework.js',
    codeUrl: '/assets/unity/MoPhongDaoDong/MoPhongDaoDong.wasm',
  });

  return (
    <View3dModel>
      <Unity style={{ height: '100%', width: '100%' }} unityProvider={unityProvider} />
    </View3dModel>
  );
}
