'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

import View3dModel from 'src/components/view-3d-model/view-3d-model';

// ----------------------------------------------------------------------

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/unity/DuongSucTuNamCham/DuongSucTuNamCham.loader.js',
    dataUrl: '/assets/unity/DuongSucTuNamCham/DuongSucTuNamCham.data',
    frameworkUrl: '/assets/unity/DuongSucTuNamCham/DuongSucTuNamCham.framework.js',
    codeUrl: '/assets/unity/DuongSucTuNamCham/DuongSucTuNamCham.wasm',
  });

  return (
    <View3dModel>
      <Unity style={{ height: '100%', width: '100%' }} unityProvider={unityProvider} />
    </View3dModel>
  );
}
