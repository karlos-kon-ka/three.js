import React from 'react';
import { ThreeMFLoader } from 'three/examples/jsm/loaders/3MFLoader';
import { useLoader } from '@react-three/fiber';
import copa from '../assets/darth_vader.3mf';

const Model = () => { 
   const geom = useLoader(ThreeMFLoader, copa);
   return (
    <group  position={[0, -50, 0]}  rotation={[-Math.PI/2,0,1]} scale={[0.1, 0.1, 0.1]}>
      <primitive object={geom} />
    </group>
  );
}

export default Model;
