// モデルの読み込み
import { useEffect } from 'react';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';
import { MMDAnimationHelper } from 'three/addons/animation/MMDAnimationHelper.js';
import { useFrame, useThree } from '@react-three/fiber';
import { DoubleSide, Object3D } from 'three';

type MMDModelProps = {
    modelPath: string; // 読み込むモデルのパス（親コンポーネントから渡される）
    onModelLoad?: (model: Object3D) => void; // モデルが読み込まれた後に呼び出すコールバック関数
};

const MMDModel = ({ modelPath, onModelLoad }: MMDModelProps) => {
    const { scene } = useThree();
    const helper = new MMDAnimationHelper();

    useEffect(() => {
        const loader = new MMDLoader();
        loader.load(
            modelPath,
            (loadedModel: Object3D) => {
                loadedModel.scale.set(0.1, 0.1, 0.1);
                loadedModel.position.set(0, 0, 0);
                scene.add(loadedModel);
                // メッシュのマテリアルをトラバースして透明度を解除
                loadedModel.traverse((child) => {
                    if (child.isMesh) {
                        // 透明度を強制的に無効化
                        child.material.transparent = false;
                        child.material.opacity = 1;
                        child.visible = true; // 常に表示
                        console.log(child.material); // マテリアルを確認
                        child.material.side = DoubleSide; // 両面描画を有効にする
                        console.log('Material:', child.material); // マテリアル全体を確認
                        if (child.material.map) {
                            console.log(
                                'Texture map is loaded:',
                                typeof child.material.map
                            ); // テクスチャがロードされているか確認
                        } else {
                            console.log('No texture map found');
                        }
                    }
                });
                console.log('Model loaded:', loadedModel);

                if (onModelLoad) {
                    onModelLoad(loadedModel);
                }
            },
            (xhr) => {
                console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
            },
            (error) => {
                console.error('Error loading model:', error);
            }
        );
    }, [modelPath, scene]);
    // フレームごとのレンダリングループ
    useFrame(({ clock }) => {
        helper.update(clock.getDelta()); // アニメーションの更新
        console.log('Model is in the scene:', scene.children);
    });
    return null;
};

export default MMDModel;
