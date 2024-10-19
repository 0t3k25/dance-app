import SceneSetup from './components/SceneSetup';
import MmdModel from './components/MmdModel';
import './index.css';

const App = () => {
    return (
        <SceneSetup>
            <MmdModel modelPath="/assets/models/Black.pmx" />
        </SceneSetup>
    );
};

export default App;
