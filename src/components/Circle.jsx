// RotatingCircle.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';

const RotatingCircle = () => {
  const sphereRef = useRef();
  
  // Load the texture image using useTexture from drei
  const texture = useTexture('https://static.vecteezy.com/system/resources/previews/024/677/598/non_2x/beautiful-sunset-on-the-beach-panoramic-view-of-ocean-waves-at-sunset-generative-ai-free-photo.jpg'); // Replace with the path to your image

  // Rotate the sphere every frame
  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.01; // Rotate on the Y-axis
    }
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[4, 35, 35]} /> {/* Radius, Width segments, Height segments */}
      {/* Apply the texture to the material */}
      <meshStandardMaterial map={texture} metalness={0.5} roughness={0.4} />
    </mesh>
  );
};

export default RotatingCircle;
