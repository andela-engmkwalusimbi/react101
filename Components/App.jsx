import React, {Component} from 'react';

class App extends Component {
    render(){
        var myStyle = {
            fontSize: 100,
            color: '#ccce63'
        }
        return (
            <div>
                <h1 style={myStyle}>Heading</h1>
                <p>Paragraph one</p>
            </div>
        );
    }
}

export default App;