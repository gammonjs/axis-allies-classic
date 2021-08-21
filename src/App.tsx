import React from "react";
import "./styles.css";
import {Canvas} from "@react-three/fiber";
import {Environment, OrbitControls} from "@react-three/drei";
import {Suspense} from "react";

import Tank from "components/Tank";
import Tile, {Zone} from "components/Tile";

const Tiles: Array<Zone> = [
    {
        name: "Eastern Canada Sea Zone",
        asset: "eastern-canada-sea.gltf"
    },
    {
        name: "Eastern Canada",
        asset: "eastern-canada.gltf"
    },
    {
        name: "Eastern USA",
        asset: "eastern-usa.gltf"
    },
    {
        name: "Eastern USA Sea Zone",
        asset: "eastern-usa-sea.gltf"
    },
    {
        name: "North Atlantic Sea Zone",
        asset: "north-atlantic-sea.gltf"
    },
    {
        name: "South Atlantic Sea Zone",
        asset: "south-atlantic-sea.gltf"
    },
    {
        name: "Far South Atlantic Sea Zone",
        asset: "far-south-atlantic-sea.gltf"
    },
    {
        name: "Belgian Congo Sea Zone",
        asset: "belgian-congo-sea.gltf"
    },
    {
        name: "North Brazil Sea Zone",
        asset: "north-brazil-sea.gltf"
    },
    {
        name: "Western Panama Sea Zone",
        asset: "western-panama-sea.gltf"
    },
    {
        name: "Eastern Panama Sea Zone",
        asset: "eastern-panama-sea.gltf"
    },
    {
        name: "Panama",
        asset: "panama.gltf"
    },
    {
        name: "Brazil",
        asset: "brazil.gltf"
    },
    {
        name: "Peru",
        asset: "peru.gltf"
    },
    {
        name: "Argentina Chile",
        asset: "argentina-chile.gltf"
    },
    {
        name: "West Argentina Chile Sea Zone",
        asset: "west-argentina-chile-sea.gltf"
    },
    {
        name: "East Argentina Chile Sea Zone",
        asset: "east-argentina-chile-sea.gltf"
    },
    {
        name: "South Argentina Chile Sea Zone",
        asset: "south-argentina-chile-sea.gltf"
    },
    {
        name: "South Brazil Sea Zone",
        asset: "south-brazil-sea.gltf"
    },
    {
        name: "West Indies",
        asset: "west-indies.gltf"
    },
    {
        name: "Venezuela Columbia",
        asset: "venezuela-columbia.gltf"
    },
    {
        name: "Karelia Sea Zone",
        asset: "karelia-sea.gltf"
    },
    {
        name: "Karelia",
        asset: "karelia.gltf"
    },
    {
        name: "Caucasus",
        asset: "caucasus.gltf"
    },
    {
        name: "United Kingdom Sea Zone",
        asset: "united-kingdom-sea.gltf"
    },
    {
        name: "United Kingdom",
        asset: "united-kingdom.gltf"
    },
    {
        name: "Eire",
        asset: "eire.gltf"
    },
    {
        name: "Finland Norway",
        asset: "finland-norway.gltf"
    },
    {
        name: "Sweden",
        asset: "sweden.gltf"
    },
    {
        name: "Baltic Sea Zone",
        asset: "baltic-sea.gltf"
    },
    {
        name: "Spain Sea Zone",
        asset: "spain-sea.gltf"
    },
    {
        name: "Spain",
        asset: "spain.gltf"
    },
    {
        name: "Gibraltar",
        asset: "gibraltar.gltf"
    },
    {
        name: "Western Europe",
        asset: "western-europe.gltf"
    },
    {
        name: "Switzerland",
        asset: "switzerland.gltf"
    },
    {
        name: "Germany",
        asset: "germany.gltf"
    },
    {
        name: "Southern Europe",
        asset: "southern-europe.gltf"
    },
    {
        name: "Eastern Europe",
        asset: "eastern-europe.gltf"
    },
    {
        name: "Ukraine",
        asset: "ukraine.gltf"
    },
    {
        name: "Western Mediteraninan Sea Zone",
        asset: "western-med-sea.gltf"
    },
    {
        name: "Central Mediteraninan Sea Zone",
        asset: "central-med-sea.gltf"
    },
    {
        name: "Northen Mediteraninan Sea Zone",
        asset: "northern-med-sea.gltf"
    },
    {
        name: "Southen Mediteraninan Sea Zone",
        asset: "southern-med-sea.gltf"
    },
    {
        name: "Algeria",
        asset: "algeria.gltf"
    },
    {
        name: "Libya",
        asset: "libya.gltf"
    },
    {
        name: "French West Africa",
        asset: "french-west-africa.gltf"
    },
    {
        name: "Rio De Oro",
        asset: "rio-de-oro.gltf"
    },
    {
        name: "French Equatorial Africa",
        asset: "french-equatorial-africa.gltf"
    },
    {
        name: "French West Africa Sea Zone",
        asset: "french-west-africa-sea.gltf"
    },
    {
        name: "Belgian Congo",
        asset: "belgian-congo.gltf"
    },
    {
        name: "Turkey",
        asset: "turkey.gltf"
    }
];

const App: React.FC = () => {
    return (
        <div className="App">
            <Canvas>
                <Suspense fallback={null}>
                    {/* <Model /> */}
                    {/* <Tank
                        position={[-0.0, 0.0, 0.06]}
                        rotation={[1.4, 0.0, 0]}
                        scale={[0.25, 0.25, 0.25]}
                        onClick={() => console.log("Tank")}
                    /> */}
                    {Tiles.map((zone) => (
                        <Tile {...zone} />
                    ))}

                    <OrbitControls />
                    <Environment preset="sunset" />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default App;
