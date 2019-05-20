import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImageStyled = styled.div`
    min-width: 28%;
    width: 28%;
    height: 100%;
    display: inline-block;
    overflow: auto;
    ::-webkit-scrollbar{
        width: 0;
    }
    .image{
        ${'' /* width:14.8%;
        height: 7.5%;
        border-radius: 5px;
        padding: 0 2.47% 2.47% 0;
        display: inline-block;
        float: left; */}
        width: 60px;
        height: 60px;
        float: left;
        object-fit: fill;
        border-radius: 5px;
        margin: 5px;
        overflow: hidden;
        p{
            font-family: UTMAvoBold;
            color: red;
            font-size: 10px;
            margin-top: -66px;
        }
        &:nth-child(5n) {
            padding-right: 0;
        }
        &:first-child {
            padding-left: 7.92%;
        }
        &:nth-child(5n + 1) {
            padding-left: 7.92%;
        }
        img{
            width:100% !important;
            height: 100% !important;
            border-radius: 5px;
            object-fit: cover;
        }
        &.yellow {
            background-color: #ffd000;
        }

        &.white {
            background-color: white;
        }
    }
    .image:nth-child(5n) + .image {
        clear: both;
    }
    .border-yellow{
        width:100% !important;
        height: 100% !important;
        border-radius: 5px;
        background: #ffd000;
        padding-right: 10px;
    }
    .border-white{
        width:60px;
        height: 60px;
        border-radius: 5px;
        background: #ffffff;
        padding-right: 10px;
    }
`

class MainScreenImageRight extends Component {
    renderImage() {
        return this.props.data.map((item, i) => {
            // if(this.props.dataSquare.find(item => item.index === i)){
            //     const currentSquare = this.props.dataSquare.find(item => item.index === i)
            //     return(
            //         <div className = {'image ' + currentSquare.color} key = {i}></div>
            //     )
            // }else{
            // return(
            //     <div className = 'image' key = {i}>
            //         <img src = {item.img} alt = {item.index}/>
            //         <p>{item.index}</p>
            //     </div>
            // )}
            // if(item.hasOwnProperty('color')) {
            //     return(
            //         <div className = {'image ' + item.color} key = {i}></div>
            //     )
            // }else {
            //     return(
            //         <div className = 'image' key ={i}>
            //             <img src = {item.img} alt = {item.index} />
            //             <p>{item.index}</p>
            //         </div>
            //     )
            // }
            switch (item) {
                case 'white':
                    return (
                        <div className={'image white'} key ={i} />
                    )
                case 'yellow':
                    return (
                        <div className={'image yellow'} key ={i} />
                    )
                default:
                    return(
                        <div className = 'image' key ={i}>
                            <img src = {item.img} alt = {item.index} />
                            <p>{item.index}</p>
                        </div>
                    )
            }
        })
    }
    synchScroll(scrollId) {
        let left = document.getElementById('left')
        let right = document.getElementById('right')
        if(scrollId === 'left'){
            right.scrollTop = left.scrollTop
        }else{
            left.scrollTop = right.scrollTop
        }
    }
    render() {
        return (
            <MainScreenImageStyled id = 'right' onScroll = {this.synchScroll.bind(this, 'right')}>
                {this.renderImage()}
            </MainScreenImageStyled>
        );
    }
}

export default MainScreenImageRight;