import React, { Component } from 'react';
import styled from 'styled-components';

import * as mainTheme from '../globalStyles/mainTheme';
import * as lightTheme from '../globalStyles/lightTheme';

export default () => {
    return <NavbarStyle>TITLE</NavbarStyle>
}

const NavbarStyle = styled.div`
    font-family: ${mainTheme.TITLE_FONT};
    letter-spacing: .2em;
    font-size: ${mainTheme.TITLE_FONT_SIZE};
    text-align: center;
    padding: 30px;
    color: white;
    width: 100%;
    display: block;
    background-image: linear-gradient(260deg, ${lightTheme.ACCENT_COLOR_2} 0%, ${lightTheme.ACCENT_COLOR_1} 100%);
`;