let toolSelected = 1;  // Tool currently in use

// Tool component
const Tool = ({ value, id }) => {
    return (
        <div
            id={id}
            className="tool"
            style={{
                display: 'inline-block',
                padding: '10px 20px',
                margin: '5px',
                border: '1px solid #000',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'center',
                userSelect: 'none',
            }}
        >
            {value}
        </div>
    );
};

// Main App component
const App = () => {
    return (
        <>
            <Tool value='1' id='tool1' />
        </>
    );
};

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);