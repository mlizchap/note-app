import React, { Component } from 'react';

//import Paras from '../Paras';
import Para from '../Para';

class ParseHTML extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: '<h1>this is a header</h1><p>first para</p><p>second para</p><h1>react</h1><p>one about state</p><p>two about props</p><p>three para about props</p><p>four para about props</p>',
            content: [],
            editMode: true
        };
    }
    componentDidMount() {
        const parser=new DOMParser();
        const htmlDoc=parser.parseFromString(this.state.data, "text/html");
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
        // console.log(index, ind)
        var headerIndex = index;
        var paraIndex = ind;
        var input = e.target.value;
        var newParas = [];
        var start = 0;
        var allParas;

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

        var content = this.state.content; 
        //console.log(content)
        console.log(content[headerIndex].paras.slice(0, paraIndex));
        console.log(newParas)
        console.log(content[headerIndex].paras.slice(paraIndex));
        allParas = [...content[headerIndex].paras.slice(0, paraIndex), ...newParas, ...content[headerIndex].paras.slice(paraIndex + 1)]
        content[headerIndex].paras = allParas;
        // console.log(content)
        // //console.log(content[headerIndex].paras)
        this.setState({ content: content, editMode: false }, console.log(this.state.content))
    }

    render() {
        console.log(this.state.content)
        return (
            <div>
                { this.state.content.map((item, index) => {
                    return (
                        <div key={index}>
                            <div>{item.header}</div>
                            { item.paras.map((para,ind) => 
                                <Para 
                                    key={ind} 
                                    content={para} 
                                    edit={this.state.editMode}
                                    handleEdit={() => this.setState({ editMode: true })}
                                    handleCreateOutput={(e) => this.createOutput(e, index, ind)}
                                /> 
                            )}
                        </div>
                    )
                }) }
            </div>
        )
    }
}

export default ParseHTML;