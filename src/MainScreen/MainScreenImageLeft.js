import React, { Component } from 'react';
import styled from 'styled-components';
import image01 from './../image/1.png';
import { mainscreenImage } from '../data/dataGeneral';

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
        display: inline-block;
        float: left;
        width:14.8%;
        height: 7.5%;
        border-radius: 5px;
        padding: 0 2.47% 2.47% 0;
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
    }
    .image:nth-child(5n) + .image {
        clear: both;
    }
`
class MainScreenImageLeft extends Component {
    renderImage() {
        return this.props.data.map((item, i) => {
            return(
                <div className = 'image' key ={i}>
                    <img src = {item.img} alt = {item.index} />
                    <p>{item.index}</p>
                </div>
            )
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
            <MainScreenImageStyled id = "left" onScroll = {this.synchScroll.bind(this, 'left')}>
               {this.renderImage()}
               <p>Scrolled <span id="demo">0</span> times.</p>
            </MainScreenImageStyled>
        );
    }
}

export default MainScreenImageLeft;