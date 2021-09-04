import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
    nodes: {
        Cube: THREE.Mesh;
    };
    materials: {
        "Material.002": THREE.MeshStandardMaterial;
    };
};

function Infantry(props) {
    const group = useRef();
    const {nodes, materials} = useGLTF("../public/ortho-man.glb") as GLTFResult;
    return (
        <group ref={group} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials["Material.002"]}
                rotation={[1.0, 0.0, 0]}
                scale={[0.15, 0.15, 0.15]}
                position={[0, 0, 1.4]}
            />
        </group>
    );
}

export default Infantry;
