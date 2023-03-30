import React from 'react';
import { Canvas } from '@react-three/fiber'

const ThreeOne = ()=>{
  return(
    <>
      <Canvas>
        {/* <ambientLight intensity={0.5} /> */}
        <directionalLight color="lightblue" position={[0,0,5]} />
        <mesh>
          <boxGeometry />
          <meshLambertMaterial />
          {/* <sphereGeometry /> */}
        </mesh>
      </Canvas>
    </>
  )
}

export default ThreeOne;