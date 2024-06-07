import React from 'react';


function Sphere({ color, position }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 32, 32]} /> {/* Especifica los parámetros de geometría */}
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
}

export default Sphere;
