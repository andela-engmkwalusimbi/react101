import React, {Component} from 'react';

import Content from './Content.jsx';
import Header from './Header.jsx';
import TableRow from './TableRow.jsx';

class App extends Component {

    constructor() {
        super();
        this.state = {
            data: [
                {
                    id: 1,
                    name: 'Joe',
                    age: 20
                },
                {
                    id: 2,
                    name: 'Joachim',
                    age: 30
                },
                {
                    id: 3,
                    name: 'Janet',
                    age: 23
                }
            ]
        }
    }

    render(){
        return (
            <div>
                <Header/>
                <Content/>
                <table>
                    <tbody>
                        {this.state.data.map((person, index) =>
                            <TableRow key={index} data={person} />
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;