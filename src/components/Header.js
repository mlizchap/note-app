import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContent = styled.h2`
    font-family: arial;
    color: purple;
    font-size: 2rem;
    text-align: center;
    width: 80%;
    background-color: grey;
`;

const HeaderInput = styled.input`
    color: yellow;
    width: 80%;
    font-size: 2rem;
    height: 30px;
`;

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