import React, {Component} from 'react';

import Content from './Content.jsx';
import Header from './Header.jsx';

class App extends Component {
    render(){
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default App;