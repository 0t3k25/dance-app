// Three.jsのシーンやカメラ、レンダラーのセットアップ
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { GridHelper } from 'three';

type SceneSetupProps = {
    children: React.ReactNode;
};

const SceneSetup = ({ children }: SceneSetupProps) => {
    return (
        <Canvas
            style={{ background: 'skyblue', width: '100vw', height: '100vh' }} // ビューポート全体に広げる
            camera={{ position: [0, 10, 30] }}
        >
            <ambientLight intensity={1.5} />
            <directionalLight intensity={2.5} position={[10, 10, 10]} />
            <OrbitControls />
            <Suspense fallback={null}>{children}</Suspense>
            {/* グリッドヘルパーの追加 */}
            <primitive object={new GridHelper(50, 50)} />
        </Canvas>
    );
};

export default SceneSetup;
