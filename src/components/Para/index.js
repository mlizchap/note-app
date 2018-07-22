import React, { Component } from 'react';
import styled from 'styled-components';


import Textarea from 'react-textarea-autosize';


const textareaStyle = {
    fontFamily: 'arial',
    fontSize: '1.2em',
    textAlign: 'center',
    color: 'blue',
    border: 'none',
    overflow: 'auto',
    outline: 'none',
    height: '30px',
    width: '80%',
    // backgroundColor: 'orange',
    resize: 'none',
    minHeight: '30px',
    backgroundColor: 'green',
    marginRight: 'auto',
    marginLeft: 'auto',
}
const ParaOutput = styled.div`
    font-family: arial;
    font-size: 1.2em;
    text-align: center;
    color: palevioletred;
    min-height: 30px;
    width: 80%;
    margin-top: 6px;
`;



class Para extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        }
    }
    exitTextarea = (e) => {
        this.props.handleCreateOutput(e, this.props.paraIndex, this.props.headerIndex);
        this.setState({ edit: false })
    }
    render() {
        return ( 
            <div>
                { (this.state.edit) ? 
                    <Textarea onBlur={(e) => this.exitTextarea(e)} defaultValue={this.props.content} style={textareaStyle} /> : 
                    <ParaOutput onClick={() => this.setState({edit: true})}>{this.props.content}</ParaOutput> 
                }               
            </div>
        )
   
    }
}

export default Para;