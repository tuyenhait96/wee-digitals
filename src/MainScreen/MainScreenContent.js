import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import logo from '../image/logo.svg';
import icon_vnd  from '../image/vnd-icon.svg';
import icon_pay from '../image/cent.svg';

const MainScreenContentStyled = styled.div`
    width: 44%;
    background-image: linear-gradient(to top, #00cfff, #005cec, #005bec);
    text-align: center;
    padding: 48px 68px 126px 76px;
    border-left: solid 1px #979797;
    .img-vng{
        text-align: left;
    }
    .content-weesmile {
        padding-top: 47px;
        .group-content{
             display: flex;
            flex-direction: column;
            align-items: center;
        }
        p.content{
            font-family: UTMAvoBold;
            font-size: 28px;
            color: #ffffff;
            text-align: left;
            width: 100%;
        }
        p.back{
            font-family:BelindaScript;
            font-size: 140px;
            text-align: left;
            transform: translateY(-69px);
            color: #ffffff;
        }
        .back-content {
            width: 321px;
            margin-left: 65px;
            font-family: UTMAvo;
            font-size: 16px;
            text-align: left;
            color: #ffffff;
            transform: translateY(-108px);
            strong{
                font-family: UTMAvoBold;
            }
        }
        .money-pay {
            position: relative;
            transform: translateY(-58px);
            text-align: left;
            padding-left: 21px;
            img{
                position: absolute;
                top: 22px;
                left: 42px;
            }
            input[type='text'] {
                width: 237px;
                padding: 13px 32px 14px 72px;
                text-align: center;
                border-radius: 15px;
                border: none;
                outline: none;
                font-family: LatoBlack;
                font-size: 40px;
                font-weight: 900;
                letter-spacing: 0.8px;
                ${'' /* color: #00cfff; */}

            }
        }
        .detail-content {
            width: 432px;
            margin: 0 auto;
            transform: translateY(-24px);
            p{
                font-family: UTMAvo;
                font-size: 16px;
                text-align: justify;
                color: #ffffff;
            }
        }
    }
`

class MainScreenContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtInput: ''
        }
    }
    onHandleChange(e) {
        const name = e.target.name
        const value = e.target.value
        console.log(value)
        this.setState({[name]: value});
    } 
    render() {
        return (
            <MainScreenContentStyled>
                <img src = {logo} alt = 'logo'/> 
                <div className = 'img-vng'>
                    <img src = {icon_vnd} alt = 'icon-vnd'/>
                </div>
                <div className = 'content-weesmile'>
                    <div className = 'group-content'>
                        <p className = 'content'>{this.props.content}</p>
                        <p className = 'back'>{this.props.title}</p>
                        <div className = 'back-content'>
                            <span>
                                <strong>{this.props.money} </strong>
                                {this.props.content_money}
                            </span>
                        </div>
                        <div className = 'money-pay'>
                            <img src = {icon_pay} alt = 'pay'/>
                            <input type = 'text'
                                onChange = {this.onHandleChange.bind(this)}
                                name = 'txtInput'
                            />
                        </div>
                    </div>
                    <div className = 'detail-content'>
                        <p>{this.props.detail}</p>
                    </div>
                </div>
            </MainScreenContentStyled>
        );
    }
}

export default MainScreenContent;