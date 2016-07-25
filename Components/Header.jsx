import React, {Component} from 'react';

class Header extends Component {

    render () {
        var myStyle = {
            fontSize: 100,
            color: '#ccce63'
        }
        
        return (
            <div>
                <h1 style={myStyle}>Header</h1>
            </div>
        );
    }
}

export default Header;