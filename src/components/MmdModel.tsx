// モデルの読み込みと表示
import { useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';
import { Object3D } from 'three';

type MMDModelProps = {
    modelPath: string; // 読み込むモデルのパス（親コンポーネントから渡される）
    // onModelLoad: (model: Object3D) => void; // モデルが読み込まれた後に呼び出すコールバック関数
};

const MMDModel = ({ modelPath }: MMDModelProps) => {
    const model = useLoader(MMDLoader, modelPath) as Object3D; // MMDモデルをロード

    useEffect(() => {
        if (model) {
        }
    }, [model]);

    return model ? <primitive object={model} /> : null; // モデルをシーンに描画
};

export default MMDModel;
