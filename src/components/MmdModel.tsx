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
        loader.load(
            'hoge.pmx',
            (loadedModel: Object3D) => {
                console.log('Model loaded:', loadedModel); // デバッグ用ログ
                setModel(loadedModel);
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded'); // ロード進捗
            },
            (error) => {
                console.error('Error loading model:', error); // 基本的なエラーログ
                console.error(
                    'Error details:',
                    error.message || 'No message available'
                ); // エラーメッセージ
                console.error(
                    'Stack trace:',
                    error.stack || 'No stack trace available'
                ); // スタックトレース
                console.error('Error object:', JSON.stringify(error, null, 2)); // エラーオブジェクトの全体を表示
            }
        );
    }, [url]);

    return model ? <primitive object={model} dispose={null} /> : null;
};

export default MmdModle;
