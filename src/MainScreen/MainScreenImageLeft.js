import React, { Component } from 'react';
import styled from 'styled-components';

const MainScreenImageStyled = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    ${'' /* flex: 1; */}
    flex-flow: row wrap;
    border: solid 1px #979797;
    background-image: linear-gradient(to top, #02b6e3, #006fc5, #005bec);
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

class MainScreenImageLeft extends Component {
    renderImage() {
        return this.props.data.map((item, i) => {
            if(i=== 2 || i === 16 || i === 17 || i === 39 || i === 43 || i === 57){
                return (
                    <div  className = 'border-yellow'>
                        {/* <img src = {item} alt = '' /> */}
                    </div>
                )
            }
            else if(i ===3 || i === 22 || i === 44 || i === 56){
                return(
                    <div  className = 'border-white'>
                        {/* <img src = {item} alt = '' /> */}
                    </div>
                )
            }
            else{
                return(
                    <div  className = 'image' key ={i}>
                        <img src = {item} alt = '' />
                    </div>
                )
            }
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