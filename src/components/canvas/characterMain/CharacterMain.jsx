import { Canvas, useFrame } from "@react-three/fiber";
import {
  Stage,
  OrbitControls,
  Environment,
  ContactShadows,
  Stats,
} from "@react-three/drei";
import * as THREE from "three";
import { useControls } from "leva";
import { Model } from "./Model";
import { easing } from "maath";
import { useRef } from "react";

export default function CharacterMain() {
  // const { color } = useControls({ color: "#b78135" });
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  return (
    // <div className="mainBlock__character">
    <Canvas
      className="mainBlock__character"
      // style={}{ ...sizes }
      shadows
      camera={{ position: [10, 0, 12], fov: 35 }}
    >
      <ambientLight intensity={0.5} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      {/* <Environment preset="dawn" background blur={0.5} /> */}
      <ContactShadows
        resolution={312}
        position={[0, -2, 0]}
        opacity={1}
        scale={30}
        blur={1}
        far={2}
      />
      <Stage
        intensity={0.5}
        // environment="city"
        shadows={{ type: "accumulative", colorBlend: 2, opacity: 2 }}
        adjustCamera={1.5}
      >
        <Model />
      </Stage>
      <OrbitControls
        enablePan={false}
        // enableRotate={false}
        enableZoom={false}
        makeDefault
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />
      <CameraRig />
    </Canvas>
    // </div>
  );
}
function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 1), 0, 12 + Math.cos(t / 5) / 2),
      0.9
    );
    state.camera.lookAt(0, 0, 0);
  });
}
// function Rig({ vec = new THREE.Vector3() }) {
//   useFrame((state) => {
//     console.log(state);
//     // state.camera.rotation.lerp(vec.set(1 + state.pointer.x, 0, 0), 1);
//     // state.camera.lookAt(0, 0, 0);
//   });
// }
