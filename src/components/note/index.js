import React, { Component } from 'react';
import ContentEditable from 'react-contenteditable'
import styled from 'styled-components'

import EditableContent from '../EditableContent';
import Para from '../Para';
import './style.css';


class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: true,
            content: 'test'
        }
    }
    changeEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }
    updateContent = (e) => {
        this.setState({ content: e.target.value})
    }
    handleEdit = (e) => {
        console.log(e.target.value)
    }
    createOutput = (e) => {
        var input = e.target.value
        var start = 0;
        for (var i = 0; i < input.length; i++) {
            if (input[i] === "\n") {
                input.slice(start, i);
                start = i;
            }
        }
        console.log(input.slice(start))
    }
    render() {
        return (
            <div>
                <Para 
                    edit={this.state.editMode}
                    content={this.state.content}
                    handleEdit={this.changeEditMode}
                    handleContent={this.updateContent}
                    handleCreateOutput={this.createOutput}
                />
            </div>
        )
    }
    
}

// class Note extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             html: '<p>test</p>',
//             note: [
//                 { type: 'h1', content: 'header', html: '<h1>new header</h1><div>content here</div>', touched: false },
//                 // { type: 'p', content: 'paragraph', touched: false }
//             ],
//             //currentParaValue
//          };
//     }
//     // handleEdit = (e, content) => {
//     //     touched = true;
//     // }
//     addHeader = () => {
//         this.setState({ note: [...this.state.note, {type: 'h1', content: 'x', html: '<h1>new header</h1><div>content here</div>', touched: false} ]})
//         //this.content.addEventListener('focus', console.log('x'))
        
//     }
//     handleChange = (e, content, index, touched) => {
//         const note = this.state.note;
//         note[index].html=e.target.value;
//         this.setState({note})

//     }
//     // handleEnterPress = (e) => {
//     //     //console.log(this.content.htmlEl)
//     //     if (e.key === 'Enter') {
//     //         this.setState({ note: [...this.state.note, {type: 'p', content: 'x', touched: false} ]},  console.log(this.content.htmlEl))
//     //     }
//     // }
//     render() {
//         return (
//             <div>
//                 <div className="buttons">
//                     <button onClick={this.addHeader}>New Header</button>
//                     <button>Add Code</button>
//                     <button>Highlight</button>
//                 </div>
//                 <div className="body">
//                     {this.state.note.map((note, index) => {
//                         return <ContentEditable 
//                                     key={index}
//                                     html={note.html}
//                                     className="content"
//                                     //html={`<${note.type}>${note.content}</${note.type}>`}
//                                     disabled={false}
//                                     //onKeyPress={this.handleEnterPress}
//                                     onChange={(e) => this.handleChange(e, note.content, index, note.touched)}
//                                     // onClick={(e) => this.handleEdit(e, note.index, note.content, note.touched)}
//                                     ref={(input) => this.content = input}
//                                 />        
//                     })}
//                 </div>
//             </div>
//         );
//     }
// }

export default Note;