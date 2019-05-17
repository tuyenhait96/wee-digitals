import React, { Component } from 'react';
import styled from 'styled-components';
//Component
import MainScreenImageLeft from './MainScreenImageLeft';
import MainScreenContent from './MainScreenContent';
import MainScreenImageRight from './MainScreenImageRight';
//Data
import { mainscreenImage } from '../data/dataGeneral';
//Image
import image11 from './../image/11.png';
import { Promise } from 'q';

const MainScreenContainerStyled = styled.div`
    display: flex;
    background-image: linear-gradient(to top, #02b6e3, #006fc5, #005bec);
    height: 100%;
    padding-top: 10px;
 `

 /*
    split setTimeout MainscreenLeft
    split setTimeout MainscreenRight ( moi hinh 1s , moi hinh 1 s, setState 1 lan)
 */
class MainScreenContainer extends Component {
    constructor(props) {
        super(props)
        // bieng global, muon dung chung
        this.mainImg = mainscreenImage
    }
    state = {
        leftImage: [],
        rightImage: [],
    }
    onPushImage() {
        setTimeout(() => {
            let newImage = {
                img: image11
            }
            // this.mainImg.unshift(newImage)
            // this.swapIndex()
            this.renderImage(newImage)
            console.log('time')
        }, 500);
    }
    swapIndex() {
        console.log(this.mainImg.length)
        for (let i = 0; i < this.mainImg.length; i++) {
            setTimeout(() => {
                // console.log('a', this.mainImg.length)
                if (i === 3 || i === 4 || i === 10 || i === 32 || i === 33 || i === 37 || i === 43 || i === 47 || i === 48 || i === 75 || i === 80 || i === 84 || i === 85 || i === 89 || i === 90) {
                    let tmp = this.mainImg[i - 1]
                    this.mainImg[i - 1] = this.mainImg[i]
                    this.mainImg[i] = tmp
                }
                console.log('i setI', i)
                // arrow function chay noi bo
            }, 1000*i);

            setTimeout(() => {
                
            }, 1000*i);
        }
        return this.mainImg
    }

    componentWillMount() {
        this.renderImage()
    }
    async renderImage(newImg) {
        let leftImage = []
        let rightImage = []
        let isLeft = true
        // console.log('length', this.mainImg.length)
        for (let i = 0; i < this.mainImg.length; i = i + 5) {
            // luc nay length: 16 nen i = 15
            // console.log('i', i)
            // 0, 5, 10, 15
            let maxIndex = 5;
            // i = 15
            // khong render duoc la do khong su dung pushImage, nen gio convert bien global de su dung chung this.mainImg
            if (i + maxIndex > this.mainImg.length) {
                maxIndex = this.mainImg.length - i
                // 16-15 = 1
            }
            // console.log('i after', i)
            // console.log('maxIbdex', maxIndex)
            // 1
            if (isLeft) {
                for (let j = 0; j < maxIndex; j++) {
                    // console.log(i, j)
                    leftImage.push(
                        this.mainImg[i + j]
                    )
                    // console.log('mainscreenImageLeft[i+j]', this.mainImg[i + j])
                }
                isLeft = false
            }
            else { // i = 5
                for (let j = 0; j < maxIndex; j++) {
                    rightImage.push(
                        this.mainImg[i + j]
                    )
                    // console.log('mainscreenImageRight[i+j]', this.mainImg[i + j])
                }

                isLeft = true
            }
        }
        // this.setState({ leftImage, rightImage })
        // console.log(leftImage, rightImage)
        console.log('a', leftImage.length)
        if(newImg){
            let oldImg=null
            for (let i = 0; i < leftImage.length; i++) {
                if(oldImg){
                    let img=leftImage[i]
                    leftImage[i]=oldImg
                    oldImg=img
                }
                else{
                    oldImg=leftImage[i]
                    leftImage[i]=newImg
                }
                this.setState({leftImage})
                await this.delay()
                // setTimeout(() => {
                //     // console.log('a', this.mainImg.length)
                //     // if (i === 3 || i === 4) {
                //     //     let tmp = leftImage[i - 1]
                //     //     leftImage[i - 1] = leftImage[i]
                //     //     leftImage[i] = tmp
                //     // }
                    console.log('i setI', i)
                // }, 1000*i);
                
            } 
            for (let i = 0; i < rightImage.length; i++) {
                setTimeout(() => {
                    // console.log('a', this.mainImg.length)
                    // if (i === 3 || i === 4) {
                    //     let tmp = rightImage[i - 1]
                    //     rightImage[i - 1] = rightImage[i]
                    //     rightImage[i] = tmp
                    // }
                    console.log('i setI', i)
                }, 1000*i);
            }
        }
        else{
            this.setState({
                leftImage, rightImage
            });
        }
    }

    delay(){
        return Promise(resolve=>{setTimeout(resolve, 10)})
    }

    render() {
        return (
            <MainScreenContainerStyled>
                <MainScreenImageLeft data={this.state.leftImage} onPushImage={this.onPushImage.bind(this)} />
                <MainScreenContent
                    money='1000 VND'
                    content_money='at the time, we make the diffenrence to those who need it.'
                    content='Together we'
                    title='give back'
                    detail='With the same biometrics technology we use for our clients, Wee Digital is changing philanthropy. With radical transparency, we make each donation traceable at all points. Find your smile on smile.wee.vn and raise awareness. So smile and join the movement.'
                    onPushImage={this.onPushImage.bind(this)}
                />
                <MainScreenImageRight data={this.state.rightImage} />
            </MainScreenContainerStyled>
        );
    }
}

export default MainScreenContainer;