import React, { Component } from 'react';
import styled from 'styled-components';

import * as mainTheme from '../globalStyles/mainTheme';
import * as lightTheme from '../globalStyles/lightTheme';



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { edit: false };
    }
    render() {
        return (
            <div>
                { (this.state.edit) ? 
                    <HeaderInput onBlur={() => this.setState({ edit: false })} />
                        : 
                    <HeaderContent onClick={() => this.setState({ edit: true })}>
                        {this.props.headerContent}
                    </HeaderContent> 

                }
            </div>
        )
    }
}

export default Header;

const HeaderContent = styled.h2`
    color: ${lightTheme.HEADER_FONT_COLOR};
    font-size: ${mainTheme.HEADER_FONT_SIZE};
    font-family: ${mainTheme.MAIN_FONT};
    padding-top: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
    width: 80%;
`;

const HeaderInput = styled.input`
    color: ${lightTheme.HEADER_FONT_COLOR};
    font-size: ${mainTheme.HEADER_FONT_SIZE};
    font-family: ${mainTheme.MAIN_FONT};
    background-color: ${lightTheme.NOTE_BG};
    width: 80%;
    height: 30px;
    border: none;
    background-color: 
`;