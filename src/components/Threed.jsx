import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, ContactShadows, Environment, OrbitControls } from "@react-three/drei"

import './Threed.css';



const Threed = () => {
  return (
    <div className="threedcontainer">
      <Canvas shadows camera={{ position: [-20, 2, 4], fov: 10 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
      <Shoe />
      <Environment preset="city" />
      <ContactShadows position={[0, -1.6, 0]} opacity={1} scale={10} blur={1.5} far={1.6} />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI /2} enableZoom={true} enablePan={false} />
    </Canvas>
    </div>
  );
};

function Shoe() {
    const ref = useRef()
  const { nodes, materials } = useGLTF('/nike3d-transformed.glb')
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    ref.current.rotation.set(Math.cos(t / 4) / 8, Math.sin(t / 3) / 4, 0.15 + Math.sin(t / 2) / 8)
    ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7
  })
  return (
    <group ref={ref} scale={[2,2,2]}>
      <mesh receiveShadow castShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} />
    </group>
  )
      
    
}

export default Threed;
