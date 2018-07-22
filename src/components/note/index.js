import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'


class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            note: [{ type: 'h1', pos: 0, content: 'header', touched: false }],
         };
    }
    handleEdit = (e, content) => {
        
    }
    handleChange = (e, content, index) => {
        //console.log(e.currentTarget.innerText)
        const note = this.state.note;
        note[index].content = e.currentTarget.innerText
        this.setState({ note: note })
        
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
                                    html={`<${note.type}>${note.content}</${note.type}>`}
                                    disabled={false}
                                    onChange={(e) => this.handleChange(e, note.content, index)}
                                    onClick={(e) => this.handleEdit(e, note.index, note.content)}
                                />        
                    })}
         
                </div>
            </div>
        );
    }
}

export default Note;