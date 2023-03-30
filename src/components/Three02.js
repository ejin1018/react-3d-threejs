import React,{ useRef } from 'react';
import { Canvas,useFrame } from '@react-three/fiber'

const AnimateBox = ()=>{
  useFrame(({clock})=>{
    const a = clock.getElapsedTime();
    ref.current.rotation.x = a;
  });
  const ref = useRef();
  return(
    <mesh ref={ref}>
      <icosahedronGeometry />
      <meshPhongMaterial color="pink" />
    </mesh>
  )
}

const ThreeTwo = ()=>{
  return(
    <>
      <Canvas>
        <directionalLight position={[0,0,5]} />
        <AnimateBox />
      </Canvas>
    </>
  )
}

export default ThreeTwo;