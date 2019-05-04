import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImage02Styled = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
    ${'' /* background-image: linear-gradient(to top, #02b6e3, #006fc5, #005bec); */}
    padding-top: 10px;
    .image{
        width:60px;
        height: 60px;
        border-radius: 5px;
        margin: 0 10px 10px 0;
        img{
            width:60px;
            height: 60px;
            border-radius: 5px;
            object-fit: cover;
        }
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

class MainScreenImageRight extends Component {
    renderImage() {
        return this.props.data.map((item, i) => {
            if(i=== 4 || i === 16 || i === 21 || i === 39 || i === 43 || i === 57){
                return (
                    <div  className = 'border-yellow' key = {i}>
                        {/* <img src = {item} alt = '' /> */}
                    </div>
                )
            }
            else if(i === 22 || i === 44 || i === 56){
                return(
                    <div  className = 'border-white' key = {i}>
                        {/* <img src = {item} alt = '' /> */}
                    </div>
                )
            }
            else{
                return(
                    <div  className = 'image' key = {i}>
                        <img src = {item} alt = '' />
                    </div>
                )
            }
        })
    }
    render() {
        return (
            <MainScreenImage02Styled>
                {/* <h1>Haa</h1> */}
                {this.renderImage()}
            </MainScreenImage02Styled>
        );
    }
}

export default MainScreenImageRight;