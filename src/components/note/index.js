import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            note: [{ type: 'h1', pos: 0, html: 'header', touched: false }],
         };
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
                    {this.state.note.map((note, index) => {
                        return <ContentEditable 
                                    key={index}
                                    html={`<${note.type}>${note.html}</${note.type}`}
                                    disabled={false}
                                />        
                    })}
         
                </div>
            </div>
        );
    }
}

export default Note;