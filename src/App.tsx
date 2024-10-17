import { Canvas } from '@react-three/fiber'; // react-three-fiberのCanvas
import { OrbitControls } from '@react-three/drei'; // カメラの操作を簡単にするためのOrbitControls
import MMDModel from './components/MmdModel';

const App = () => {
    return (
        <Canvas camera={{ position: [0, 10, 30], fov: 50 }}>
            {/* 照明 */}
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 10]} intensity={1} />

            {/* カメラ操作 */}
            <OrbitControls />

            {/* MMDモデルを表示 */}
            <MMDModel modelPath="../public/models/hoge.pmx" />
        </Canvas>
    );
};

export default App;
