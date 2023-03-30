import React,{ useRef,useState } from 'react';
import { Canvas,useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';

const Box = ()=>{
  const boxRef  = useRef();
  const [hover,setHover] = useState(false);
  const [active,setActive] = useState(false);
  useFrame(()=>{
    if(hover){
      boxRef.current.rotation.y += 0.05;
    }
  })
  return(
    <group ref={boxRef}>
      <mesh 
        onPointerOver={()=>{setHover(true);}} 
        onClick={()=>{ 
          if(active === true){setActive(false);}
          else{setActive(true)}
        }} 
        onPointerOut={()=>{setHover(false);}}
      >
        <torusGeometry attach="geometry"/>
        <meshLambertMaterial color={active?"royalblue":"tomato"} attach="material"/>
      </mesh>
    </group>
  )
}

function ThreeFour(){
  return(
    <>
      <Canvas camera={{fov:55,position:[0,2,2]}}>
        <Box />
        <ambientLight intensity={0.8} />
        <pointLight position={[5,5,0]}/>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default ThreeFour;