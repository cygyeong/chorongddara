import React from 'react';
// import Camera from '../../components/camera/Camera';
// import TMHtml from '../../components/camera/TMHtml';
// import TeachableMachine from '../../components/camera/TeachableMachine';
import VideoPoseModel from '../../components/camera/VideoPoseModel';

export default function CameraPage() {
  return (
    <div>
      {/* <Camera /> */}
      {/* <TMHtml /> */}
      <VideoPoseModel />
      {/* <TeachableMachine /> 로딩 시간 개 오래걸림 */}
    </div>
  );
}
