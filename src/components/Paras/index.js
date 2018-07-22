import React, { Component } from 'react';
import styled from 'styled-components'

import Para from '../Para';
import './style.css';


class Paras extends Component {
    constructor(props) {
        super(props);

        this.state = {
            editMode: true,
            paras: ['test'],
            // content: '<h1>this is a header</h1><p>first para</p><p>second para</p>'
        }
    }
    // componentDidMount() {
    //     const parser=new DOMParser();
    //     const htmlDoc=parser.parseFromString(this.state.content, "text/html");
    //     var elems = htmlDoc.body.children;

    //     for (var i = 0; i < elems.length; i++) {
    //         var tag = elems[i].tagName;
    //         var value = elems[i].innerHTML;
    //     }
    // }
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

        this.setState({ 
            paras: [...this.state.paras.slice(0, index), ...newParas, ...this.state.paras.slice(index + 1)], 
            editMode: false 
        }) 
    }
    renderParas = () => {
        return this.state.paras.map((para, index) => 
            <Para 
                key={index}
                edit={this.state.editMode}
                content={para}
                handleEdit={this.changeEditMode}
                handleCreateOutput={(e) => this.createOutput(e, index)}
            />
        )
    }
    render() {
        return (
            <div>
                { this.renderParas() }
            </div>
        )
    }
}

export default Paras;