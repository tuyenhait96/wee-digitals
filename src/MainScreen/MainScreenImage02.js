import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImage02Styled = styled.div`
    background: yellow;
    flex: 1;
`

class MainScreenImage02 extends Component {
    render() {
        return (
            <MainScreenImage02Styled>
                <h1>Haa</h1>
            </MainScreenImage02Styled>
        );
    }
}

export default MainScreenImage02;