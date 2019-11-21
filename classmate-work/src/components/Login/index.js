import React, { Component } from 'react';
import './index.css';

class index extends Component {
    constructor(props){
        super(props);
        this.state=({
            ifShow : 'block',
            num : 1
        })
    }
    
    closeClick(){
        this.setState({
            ifShow : 'none'
        })
    }
    registerClick(){
        this.setState({
            num : 2
        })
    }
    loginClick(){
        this.setState({
            num : 1
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.num === 1 ?
                    <div className="from" style={{display : this.state.ifShow}}>
                        <div className="head">
                            <span className="head-left" onClick={this.closeClick.bind(this)}>X</span>
                            <span className="head-right" onClick={this.registerClick.bind(this)}>注册</span>
                        </div>
                        <div className="content">
                            <div>
                                <div class="input_box">
                                    账号: <input id="uname" type="text" name="user" placeholder="请输入用户名"/>
                                </div>
                                <div class="input_box">
                                    密码: <input id="upass" type="password" name="psw" placeholder="请输入密码"/>
                                </div>
                                <div class="input_box">
                                    <button type="button" class="btn btn-primary" onClick={this.closeClick.bind(this)}>登录</button>    
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="from" style={{display : this.state.ifShow}}>
                        <div className="head">
                            <span className="head-left" onClick={this.closeClick.bind(this)}>X</span>
                            <span className="head-right" onClick={this.loginClick.bind(this)}>登录</span>
                        </div>
                        <div className="content">
                            <div>
                                <div class="input_box">
                                    用户名: <input id="uname" type="text" name="user" placeholder="请输入用户名"/>
                                </div>
                                <div class="input_box">
                                    密码: <input id="upass" type="password" name="psw" placeholder="请输入密码"/>
                                </div>
                                <div class="input_box">
                                    确认密码: <input id="upass" type="password" name="psw" placeholder="请再次输入密码"/>
                                </div>
                                <div class="input_box">
                                    <button type="button" class="btn btn-primary" onClick={this.closeClick.bind(this)}>注册</button>    
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default index;