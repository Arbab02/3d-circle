import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';

const Hexagon = () => {
  // Load the texture image using useTexture from drei
  const texture = useTexture('https://png.pngtree.com/thumb_back/fw800/background/20240730/pngtree-beach-sunset-view-golden-hour-landscape-with-sea-and-island-image_15936230.jpg'); // Replace with your image path

  return (
    <mesh rotation={[Math.PI / 2, -1.5,-1.5]}>
      <cylinderGeometry args={[7, 7, 2, 6]} /> {/* Radius, Height, and 6 radial segments */}
      {/* Apply the texture to the material */}
      <meshStandardMaterial map={texture} metalness={0.3} roughness={0.5} />
    </mesh>
  );
};

const Hexa = () => {
  return (
    <Canvas camera={{ position: [4, 4, 10], fov: 60 }}>
      <ambientLight intensity={0.5} color="#ffffff" />
      <pointLight position={[3, 5, 3]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-3, -5, 5]} intensity={1} color="#ffffff" />
      <Hexagon />
      <OrbitControls enableZoom={true} />
    </Canvas>
  );
};

export default Hexa;
