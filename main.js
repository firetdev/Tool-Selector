let toolSelected = 1;  // Tool currently in use

// Function to select a tool
const selectTool = (id) => {
    const idNum = id.replace(/^tool/, '');  // Get only the tool number
    toolSelected = parseInt(idNum, 10);  // Convert to number
};

// Tool component
const Tool = ({ value, id }) => {
    return (
        <div
            id={id}
            className="tool"
            onClick={() => selectTool(id)}
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
            <Tool value='2' id='tool2' />
            <Tool value='3' id='tool3' />
        </>
    );
};

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);