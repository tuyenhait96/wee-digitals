import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImageStyled = styled.div`
    background: blue;
    flex: 1;
`

class MainScreenImage extends Component {
    render() {
        return (
            <MainScreenImageStyled>
               <h1>s</h1> 
            </MainScreenImageStyled>
        );
    }
}

export default MainScreenImage;