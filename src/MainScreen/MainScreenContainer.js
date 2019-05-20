import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import MainScreenImageLeft from './MainScreenImageLeft';
import MainScreenContent from './MainScreenContent';
import MainScreenImageRight from './MainScreenImageRight';
//Data
import { mainscreenImage, squareData } from '../data/dataGeneral';
//Image
import image11 from './../image/11.png';
import { Promise } from 'q';

const MainScreenContainerStyled = styled.div`
    display: flex;
    background-image: linear-gradient(to top, #02b6e3, #006fc5, #005bec);
    height: 100%;
    padding-top: 10px;
    .border-white{
        width: 60px;
        height: 60px;
        border-radius: 5px;
        background-color: #ffffff;
    }
    .border-yellow{
        width: 60px;
        height: 60px;
        border-radius: 5px;
        background-color: #ffd000;
    }
 `;



class MainScreenContainer extends Component {
    // _squareData;

    constructor(props) {
        super(props)
        // bien global, muon dung chung
        this.mainImg = mainscreenImage;
        // this._squareData = squareData;
    }

    state = {
        leftImage: [],
        rightImage: [],
    }

    async onPushImage() {
        let newImage = {
            img: image11
        }
        if(this.mainImg){
            let data =this.mainImg
            console.log(data)
            let oldImg=null
            for (let i = 0; i < data.length; i++) {
                console.log('main', data)
                console.log('OLDIMG-FIRST', oldImg)
                if(i===0){
                    // oldImg: null -> run
                    oldImg=data[i]
                    console.log('oldNew', oldImg)
                    data[i]=newImage
                    console.log('a', data[i])
                    console.log('newImg', newImage)
                }
                else{
                    // Log la color: bo qua ,
                    // Log la image thi trong vong lap
                    if(data[i]!=='white'&&
                        data[i]!=='yellow'){
                        console.log('dataIndex', data[i])
                        console.log('oldIndex', i)
                        // luc dau i=0, neu co thi img
                        let img=data[i]
                        console.log('imgMain', img)
                        data[i]=oldImg
                        console.log('oldImg1',oldImg)
                        oldImg=img
                        console.log('oldImg2', oldImg)
                    }
                }
                // chay 1 vong lap o se renderImage lai 1 lan
                this.renderImage(data)
                await this.delay()
            }
        }
    }
    // Run nay truoc
    componentWillMount() {
        let data =this.mainImg
        for(let i=0;i<squareData.length;i++){
            console.log('squareData[i]',squareData[i])
            console.log(data)
            data.splice(squareData[i].index,0,squareData[i].color) 
            console.log('dataSplice', data)
        }
        this.renderImage(data)
    }

    async renderImage(data) {
        console.log(this.mainImg);
        let leftImage = []
        let rightImage = []
        let isLeft = true
        // console.log('length', this.mainImg.length)
        for (let i = 0; i < data.length; i = i + 5) {
            // luc nay length: 16 nen i = 15
            // console.log('i', i)
            // 0, 5, 10, 15
            let maxIndex = 5;
            // i = 15
            // khong render duoc la do khong su dung pushImage, nen gio convert bien global de su dung chung this.mainImg
            if (i + maxIndex > data.length) {
                maxIndex = data.length - i
                // 16-15 = 1
            }
            // console.log('maxIbdex', maxIndex)
            // 1
            if (isLeft) {
                for (let j = 0; j < maxIndex; j++) {
                    // console.log(i, j)
                    leftImage.push(
                        data[i + j]
                    )
                    // console.log('mainscreenImageLeft[i+j]', this.mainImg[i + j])
                }
                isLeft = false
            }
            else { // i = 5
                for (let j = 0; j < maxIndex; j++) {
                    rightImage.push(
                        data[i + j]
                    )
                    // console.log('mainscreenImageRight[i+j]', this.mainImg[i + j])
                }
                isLeft = true
            }
        }
        this.setState({ leftImage, rightImage })
    }

    delay(){
        return Promise(resolve=>{setTimeout(resolve, 120)})
    }
    render() {
        return (
            <MainScreenContainerStyled>
                <MainScreenImageLeft
                     dataSquare = {squareData}
                     data={this.state.leftImage} onPushImage={this.onPushImage.bind(this)} />
                <MainScreenContent
                    money='1000 VND'
                    content_money='at the time, we make the diffenrence to those who need it.'
                    content='Together we'
                    title='give back'
                    detail='With the same biometrics technology we use for our clients, Wee Digital is changing philanthropy. With radical transparency, we make each donation traceable at all points. Find your smile on smile.wee.vn and raise awareness. So smile and join the movement.'
                    onPushImage={this.onPushImage.bind(this)}
                />
                <MainScreenImageRight dataSquare = {squareData} data={this.state.rightImage} />
            </MainScreenContainerStyled>
        );
    }
}

export default MainScreenContainer;