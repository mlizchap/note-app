import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            html: ['<h1>first header</h1>', '<p>first para</p>'],
            currentPos: 0,
            default: true
         };
    }
    addHeader = (event, index) => {
        this.setState({ html: [...this.state.html, '<h1>edit header</h1>', '<p>edit para</p>']})
    }
    handleChange = (index, e) => { }
    
    changePosition = (index, e) => {
        this.setState({ currentPos: index});
    }
    handleEnterPress = (index, e) => {
        if (e.key === 'Enter') {
            //console.log('new para')
        }
    }
    render() {
        return (
            <div>
                <div className="buttons">
                    <button onClick={this.addHeader}>New Header</button>
                    <button>Add Code</button>
                    <button>Highlight</button>
                </div>
                <div className="body">
                    {this.state.html.map((i, index) => {
                        return <ContentEditable 
                                    key={index}
                                    html={i}
                                    disabled={false}
                                    onClick={(e) => this.changePosition(index, e)}
                                    onChange={(e) => this.handleChange(index, e)}
                                    onKeyPress={(e) => this.handleEnterPress(index, e)}
                                />        
                    })}
         
                </div>
            </div>
        );
    }
}

export default Note;