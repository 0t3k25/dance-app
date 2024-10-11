import './App.css';

type AppProps = {
    subject: string;
};

function App(props: AppProps) {
    console.log(props);
    return (
        <>
            <header>
                <h1>Hello, {props.subject}!</h1>
                <button type="button" className="primary">
                    Click me!
                </button>
            </header>
        </>
    );
}

export default App;
