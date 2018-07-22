import React, { Component } from 'react';
import styled from 'styled-components'

import Para from '../Para';
import './style.css';


class Note extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: true,
            paras: ['test']
        }
    }
    changeEditMode = () => {
        this.setState({ editMode: !this.state.editMode })
    }
    createOutput = (e, index) => {
        var input = e.target.value
        var newParas = [];
        var start = 0;

        // for dealing with new lines in the text area
        for (var i = 0; i < input.length; i++) {
            if (input[i] === "\n") {
                if (start === 0) { 
                    newParas.push(input.slice(start, i)); 
                } else {
                    newParas.push(input.slice(start + 1, i)); 
                }
                start = i;
            }
        }
        if (newParas.length === 0) { 
            newParas.push(input.slice(start))
        } else {
            newParas.push(input.slice(start + 1))
        }
        
        console.log(index)
        this.setState({ 
            paras: [...this.state.paras.slice(0, index), ...newParas, ...this.state.paras.slice(index + 1)], 
            editMode: false 
        }) 
    }
    render() {
        return (
            <div>
                {
                    this.state.paras.map((para, index) => 
                         <Para 
                            key={index}
                            edit={this.state.editMode}
                            content={para}
                            handleEdit={this.changeEditMode}
                            handleCreateOutput={(e) => this.createOutput(e, index)}
                        />
                    )
                }
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