import React, { Component } from 'react';
import styled from 'styled-components';
//Image
import logo from '../image/logo.svg';
import icon_vnd  from '../image/vnd-icon.svg';
import icon_pay from '../image/cent.svg';

const MainScreenContentStyled = styled.div`
    ${'' /* width: 632px; */}
    background-image: linear-gradient(to top, #00cfff, #005cec, #005bec);
    text-align: center;
    padding: 48px 68px 126px 76px;
    .img-vng{
        text-align: left;
    }
    .content-weesmile {
        padding-top: 47px;
        p.content{
            font-family: UTMAvoBold;
            font-size: 28px;
            color: #ffffff;
            text-align: left;
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
            img{
                position: absolute;
                top: 5px;
                left: 22px;
            }
            input[type='text'] {
                width: 340px;
                padding: 13px 32px 14px 72px;
                text-align: center;
                border-radius: 15px;
                border: none;
                outline: none;
            }
            
            input::placeholder {
                opacity: 0.5;
                font-family: Roboto;
                font-size: 18px;
                font-weight: 300;
                color: red;
                font-family: RobotoLight;
            }

            input[placeholder]{
                color: red !important;
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
                    <div className = 'detail-content'>
                        <p>{this.props.detail}</p>
                    </div>
                </div>
            </MainScreenContentStyled>
        );
    }
}

export default MainScreenContent;