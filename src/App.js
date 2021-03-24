import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Welcome!</h1>
                </header>
            </div>
        );
    }
}

export default App;
