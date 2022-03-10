import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/GoogleEarth2.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AirVent1001.geometry}
        material={materials['Material__2142148469.001']}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00000006'].geometry}
        material={materials['BuildingMat-00000.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00001006'].geometry}
        material={materials['BuildingMat-00001.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00002006'].geometry}
        material={materials['BuildingMat-00002.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00003006'].geometry}
        material={materials['BuildingMat-00003.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00004006'].geometry}
        material={materials['BuildingMat-00004.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00005006'].geometry}
        material={materials['BuildingMat-00005.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00006006'].geometry}
        material={materials['BuildingMat-00006.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00007006'].geometry}
        material={materials['BuildingMat-00007.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00008006'].geometry}
        material={materials['BuildingMat-00008.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00009006'].geometry}
        material={materials['BuildingMat-00009.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00010006'].geometry}
        material={materials['BuildingMat-00010.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00011006'].geometry}
        material={materials['BuildingMat-00011.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00012006'].geometry}
        material={materials['BuildingMat-00012.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00013006'].geometry}
        material={materials['BuildingMat-00013.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00014006'].geometry}
        material={materials['BuildingMat-00014.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00015006'].geometry}
        material={materials['BuildingMat-00015.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00016006'].geometry}
        material={materials['BuildingMat-00016.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00017006'].geometry}
        material={materials['BuildingMat-00017.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00018006'].geometry}
        material={materials['BuildingMat-00018.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00019006'].geometry}
        material={materials['BuildingMat-00019.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00020006'].geometry}
        material={materials['BuildingMat-00020.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00021006'].geometry}
        material={materials['BuildingMat-00021.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00022006'].geometry}
        material={materials['BuildingMat-00022.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00023006'].geometry}
        material={materials['BuildingMat-00023.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00024006'].geometry}
        material={materials['BuildingMat-00024.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00025006'].geometry}
        material={materials['BuildingMat-00025.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00026006'].geometry}
        material={materials['BuildingMat-00026.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00027006'].geometry}
        material={materials['BuildingMat-00027.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00028006'].geometry}
        material={materials['BuildingMat-00028.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00029006'].geometry}
        material={materials['BuildingMat-00029.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00030006'].geometry}
        material={materials['BuildingMat-00030.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00031006'].geometry}
        material={materials['BuildingMat-00031.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00032006'].geometry}
        material={materials['BuildingMat-00032.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00033006'].geometry}
        material={materials['BuildingMat-00033.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00034006'].geometry}
        material={materials['BuildingMat-00034.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00035006'].geometry}
        material={materials['BuildingMat-00035.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00036006'].geometry}
        material={materials['BuildingMat-00036.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00037006'].geometry}
        material={materials['BuildingMat-00037.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00038006'].geometry}
        material={materials['BuildingMat-00038.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00039006'].geometry}
        material={materials['BuildingMat-00039.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00040006'].geometry}
        material={materials['BuildingMat-00040.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00041006'].geometry}
        material={materials['BuildingMat-00041.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00042006'].geometry}
        material={materials['BuildingMat-00042.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00043006'].geometry}
        material={materials['BuildingMat-00043.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00044006'].geometry}
        material={materials['BuildingMat-00044.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00045006'].geometry}
        material={materials['BuildingMat-00045.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00046006'].geometry}
        material={materials['BuildingMat-00046.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00047006'].geometry}
        material={materials['BuildingMat-00047.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00048006'].geometry}
        material={materials['BuildingMat-00048.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00049006'].geometry}
        material={materials['BuildingMat-00049.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00050006'].geometry}
        material={materials['BuildingMat-00050.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00051006'].geometry}
        material={materials['BuildingMat-00051.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00052006'].geometry}
        material={materials['BuildingMat-00052.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00053006'].geometry}
        material={materials['BuildingMat-00053.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00054006'].geometry}
        material={materials['BuildingMat-00054.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00055006'].geometry}
        material={materials['BuildingMat-00055.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00056006'].geometry}
        material={materials['BuildingMat-00056.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00057006'].geometry}
        material={materials['BuildingMat-00057.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00058006'].geometry}
        material={materials['BuildingMat-00058.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00059006'].geometry}
        material={materials['BuildingMat-00059.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00060006'].geometry}
        material={materials['BuildingMat-00060.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00061006'].geometry}
        material={materials['BuildingMat-00061.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00062006'].geometry}
        material={materials['BuildingMat-00062.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00063006'].geometry}
        material={materials['BuildingMat-00063.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00064006'].geometry}
        material={materials['BuildingMat-00064.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00065006'].geometry}
        material={materials['BuildingMat-00065.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00066006'].geometry}
        material={materials['BuildingMat-00066.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00067006'].geometry}
        material={materials['BuildingMat-00067.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00068006'].geometry}
        material={materials['BuildingMat-00068.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00069006'].geometry}
        material={materials['BuildingMat-00069.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00070006'].geometry}
        material={materials['BuildingMat-00070.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00071006'].geometry}
        material={materials['BuildingMat-00071.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00072006'].geometry}
        material={materials['BuildingMat-00072.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00073006'].geometry}
        material={materials['BuildingMat-00073.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00074006'].geometry}
        material={materials['BuildingMat-00074.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00075006'].geometry}
        material={materials['BuildingMat-00075.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00076006'].geometry}
        material={materials['BuildingMat-00076.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00077006'].geometry}
        material={materials['BuildingMat-00077.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00078006'].geometry}
        material={materials['BuildingMat-00078.006']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00079004'].geometry}
        material={materials['BuildingMat-00079.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00080004'].geometry}
        material={materials['BuildingMat-00080.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00081004'].geometry}
        material={materials['BuildingMat-00081.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00082004'].geometry}
        material={materials['BuildingMat-00082.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00083004'].geometry}
        material={materials['BuildingMat-00083.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00084004'].geometry}
        material={materials['BuildingMat-00084.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00085004'].geometry}
        material={materials['BuildingMat-00085.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00086004'].geometry}
        material={materials['BuildingMat-00086.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00087004'].geometry}
        material={materials['BuildingMat-00087.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00088004'].geometry}
        material={materials['BuildingMat-00088.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00089004'].geometry}
        material={materials['BuildingMat-00089.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00090004'].geometry}
        material={materials['BuildingMat-00090.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00091004'].geometry}
        material={materials['BuildingMat-00091.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00092004'].geometry}
        material={materials['BuildingMat-00092.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00093004'].geometry}
        material={materials['BuildingMat-00093.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00094004'].geometry}
        material={materials['BuildingMat-00094.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00095004'].geometry}
        material={materials['BuildingMat-00095.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00096004'].geometry}
        material={materials['BuildingMat-00096.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00097004'].geometry}
        material={materials['BuildingMat-00097.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00098004'].geometry}
        material={materials['BuildingMat-00098.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00099004'].geometry}
        material={materials['BuildingMat-00099.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00100004'].geometry}
        material={materials['BuildingMat-00100.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00101004'].geometry}
        material={materials['BuildingMat-00101.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00102004'].geometry}
        material={materials['BuildingMat-00102.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00103004'].geometry}
        material={materials['BuildingMat-00103.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00104004'].geometry}
        material={materials['BuildingMat-00104.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00105004'].geometry}
        material={materials['BuildingMat-00105.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00106004'].geometry}
        material={materials['BuildingMat-00106.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00107004'].geometry}
        material={materials['BuildingMat-00107.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00108004'].geometry}
        material={materials['BuildingMat-00108.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00109004'].geometry}
        material={materials['BuildingMat-00109.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00110004'].geometry}
        material={materials['BuildingMat-00110.004']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00111003'].geometry}
        material={materials['BuildingMat-00111.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00112003'].geometry}
        material={materials['BuildingMat-00112.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00113003'].geometry}
        material={materials['BuildingMat-00113.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00114003'].geometry}
        material={materials['BuildingMat-00114.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00115003'].geometry}
        material={materials['BuildingMat-00115.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00116003'].geometry}
        material={materials['BuildingMat-00116.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00117003'].geometry}
        material={materials['BuildingMat-00117.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00118003'].geometry}
        material={materials['BuildingMat-00118.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00119003'].geometry}
        material={materials['BuildingMat-00119.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00120003'].geometry}
        material={materials['BuildingMat-00120.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00121003'].geometry}
        material={materials['BuildingMat-00121.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00122003'].geometry}
        material={materials['BuildingMat-00122.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00123003'].geometry}
        material={materials['BuildingMat-00123.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00124003'].geometry}
        material={materials['BuildingMat-00124.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00125003'].geometry}
        material={materials['BuildingMat-00125.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00126003'].geometry}
        material={materials['BuildingMat-00126.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00127003'].geometry}
        material={materials['BuildingMat-00127.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00128003'].geometry}
        material={materials['BuildingMat-00128.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00129003'].geometry}
        material={materials['BuildingMat-00129.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00130003'].geometry}
        material={materials['BuildingMat-00130.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00131003'].geometry}
        material={materials['BuildingMat-00131.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00132003'].geometry}
        material={materials['BuildingMat-00132.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00133003'].geometry}
        material={materials['BuildingMat-00133.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00134003'].geometry}
        material={materials['BuildingMat-00134.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00135003'].geometry}
        material={materials['BuildingMat-00135.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00136003'].geometry}
        material={materials['BuildingMat-00136.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00137003'].geometry}
        material={materials['BuildingMat-00137.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00138003'].geometry}
        material={materials['BuildingMat-00138.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00139003'].geometry}
        material={materials['BuildingMat-00139.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00140003'].geometry}
        material={materials['BuildingMat-00140.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00141003'].geometry}
        material={materials['BuildingMat-00141.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00142003'].geometry}
        material={materials['BuildingMat-00142.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00143003'].geometry}
        material={materials['BuildingMat-00143.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00144003'].geometry}
        material={materials['BuildingMat-00144.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00145003'].geometry}
        material={materials['BuildingMat-00145.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00146003'].geometry}
        material={materials['BuildingMat-00146.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00147003'].geometry}
        material={materials['BuildingMat-00147.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00148003'].geometry}
        material={materials['BuildingMat-00148.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00149003'].geometry}
        material={materials['BuildingMat-00149.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00150003'].geometry}
        material={materials['BuildingMat-00150.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00151003'].geometry}
        material={materials['BuildingMat-00151.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00152003'].geometry}
        material={materials['BuildingMat-00152.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00153003'].geometry}
        material={materials['BuildingMat-00153.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00154003'].geometry}
        material={materials['BuildingMat-00154.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00155003'].geometry}
        material={materials['BuildingMat-00155.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00156003'].geometry}
        material={materials['BuildingMat-00156.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00157003'].geometry}
        material={materials['BuildingMat-00157.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00158003'].geometry}
        material={materials['BuildingMat-00158.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00159003'].geometry}
        material={materials['BuildingMat-00159.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00160003'].geometry}
        material={materials['BuildingMat-00160.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00161003'].geometry}
        material={materials['BuildingMat-00161.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00162003'].geometry}
        material={materials['BuildingMat-00162.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00163003'].geometry}
        material={materials['BuildingMat-00163.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00164003'].geometry}
        material={materials['BuildingMat-00164.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00165003'].geometry}
        material={materials['BuildingMat-00165.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00166003'].geometry}
        material={materials['BuildingMat-00166.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00167003'].geometry}
        material={materials['BuildingMat-00167.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00168003'].geometry}
        material={materials['BuildingMat-00168.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00169003'].geometry}
        material={materials['BuildingMat-00169.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00170003'].geometry}
        material={materials['BuildingMat-00170.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00171003'].geometry}
        material={materials['BuildingMat-00171.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00172003'].geometry}
        material={materials['BuildingMat-00172.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00173003'].geometry}
        material={materials['BuildingMat-00173.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00174003'].geometry}
        material={materials['BuildingMat-00174.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00175003'].geometry}
        material={materials['BuildingMat-00175.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00176003'].geometry}
        material={materials['BuildingMat-00176.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00177003'].geometry}
        material={materials['BuildingMat-00177.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00178003'].geometry}
        material={materials['BuildingMat-00178.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00179003'].geometry}
        material={materials['BuildingMat-00179.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00180003'].geometry}
        material={materials['BuildingMat-00180.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00181003'].geometry}
        material={materials['BuildingMat-00181.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00182003'].geometry}
        material={materials['BuildingMat-00182.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00183003'].geometry}
        material={materials['BuildingMat-00183.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00184003'].geometry}
        material={materials['BuildingMat-00184.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00185003'].geometry}
        material={materials['BuildingMat-00185.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00186003'].geometry}
        material={materials['BuildingMat-00186.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00187003'].geometry}
        material={materials['BuildingMat-00187.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00188003'].geometry}
        material={materials['BuildingMat-00188.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00189003'].geometry}
        material={materials['BuildingMat-00189.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00190003'].geometry}
        material={materials['BuildingMat-00190.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00191003'].geometry}
        material={materials['BuildingMat-00191.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00192003'].geometry}
        material={materials['BuildingMat-00192.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00193003'].geometry}
        material={materials['BuildingMat-00193.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00194003'].geometry}
        material={materials['BuildingMat-00194.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00195003'].geometry}
        material={materials['BuildingMat-00195.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00196003'].geometry}
        material={materials['BuildingMat-00196.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00197003'].geometry}
        material={materials['BuildingMat-00197.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00198003'].geometry}
        material={materials['BuildingMat-00198.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00199003'].geometry}
        material={materials['BuildingMat-00199.003']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00200002'].geometry}
        material={materials['BuildingMat-00200.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00201002'].geometry}
        material={materials['BuildingMat-00201.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00202002'].geometry}
        material={materials['BuildingMat-00202.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00203002'].geometry}
        material={materials['BuildingMat-00203.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00204002'].geometry}
        material={materials['BuildingMat-00204.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00205002'].geometry}
        material={materials['BuildingMat-00205.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00206002'].geometry}
        material={materials['BuildingMat-00206.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00207002'].geometry}
        material={materials['BuildingMat-00207.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00208002'].geometry}
        material={materials['BuildingMat-00208.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00209002'].geometry}
        material={materials['BuildingMat-00209.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00210002'].geometry}
        material={materials['BuildingMat-00210.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00211002'].geometry}
        material={materials['BuildingMat-00211.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00212002'].geometry}
        material={materials['BuildingMat-00212.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00213002'].geometry}
        material={materials['BuildingMat-00213.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00214002'].geometry}
        material={materials['BuildingMat-00214.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00215002'].geometry}
        material={materials['BuildingMat-00215.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00216002'].geometry}
        material={materials['BuildingMat-00216.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00217002'].geometry}
        material={materials['BuildingMat-00217.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00218002'].geometry}
        material={materials['BuildingMat-00218.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00219002'].geometry}
        material={materials['BuildingMat-00219.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00220002'].geometry}
        material={materials['BuildingMat-00220.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00221002'].geometry}
        material={materials['BuildingMat-00221.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00222002'].geometry}
        material={materials['BuildingMat-00222.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00223002'].geometry}
        material={materials['BuildingMat-00223.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00224002'].geometry}
        material={materials['BuildingMat-00224.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00225002'].geometry}
        material={materials['BuildingMat-00225.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00226002'].geometry}
        material={materials['BuildingMat-00226.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00227002'].geometry}
        material={materials['BuildingMat-00227.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00228002'].geometry}
        material={materials['BuildingMat-00228.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00229002'].geometry}
        material={materials['BuildingMat-00229.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00230002'].geometry}
        material={materials['BuildingMat-00230.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00231002'].geometry}
        material={materials['BuildingMat-00231.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00232002'].geometry}
        material={materials['BuildingMat-00232.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00233002'].geometry}
        material={materials['BuildingMat-00233.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00234002'].geometry}
        material={materials['BuildingMat-00234.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00235002'].geometry}
        material={materials['BuildingMat-00235.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00236002'].geometry}
        material={materials['BuildingMat-00236.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00237002'].geometry}
        material={materials['BuildingMat-00237.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00238002'].geometry}
        material={materials['BuildingMat-00238.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00239002'].geometry}
        material={materials['BuildingMat-00239.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00240002'].geometry}
        material={materials['BuildingMat-00240.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00241002'].geometry}
        material={materials['BuildingMat-00241.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00242002'].geometry}
        material={materials['BuildingMat-00242.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00243002'].geometry}
        material={materials['BuildingMat-00243.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00244002'].geometry}
        material={materials['BuildingMat-00244.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00245002'].geometry}
        material={materials['BuildingMat-00245.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00246002'].geometry}
        material={materials['BuildingMat-00246.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00247002'].geometry}
        material={materials['BuildingMat-00247.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00248002'].geometry}
        material={materials['BuildingMat-00248.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00249002'].geometry}
        material={materials['BuildingMat-00249.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00250002'].geometry}
        material={materials['BuildingMat-00250.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00251002'].geometry}
        material={materials['BuildingMat-00251.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00252002'].geometry}
        material={materials['BuildingMat-00252.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00253002'].geometry}
        material={materials['BuildingMat-00253.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00254002'].geometry}
        material={materials['BuildingMat-00254.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00255002'].geometry}
        material={materials['BuildingMat-00255.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00256002'].geometry}
        material={materials['BuildingMat-00256.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00257002'].geometry}
        material={materials['BuildingMat-00257.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00258002'].geometry}
        material={materials['BuildingMat-00258.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00259002'].geometry}
        material={materials['BuildingMat-00259.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00260002'].geometry}
        material={materials['BuildingMat-00260.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00261002'].geometry}
        material={materials['BuildingMat-00261.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00262002'].geometry}
        material={materials['BuildingMat-00262.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00263002'].geometry}
        material={materials['BuildingMat-00263.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00264002'].geometry}
        material={materials['BuildingMat-00264.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00265002'].geometry}
        material={materials['BuildingMat-00265.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00266002'].geometry}
        material={materials['BuildingMat-00266.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00267002'].geometry}
        material={materials['BuildingMat-00267.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00268002'].geometry}
        material={materials['BuildingMat-00268.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00269002'].geometry}
        material={materials['BuildingMat-00269.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00270002'].geometry}
        material={materials['BuildingMat-00270.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00271002'].geometry}
        material={materials['BuildingMat-00271.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00272002'].geometry}
        material={materials['BuildingMat-00272.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00273002'].geometry}
        material={materials['BuildingMat-00273.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00274002'].geometry}
        material={materials['BuildingMat-00274.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00275002'].geometry}
        material={materials['BuildingMat-00275.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00276002'].geometry}
        material={materials['BuildingMat-00276.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00277002'].geometry}
        material={materials['BuildingMat-00277.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00278002'].geometry}
        material={materials['BuildingMat-00278.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00279002'].geometry}
        material={materials['BuildingMat-00279.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00280002'].geometry}
        material={materials['BuildingMat-00280.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00281002'].geometry}
        material={materials['BuildingMat-00281.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00282002'].geometry}
        material={materials['BuildingMat-00282.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00283002'].geometry}
        material={materials['BuildingMat-00283.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00284002'].geometry}
        material={materials['BuildingMat-00284.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00285002'].geometry}
        material={materials['BuildingMat-00285.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00286002'].geometry}
        material={materials['BuildingMat-00286.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00287002'].geometry}
        material={materials['BuildingMat-00287.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00288002'].geometry}
        material={materials['BuildingMat-00288.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00289002'].geometry}
        material={materials['BuildingMat-00289.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00290002'].geometry}
        material={materials['BuildingMat-00290.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00291002'].geometry}
        material={materials['BuildingMat-00291.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00292002'].geometry}
        material={materials['BuildingMat-00292.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00293002'].geometry}
        material={materials['BuildingMat-00293.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00294002'].geometry}
        material={materials['BuildingMat-00294.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00295002'].geometry}
        material={materials['BuildingMat-00295.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00296002'].geometry}
        material={materials['BuildingMat-00296.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00297002'].geometry}
        material={materials['BuildingMat-00297.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00298002'].geometry}
        material={materials['BuildingMat-00298.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00299002'].geometry}
        material={materials['BuildingMat-00299.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00300002'].geometry}
        material={materials['BuildingMat-00300.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00301002'].geometry}
        material={materials['BuildingMat-00301.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00302002'].geometry}
        material={materials['BuildingMat-00302.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00303002'].geometry}
        material={materials['BuildingMat-00303.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00304002'].geometry}
        material={materials['BuildingMat-00304.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00305002'].geometry}
        material={materials['BuildingMat-00305.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00306002'].geometry}
        material={materials['BuildingMat-00306.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00307002'].geometry}
        material={materials['BuildingMat-00307.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00308002'].geometry}
        material={materials['BuildingMat-00308.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00309002'].geometry}
        material={materials['BuildingMat-00309.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00310002'].geometry}
        material={materials['BuildingMat-00310.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00311002'].geometry}
        material={materials['BuildingMat-00311.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00312002'].geometry}
        material={materials['BuildingMat-00312.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00313002'].geometry}
        material={materials['BuildingMat-00313.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00314002'].geometry}
        material={materials['BuildingMat-00314.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00315002'].geometry}
        material={materials['BuildingMat-00315.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00316002'].geometry}
        material={materials['BuildingMat-00316.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00317002'].geometry}
        material={materials['BuildingMat-00317.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00318002'].geometry}
        material={materials['BuildingMat-00318.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00319002'].geometry}
        material={materials['BuildingMat-00319.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00320002'].geometry}
        material={materials['BuildingMat-00320.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00321002'].geometry}
        material={materials['BuildingMat-00321.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00322002'].geometry}
        material={materials['BuildingMat-00322.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00323002'].geometry}
        material={materials['BuildingMat-00323.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00324002'].geometry}
        material={materials['BuildingMat-00324.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00325002'].geometry}
        material={materials['BuildingMat-00325.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['BuildingMesh-00326002'].geometry}
        material={materials['BuildingMat-00326.002']}
        position={[6104.53, -628.42, 1816.85]}
        rotation={[Math.PI / 2, 0, 2.96]}
        scale={[1078.54, 1078.54, 897.42]}
      />
    </group>
  )
}

useGLTF.preload('/GoogleEarth2.glb')
