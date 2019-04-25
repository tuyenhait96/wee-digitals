import React, { Component } from 'react';
import styled from 'styled-components';
import MainScreenImage from './MainScreenImage';
import MainScreenContent from './MainScreenContent';
import MainScreenImage02 from './MainScreenImage02';

const MainScreenContainerStyled = styled.div`
    width: 100%;
    display: flex;
 `

class MainScreenContainer extends Component {
    render() {
        return (
            <MainScreenContainerStyled>
               <MainScreenImage/>
               <MainScreenContent 
                    money = '1000 VND'
                    content_money = 'at the time, we make the diffenrence to those who need it.'
                    content = 'Together we' 
                    title = 'give back'
                    detail = 'With the same biometrics technology we use for our clients, Wee Digital is changing philanthropy. With radical transparency, we make each donation traceable at all points. Find your smile on smile.wee.vn and raise awareness. So smile and join the movement.'
                /> 
               <MainScreenImage02/>
            </MainScreenContainerStyled>
        );
    }
}

export default MainScreenContainer;