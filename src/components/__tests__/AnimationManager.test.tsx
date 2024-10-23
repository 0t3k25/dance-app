// confirm read animationfile
// confirm action MMDAnimationhelper
// confirm play and stop animation
import { render } from '@testing-library/react';
import AnimationManager from '../AnimationManager';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';
import { Object3D } from 'three';

// MMDLoaderとMMDAnimationHelperをモック（仮の動作を再現する）
jest.mock('three/addons/loaders/MMDLoader.js', () => {
    return {
        MMDLoader: jest.fn().mockImplementation(() => ({
            loadAnimation: jest.fn((vmdPath, model, callback) => {
                const animation = { duration: 100 };
                callback(animation); // 仮のアニメーションデータを返す
            }),
        })),
    };
});

jest.mock('three/addons/animation/MMDAnimationHelper.js', () => {
    return {
        MMDAnimationHelper: jest.fn().mockImplementation(() => ({
            add: jest.fn(),
            update: jest.fn(),
            remove: jest.fn(),
        })),
    };
});

describe('AnimationManager', () => {
    const mockModel = new Object3D(); // モックの3Dオブジェクト

    it('loads and applies animation', () => {
        // コンポーネントのレンダリング
        render(
            <AnimationManager
                model={mockModel}
                vmdPath="/animations/test.vmd"
                playing={true}
            />
        );

        // アニメーションが適用されることを確認
        expect(MMDLoader.prototype.loadAnimation).toHaveBeenCalledWith(
            '/animations/test.vmd',
            mockModel,
            expect.any(Function)
        );
    });

    it('starts and stops the animation correctly', async () => {
        // アニメーションの再生と停止のテスト
        const { rerender } = render(
            <AnimationManager
                model={mockModel}
                vmdPath="/animations/test.vmd"
                playing={true}
            />
        );
        expect(MMDAnimationHelper.prototype.add).toHaveBeenCalledWith(
            mockModel,
            expect.any(Object)
        );

        // 再レンダリングで停止
        rerender(
            <AnimationManager
                model={mockModel}
                vmdPath="/animations/test.vmd"
                playing={false}
            />
        );
        expect(MMDAnimationHelper.prototype.remove).toHaveBeenCalledWith(
            mockModel
        );
    });
});
