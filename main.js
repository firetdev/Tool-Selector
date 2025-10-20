// Tool component
const Tool = ({ value, id, toolSelected, selectTool }) => {
    const toolNumber = parseInt(id.replace(/^tool/, ''), 10);  // Extract tool number from id
    const [isHovered, setIsHovered] = React.useState(false);  // State to track hover

    let backgroundColor = '#ffffffff';
    if (toolSelected === toolNumber) 
        backgroundColor = '#dededeff';  // Selected color
    if (isHovered)
        backgroundColor = '#e0e0e0ff';  // Hover color

    return (
        <div
            id={id}
            className="tool"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => selectTool(id)}
            style={{
                display: 'inline-block',
                width: '30px',
                height: '30px',
                padding: '10px 10px',
                margin: '5px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                textAlign: 'center',
                userSelect: 'none',
                backgroundColor: {backgroundColor},
            }}
        >
            {value}
        </div>
    );
};

// Main App component
const App = () => {
    const [toolSelected, setToolSelected] = React.useState(1);

    const selectTool = (id) => {
        const toolNumber = parseInt(id.replace(/^tool/, ''), 10);  // Extract tool number from id
        setToolSelected(toolNumber);
    };

    return (
        <>
            <Tool value='1' id='tool1' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='2' id='tool2' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='3' id='tool3' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='4' id='tool4' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='5' id='tool5' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='6' id='tool6' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='7' id='tool7' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='8' id='tool8' toolSelected={toolSelected} selectTool={selectTool} />
            <Tool value='9' id='tool9' toolSelected={toolSelected} selectTool={selectTool} />
        </>
    );
};

// Render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);