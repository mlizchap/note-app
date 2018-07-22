import React, { Component } from 'react';
import styled from 'styled-components';


import Textarea from 'react-textarea-autosize';


const textareaStyle = {
    fontFamily: 'arial',
    fontSize: '1.5em',
    textAlign: 'center',
    color: 'palevioletred',
    border: 'none',
    overflow: 'auto',
    outline: 'none',
    height: '30px',
    width: '80%',
    backgroundColor: 'orange',
    resize: 'none'  
}
const ParaOutput = styled.p`
    font-family: arial;
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    min-height: 30px;
    width: 80%;
    background-color: orange;
    margin-top: 5px;
`;



class Para extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( 
            <div>
                { (this.props.edit) ? 
                    <Textarea onBlur={this.props.handleCreateOutput} defaultValue={this.props.content} style={textareaStyle} /> : 
                    <ParaOutput onClick={this.props.handleEdit}>{this.props.content}</ParaOutput> 
                }               
            </div>
        )
   
    }
}

export default Para;