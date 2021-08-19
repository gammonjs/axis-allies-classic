import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
    nodes: {
        Plane: THREE.Mesh;
    };
    materials: {
        "Material.007": THREE.MeshStandardMaterial;
    };
};

function WestIndiesWaterTile(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('../public/west-indies-water-tile.glb') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.007']}
        position={[-2.05, 0, -1.1]}
      />
    </group>
  )
}

useGLTF.preload('/west-indies-water-tile.glb')

export default WestIndiesWaterTile;
