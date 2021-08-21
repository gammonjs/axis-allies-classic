import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

export interface Zone {
    name: string;
    asset: string;
}

type GLTFResult = GLTF & {
    nodes: {
        Plane: THREE.Mesh;
    };
    materials: {
        "Material.007": THREE.MeshStandardMaterial;
    };
};

function Tile(props: Zone) {
    const group = useRef();
    const {nodes, materials} = useGLTF("../public/" + props.asset) as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane.geometry}
                material={materials["Material.007"]}
                rotation={[1.0, 0.0, 0]}
                scale={[0.5, 0.5, 0.5]}
                position={[-2.05, 3.5, -1.1]}
                onClick={() => alert(props.name)}
            />
        </group>
    );
}

useGLTF.preload("/east-canada-land.glb");

export default Tile;
