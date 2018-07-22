import React, { Component } from 'react';
import styled from 'styled-components';

import Para from './Para';
import Header from './Header';

import * as lightTheme from '../globalStyles/lightTheme';

const NoteBody = styled.div`
    background-color: ${lightTheme.NOTE_BG};
    width: 80%;
    margin-right: auto;
    margin-left: auto;
`;

class Note extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: '<h1>this is a header</h1><p>first para</p><p>second para</p><h1>react</h1><p>one about state</p><p>two about props</p><p>three para about props</p><p>four para about props</p>',
            content: []
        };
    }
    componentDidMount() {
        const parser=new DOMParser();
        const htmlDoc=parser.parseFromString(this.state.data, "text/html"); // this will eventually come from a DB
        const elems = htmlDoc.body.children;
        let values = [];
        let currHeaderIndex = -1;

        for (let i = 0; i < elems.length; i++) {
            var tag = elems[i].tagName;
            var value = elems[i].innerHTML;
            
            if (tag === 'H1') {
                values.push({ header: value, paras: [] });
                currHeaderIndex++;
            } else if (tag === 'P') {
                values[currHeaderIndex].paras.push(value)
            }
        }

        this.setState({ content: values});
    }

    createOutput = (e, index, ind) => {
        var headerIndex = ind;
        var paraIndex = index;
        var newParas = [];
        var start = 0;
        var allParas;
        var input = e.target.value;

        // looks for a new line in the textarea input, if there is one it is sliced up into new paragraphs accordingly
        for (var i = 0; i < input.length; i++) {
            if (input[i] === "\n") { 
                if (start === 0) { newParas.push(input.slice(start, i)); } 
                else { newParas.push(input.slice(start + 1, i)); }
                start = i;
            }
        }
        // if there are no new lines
        if (newParas.length === 0) { 
            newParas.push(input.slice(start))
        // for the remaining input
        } else {
            newParas.push(input.slice(start + 1))
        }

        var content = this.state.content; // creates a copy of staye
        allParas = [...content[headerIndex].paras.slice(0, paraIndex), ...newParas, ...content[headerIndex].paras.slice(paraIndex + 1)]
        content[headerIndex].paras = allParas;
        this.setState({ content: content, editMode: false }, console.log(this.state.content))
    }

    createHeader = (e, index) => {
        //console.log(index, e.target.value)
        var content = this.state.content;
        console.log(this.state.content)
        content[index].header = e.target.value;
        this.setState({ content });
    }

    render() {
        return (
            <NoteBody>
                { this.state.content.map((item, index) => {
                    return (
                        <div key={index}>
                            <Header headerContent={item.header} handleOnBlur={this.createHeader} headerIndex={index}/>
                            { item.paras.map((para,ind) => 
                                <Para 
                                    key={ind} 
                                    content={para} 
                                    headerIndex={index}
                                    paraIndex={ind}
                                    handleEdit={(x) => console.log(x)}
                                    handleCreateOutput={this.createOutput}
                                /> 
                            )}
                        </div>
                    )
                }) }
            </NoteBody>
        )
    }
}

export default Note;