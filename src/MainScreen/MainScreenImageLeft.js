import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImageStyled = styled.div`
    height: 100%;
    ${'' /* display: flex; */}
    ${'' /* justify-content: center; */}
    ${'' /* flex: 1; */}
    ${'' /* flex-flow: row wrap; */}
    padding-top: 10px;
    ${'' /* width: 404px; */}
    display: inline-block;
    .image{
        width:60px;
        height: 60px;
        border-radius: 5px;
        margin: 0 10px 10px 0;
        display: inline-block;
        position: relative;
        img{
            width:60px;
            height: 60px;
            border-radius: 5px;
            object-fit: cover;
        }
    }
    .image:nth-child(10n) + .image {
        clear: both;
    }
    .border-yellow{
        width:60px;
        height: 60px;
        border-radius: 5px;
        background: #ffd000;
        margin-right: 10px;
    }
    .border-white{
        width:60px;
        height: 60px;
        border-radius: 5px;
        background: #ffffff;
        margin-right: 10px;
    }
`

class MainScreenImageLeft extends Component {
    renderImage() {
        let string = this.props.data.length
        console.log(string)
        // let stringSplit = 
        return this.props.data.map((item, i) => {
            return(
                <div className = 'image' key ={i}>
                    <img src = {item} alt = '' />
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