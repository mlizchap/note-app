import React, { Component } from 'react';

class ParseHTML extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            content: '<h1>this is a header</h1><p>first para</p><p>second para</p>'
         };
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ParseHTML;