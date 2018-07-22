import React, { Component } from 'react';
import styled from 'styled-components';

import Textarea from 'react-textarea-autosize';
import * as mainTheme from '../globalStyles/mainTheme';
import * as lightTheme from '../globalStyles/lightTheme';

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
                    <StyledTextarea onBlur={(e) => this.exitTextarea(e)} defaultValue={this.props.content} /> : 
                    <ParaOutput onClick={() => this.setState({edit: true})}>{this.props.content}</ParaOutput> 
                }               
            </div>
        )
   
    }
}

export default Para;

const StyledTextarea = styled(Textarea)`
    color: ${lightTheme.PARA_FONT_COLOR};
    background-color: ${lightTheme.NOTE_BG};
    font-family: ${mainTheme.MAIN_FONT};
    font-size: ${mainTheme.PARA_FONT_SIZE};
    overflow: auto;
    outline: none;
    height: 30px;
    width: 80%;
    resize: none;
    min-height: 20px;
    margin-left: 20px;
    border: none;
`;

const ParaOutput = styled.div`
    color: ${lightTheme.PARA_FONT_COLOR};
    background-color: ${lightTheme.NOTE_BG};
    font-family: ${mainTheme.MAIN_FONT};
    font-size: ${mainTheme.PARA_FONT_SIZE};
    margin-left: 20px;
    min-height: 30px;
    width: 80%;
    margin-top: 6px;
`;