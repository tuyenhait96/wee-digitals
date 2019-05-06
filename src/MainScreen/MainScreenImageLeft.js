import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImageStyled = styled.div`
    min-width: 28%;
    width: 28%;
    height: 100%;
    display: inline-block;
    .image{
        display: inline-block;
        float: left;
        width:60px;
        height: 60px;
        border-radius: 5px;
        padding: 0 10px 10px 0;
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
`

class MainScreenImageLeft extends Component {
    renderImage() {
        return this.props.data.map((item, i) => {
            return(
                <div className = 'image' key ={i}>
                    <img src = {item.img} alt = {item.index} />
                    {/* {item.index} */}
                </div>
            )
        })
    }
    render() {
        return (
            <MainScreenImageStyled>
               {this.renderImage()}
            </MainScreenImageStyled>
        );
    }
}

export default MainScreenImageLeft;