import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";

type GLTFResult = GLTF & {
    nodes: {
        board: THREE.Mesh;
    };
    materials: {
        mat8: THREE.MeshStandardMaterial;
        mat10: THREE.MeshStandardMaterial;
        mat15: THREE.MeshStandardMaterial;
        mat16: THREE.MeshStandardMaterial;
        mat18: THREE.MeshStandardMaterial;
        mat19: THREE.MeshStandardMaterial;
        mat21: THREE.MeshStandardMaterial;
        mat23: THREE.MeshStandardMaterial;
        mat25: THREE.MeshStandardMaterial;
    };
};

export default function Model(props) {
    const group = useRef();
    const {nodes, materials} = useGLTF("../public/Tank.glb") as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh"].geometry}
                material={materials.mat18}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_1"].geometry}
                material={materials.mat21}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_2"].geometry}
                material={materials.mat25}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_3"].geometry}
                material={materials.mat19}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_4"].geometry}
                material={materials.mat10}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_5"].geometry}
                material={materials.mat16}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_6"].geometry}
                material={materials.mat23}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_7"].geometry}
                material={materials.mat8}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes["Node-Mesh_8"].geometry}
                material={materials.mat15}
            />
        </group>
    );
}

useGLTF.preload("/Tank.glb");
