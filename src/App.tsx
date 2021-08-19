import React from "react";
import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {Suspense} from "react";

import Tank from "components/Tank";
import EasternCanadaWater from "components/EasternCanadaWater";
import WestIndiesWaterTile from "components/WestIndiesWaterTile";
import WestIndiesLandTile from "components/WestIndiesLandTile";
import EastCanadaLand from "components/EastCanadaLand";
import EastUsaLand from "components/EastUsaLand";

const App: React.FC = () => {
    return (
        <div className="App">
            <Canvas>
                <Suspense fallback={null}>
                    {/* <Model /> */}
                    <Tank position={[-0.0, 0.0, 0.06]} rotation={[1.4, 0.0, 0]} scale={[0.25,0.25,0.25]} onClick={() => console.log("Tank")}/>
                    <WestIndiesWaterTile rotation={[1.0, 0.0, 0]} scale={[1.0,1.0,1.0]} onClick={() => alert("West Indies Water Tile")} />
                    <WestIndiesLandTile rotation={[1.0, 0.0, 0]} scale={[1.0,1.0,1.0]} onClick={() => alert("West Indies Land Tile")} />
                    <EasternCanadaWater rotation={[1.0, 0.0, 0]} scale={[1.0,1.0,1.0]} onClick={() => alert("East Canada Water Tile")} />
                    <EastCanadaLand rotation={[1.0, 0.0, 0]} scale={[1.0,1.0,1.0]} onClick={() => alert("East Canada Land Tile")} />
                    <EastUsaLand rotation={[1.0, 0.0, 0]} scale={[1.0,1.0,1.0]} onClick={() => alert("East USA Land Tile")} />
                    <OrbitControls />
                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default App;
