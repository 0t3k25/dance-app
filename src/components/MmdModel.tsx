// MMDモデルを読み込むコンポーネント
import React, { useState, useEffect } from 'react';
import { Object3D } from 'three';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';

interface MmdModelUrl {
    url: string;
}

const MmdModle: React.FC<MmdModelUrl> = ({ url }) => {
    const [model, setModel] = useState<Object3D | null>(null);

    useEffect(() => {
        const loader = new MMDLoader();
        loader.load(url, (loadedModel: Object3D) => {
            setModel(loadedModel);
        });
    }, [url]);

    return model ? <primitive object={model} dispose={null} /> : null;
};

export default MmmdModel;
