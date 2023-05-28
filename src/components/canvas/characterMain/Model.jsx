import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

export function Model() {
  const character = useGLTF("/characterMain1/scene.gltf");
  const [isMobile, setIsMobile] = useState(false);
  const myMesh = useRef();
  // useFrame(({ clock }) => {
  //   // const a = clock.getElapsedTime();
  //   let a = 0.001;
  //   myMesh.current.rotation.y = myMesh.current.rotation.y + 0.001;
  //   // console.log(myMesh.current.rotation.y);
  // });

  return (
    <mesh ref={myMesh}>
      {/* <hemisphereLight intensity={0.1} groundColor="black" /> */}
      <spotLight
        position={[-20, 80, 10]}
        angle={0.1}
        penumbra={1}
        intensity={0.5}
        castShadow
        shadow-mapSize={1024}
      />
      {/* <pointLight intensity={0.4} /> */}
      <primitive
        object={character.scene}
        scale={isMobile ? 0.7 : 2.5}
        position={isMobile ? [0, -3, -2.2] : [0, 0, 0]}
        rotation={[0.01, -0.2, 0]}
      />
    </mesh>
  );
}
// function Rig({ vec = new THREE.Vector3() }) {
//   useFrame((state) => {
//     console.log(state);
//   });
// }
useGLTF.preload("/characterMain1/scene.gltf");
