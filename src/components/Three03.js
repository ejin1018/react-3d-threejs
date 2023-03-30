import React,{ Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { Environment,OrbitControls, Html, useProgress } from '@react-three/drei';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Loader(){
  const {progress} = useProgress();
  return <Html center>{progress} % loading</Html>;
}

const Model = ()=>{
  const gltf = useLoader(GLTFLoader,'./rooster/scene.gltf');
  return <primitive object={gltf.scene} scale={1} rotation={[0,0,0.3]} position={[0.3,-0.5,0]}/>
}

const ThreeRooster = ()=>{
  const handleCamera = (prop)=>{
    console.log(' This is handleCamera =>',prop.camera)
  }
  return(
    <>
      <Canvas onCreated={handleCamera} camera={{position:[1,1,1], fov:75, near:0.1, far: 100}}>
        <Suspense fallback={<Loader/>}>
          <Model />
          <Environment preset='park' background />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </>
  )
}

export default ThreeRooster;