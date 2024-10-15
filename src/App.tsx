import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import MmdModel from './components/MmdModel';

const App: React.FC = () => {
    return (
        <Canvas>
            <ambientLight intensity={100} />
            <OrbitControls />
            <MmdModel url="./assets/models/hoge.pmx" />
        </Canvas>
    );
};

export default App;
