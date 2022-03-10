import React, { useRef, useState, Suspense } from "react";
import * as THREE from "three";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { EffectComposer, BrightnessContrast } from '@react-three/postprocessing'
import { TextureLoader } from 'three/src/loaders/TextureLoader'



import Model from "./Components/Model";
import ModelEarth from "./Components/ModelEarth"
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import B02 from "./Components/B02";
import GoogleEarthMin from "./Components/GoogleEarthMin";

extend({ OrbitControls });


function Dome() {
  const colorMap = useLoader(TextureLoader, '/3602.jpeg')

  return (
    <group>
      <mesh rotation={[0 , 3 , 0]}>
        <sphereBufferGeometry attach="geometry" args={[5000, 1000, 1000]} />
        <meshPhysicalMaterial
          attach="material"
          map={colorMap}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}



function Box(props) {
  
  const [hovered, setHover] = useState(false);
  const mesh = useRef();
  return (
    <mesh
      {...props}
      ref={mesh}
      onPointerOver={(e) => {
        e.stopPropagation()
        setHover(true)
      }}
      onPointerOut={(e) => {
        e.stopPropagation()
        setHover(false)
        }}  
        >
      <boxGeometry args={[90, 30, 70]} />
      <meshStandardMaterial color={hovered ? props.free ? "cyan" : "orange" : ""} transparent opacity={hovered ? .6 : 0} />
    </mesh>
  );
}

export default function App() {

  // const [floor, setFloor] = useState()
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <>
    <Canvas 
      shadowMap camera={{ fov: 45, zoom: 1, near: 200, far: 10000, position: [0, 0, 900] }} style={{ height: `100vh` }}>
            <color attach="background" args={["#696969"]} />

      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        autoRotate={false}
        autoRotateSpeed={1}
        zoomSpeed={0.3}
        minDistance={800}
        maxDistance={2000}
      ></OrbitControls>
      <Suspense  fallback={null}>

          {/* <Dome /> */}

        {/* <Model position={[-200, -200, 400]} /> */}
        {/* <ModelEarth position={[200, -180, 400]} /> */}
        <B02 position={[200, -200, 400]} />
        <GoogleEarthMin  position={[200, -180, 400]} />
        <EffectComposer>
          <BrightnessContrast brightness={0.1} contrast={.2} />
        </EffectComposer>

        <Environment preset="warehouse" background="./098_hdrmaps_com_free1.exr"/>
      </Suspense>

      <directionalLight position={[-600, -500, 50]} intensity={.4}
      />
      <group rotation={[0 , -1.6 , 0]} position={[206, 0, 212]} >
      <Box position={[-295, -175, 110]}free={true} floor={1} color={"orange"} />
      <Box position={[-295, -146, 110]}free={true} floor={2} color={"orange"} />
      <Box position={[-295, -117, 110]}free={false} floor={3} color={"orange"} />
      <Box position={[-295, -59, 110]} free={true} floor={4} color={"orange"} />
      <Box position={[-295, -88, 110]} free={false} floor={5} color={"orange"} />
      <Box position={[-295, -30, 110]} free={true} floor={6} color={"orange"} />
      <Box position={[-295, 1, 110]}   free={false} floor={7} color={"orange"} />
      <Box position={[-295, 32, 110]}  free={true} floor={8}  color={"orange"} />
      <Box position={[-295, 63, 110]}  free={true} floor={9}  color={"orange"} />
      <Box position={[-295, 94, 110]}  free={false} floor={10} color={"orange"} />
      <Box position={[-295, 125, 110]} free={true} floor={11}  color={"orange"} />
      <Box position={[-295, 156, 110]} free={false} floor={12}  color={"orange"} />
      <Box position={[-295, 187, 110]} free={false} floor={13}  color={"orange"} />
      <Box position={[-295, 218, 110]} free={true} floor={14}  color={"orange"} />
      <Box position={[-178, 62, 110]}  free={true} floor={15} color={"yellow"} />
      </group>
      <ContactShadows frames={1} position={[0, -200, 0]} scale={1000} blur={2} far={1000} />
    </Canvas>
    <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
    <Navbar toggle={toggle}/>
    </>
  );
}