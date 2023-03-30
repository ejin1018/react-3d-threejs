import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment,OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = ()=>{
  const gltf = useLoader(GLTFLoader,'./place/scene.gltf');
  return <primitive object={gltf.scene} scale={1}/>
}

function ThreePrac(){
  return(
    <>
      <Canvas>
        <Model />
        <OrbitControls />
        <Environment preset="dawn"/>
      </Canvas>
    </>
  )
}

export default ThreePrac;