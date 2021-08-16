import React, {useRef} from "react";
import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {useLoader} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Suspense} from "react";

// import React, { useRef } from 'react'
import {useGLTF} from "@react-three/drei";
import {GLTF} from "three/examples/jsm/loaders/GLTFLoader";
import Tank from "components/Tank";

type GLTFResult = GLTF & {
    nodes: {
        board: THREE.Mesh;
    };
    materials: {
        board: THREE.MeshStandardMaterial;
    };
};

function Model(props) {
    const group = useRef();
    // const { nodes, materials } = useGLTF('../public/Board.glb') as GLTFResult
    const {nodes, materials} = useGLTF("../public/Board.glb") as GLTFResult;
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.board.geometry}
                material={materials.board}
                position={[-0.0, 0.0, -0.25]}
                rotation={[1.4, 0.0, 0]}
                scale={[6.75, 4.37, 6.26]}
                onClick={(event) => console.log(event)}
            />
        </group>
    );
}

useGLTF.preload("/Board.glb");

const App: React.FC = () => {
    return (
        <div className="App">
            <Canvas>
                <Suspense fallback={null}>
                    <Model />
                    <Tank position={[-0.0, 0.0, 0.0]} rotation={[1.4, 0.0, 0]} />
                    <OrbitControls />
                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default App;
