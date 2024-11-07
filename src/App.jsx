import React from 'react';
import { Canvas } from '@react-three/fiber';
import Hexa from './components/Hexa.jsx'
import Circle from './components/Circle.jsx'
import { OrbitControls, useTexture } from '@react-three/drei';


const App = () => {
  return (
    <>
     <Canvas 
     
     camera={{ position: [0, 0, 7], fov: 75 }}  // Move the camera back by increasing the Z-axis value
     style={{  height: '60vh' }}  // Full-screen Canvas for better visibility
     
     
     >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <Circle /> {/* Include the RotatingCircle component */}
      <OrbitControls enableZoom={true} />
    </Canvas>
    </>
  );
};

export default App;
