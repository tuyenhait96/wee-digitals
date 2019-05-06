import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import MainScreenImageLeft  from './MainScreenImageLeft';
import MainScreenContent from './MainScreenContent';
import MainScreenImageRight from './MainScreenImageRight';
//Data
import { mainscreenImage } from '../data/dataGeneral';

const MainScreenContainerStyled = styled.div`
    display: flex;
    background-image: linear-gradient(to top, #02b6e3, #006fc5, #005bec);
    height: 100%;
    padding-top: 10px;
    .border-yellow{
        width:60px;
        min-width: 60px;
        height: 60px;
        border-radius: 5px;
        background: #ffd000;
        margin-right: 10px;
    }
    .border-white{
        width:60px;
        min-width: 60px;
        height: 60px;
        border-radius: 5px;
        background: #ffffff;
        margin-right: 10px;
    }
    .image{
        img{
            width: 60px;
            height: 60px;
            border-radius: 5px;
            object-fit: cover;
        }
    }
 `

class MainScreenContainer extends Component {
    state={
        leftImage:[],
        rightImage:[]
    }
    componentWillMount(){
        this.renderImage()
    }

    renderImage() {
        let leftImage = []
        let rightImage = []
        let isLeft = true
        console.log('length', mainscreenImage.length)
        for(let i = 0; i < mainscreenImage.length; i=i+5) {
            // luc nay length: 16 nen i = 15
            console.log('i',i)
            // 0, 5, 10, 15
            let maxIndex=5;
            // i = 15
            if(i+maxIndex>mainscreenImage.length){
                maxIndex=mainscreenImage.length-i
                // 16-15 = 1
            }
            console.log('i after', i)
            console.log('maxIbdex', maxIndex)
            // 1
            if(isLeft) {
                for(let j=0;j<maxIndex;j++){
                    console.log(i, j)
                    leftImage.push(
                        mainscreenImage[i+j]
                    )
                    console.log('mainscreenImageLeft[i+j]', mainscreenImage[i+j])
                }
                
                isLeft = false
            }
            else{ // i = 5
                for(let j=0;j<maxIndex;j++){
                    rightImage.push(
                        mainscreenImage[i+j]
                    )
                    console.log('mainscreenImageRight[i+j]', mainscreenImage[i+j])
                }
                 
                isLeft = true
            }
        }
        this.setState({leftImage,rightImage})
        console.log(leftImage, rightImage)
    }

    render() {
        
        return (
            <MainScreenContainerStyled>
                <MainScreenImageLeft data = {this.state.leftImage}/>
                <MainScreenContent 
                    money = '1000 VND'
                    content_money = 'at the time, we make the diffenrence to those who need it.'
                    content = 'Together we' 
                    title = 'give back'
                    detail = 'With the same biometrics technology we use for our clients, Wee Digital is changing philanthropy. With radical transparency, we make each donation traceable at all points. Find your smile on smile.wee.vn and raise awareness. So smile and join the movement.'
                /> 
               <MainScreenImageRight data = {this.state.rightImage}/>
            </MainScreenContainerStyled>
        );
    }
}

export default MainScreenContainer;