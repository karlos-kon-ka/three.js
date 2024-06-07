import './App.css';
import { Suspense } from 'react';
//import Sphere from "./components/Sphere";
import ThreeScene from "./components/ThreeScene";
import { OrbitControls, Stars } from "@react-three/drei";
import Model from './components/Model';


function App() {
  return (
    <div className="App">
      <ThreeScene>
        <color  attach="background" args={['#14A9F3']}  />
        <Suspense  fallback={null} >
          <Model />

        </Suspense>
        
        <ambientLight  />
        <OrbitControls  autoRotate/>
        <Stars count={800}   />
        
      </ThreeScene>
      
    </div>
  );
}

export default App;
