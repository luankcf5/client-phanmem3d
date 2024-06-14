'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

import View3dModel from 'src/components/view-3d-model/view-3d-model';

// ----------------------------------------------------------------------

export default function Page() {
  const { unityProvider } = useUnityContext({
    loaderUrl: '/assets/unity/HeThanKinh/HeThanKinh.loader.js',
    dataUrl: '/assets/unity/HeThanKinh/HeThanKinh.data',
    frameworkUrl: '/assets/unity/HeThanKinh/HeThanKinh.framework.js',
    codeUrl: '/assets/unity/HeThanKinh/HeThanKinh.wasm',
  });

  return (
    <View3dModel>
      <Unity style={{ height: '100%', width: '100%' }} unityProvider={unityProvider} />
    </View3dModel>
  );
}
