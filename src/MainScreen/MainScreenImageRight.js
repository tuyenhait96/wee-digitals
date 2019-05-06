import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImage02Styled = styled.div`
    min-width: 28%;
    width: 28%;
    height: fit-content;
    display: inline-block;
    .image{
        width:60px;
        height: 60px;
        border-radius: 5px;
        padding: 0 10px 10px 0;
        display: inline-block;
        float: left;
        &:nth-child(5n) {
            padding-right: 0;
        }
        &:first-child {
            padding-left: 32px;
        }
        &:nth-child(5n + 1) {
            padding-left: 32px;
        }
        img{
            width:60px;
            height: 60px;
            border-radius: 5px;
            object-fit: cover;
        }
    }
    .image:nth-child(5n) + .image {
        clear: both;
    }
    .border-yellow{
        width:60px;
        height: 60px;
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
            return(
                <div className = 'image' key = {i}>
                    <img src = {item.img} alt = {item.index}/>
                    {/* {item.index} */}
                </div>
            )
        })
    }
    render() {
        return (
            <MainScreenImage02Styled>
                {this.renderImage()}
            </MainScreenImage02Styled>
        );
    }
}

export default MainScreenImageRight;