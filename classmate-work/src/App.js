import React from 'react';
import Head from './components/Head';
// import Login from './components/Login';
import Major from './components/Major';
import Lab from './components/Lab';
import New from './components/New';
import Teacher from './components/Teacher';
import Work from './components/Work';
import Notice from './components/Notice';
import './App.css';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      ifShow : 'none',
      homeShow : 'block',
      majorShow : 'none',
      labShow : 'none',
      teaShow : 'none',
      workShow : 'none',
      newShow : 'none',
      noticeShow : 'none',
      num : 1
    }
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
  loginlClick(){
      this.setState({
          num : 1
      })
  }
  loginClick(){
      this.setState({
        ifShow : 'block'
      })
  }
  handleClick(e){
    // e.currentTarget.style.color = '#4D4D4D';
    e.target.style.color = '#1E90FF';
    // console.log(e.currentTarget.childNodes);
  }
  homeClick(){
    this.setState({
      homeShow : 'block',
      majorShow : 'none',
      labShow : 'none',
      teaShow : 'none',
      workShow : 'none',
      newShow : 'none',
      noticeShow : 'none'
    })
  }
  majorClick(){
    this.setState({
      homeShow : 'none',
      majorShow : 'block',
      labShow : 'none',
      teaShow : 'none',
      workShow : 'none',
      newShow : 'none',
      noticeShow : 'none'
    })
  }
  labClick(){
    this.setState({
      homeShow : 'none',
      majorShow : 'none',
      labShow : 'block',
      teaShow : 'none',
      workShow : 'none',
      newShow : 'none',
      noticeShow : 'none'
    })
  }
  teaClick(){
    this.setState({
      homeShow : 'none',
      majorShow : 'none',
      labShow : 'none',
      teaShow : 'block',
      workShow : 'none',
      newShow : 'none',
      noticeShow : 'none'
    })
  }
  workClick(){
    this.setState({
      homeShow : 'none',
      majorShow : 'none',
      labShow : 'none',
      teaShow : 'none',
      workShow : 'block',
      newShow : 'none',
      noticeShow : 'none'
    })
  }
  newClick(){
    this.setState({
      homeShow : 'none',
      majorShow : 'none',
      labShow : 'none',
      teaShow : 'none',
      workShow : 'none',
      newShow : 'block',
      noticeShow : 'none'
    })
  }
  noticeClick(){
    this.setState({
      homeShow : 'none',
      majorShow : 'none',
      labShow : 'none',
      teaShow : 'none',
      workShow : 'none',
      newShow : 'none',
      noticeShow : 'block'
    })
  }
  render(){
    return (
        <div className="App">
          <div>
            <Head/>
          </div>
          <div className="nav" onClick={this.handleClick.bind(this)}>
              <span className="home" id="1" onClick={this.homeClick.bind(this)}>首页</span>|
              <span id="2" onClick={this.majorClick.bind(this)}>专业介绍</span>|
              <span id="3" onClick={this.labClick.bind(this)}>实验室</span>|
              <span id="4" onClick={this.teaClick.bind(this)}>教师队伍</span>|
              <span id="5" onClick={this.workClick.bind(this)}>就业指南</span>|
              <span id="6" onClick={this.newClick.bind(this)}>新闻</span>|
              <span id="7" onClick={this.noticeClick.bind(this)}>公告</span>
          </div>
          <div className="body" style={{display:this.state.homeShow}}>
            <div className="left-top">
              <h2>新闻</h2>
              <div>我校成为中国教育电视台首批“高校辅导员联盟”成员单位</div>
              <div>【不忘初心|集中学习】党委书记张志坤作十九届四中全会精神专题辅导报告</div>
              <div>我校学生在第三届全国大学生“茅以升公益桥——小桥工程”设计大赛中获奖</div>
              <div>我校林业人工智能研究院与哈尔滨新光光电科技股份有限公司签署战略合作协议</div>
            </div>
            <div className="right-top">
              <h2>快捷入口</h2>
              <div>本科教学工作质量管理</div>
              <div>研究生工作量管理</div>
              <div>科研工作量管理</div>
              <div onClick={this.loginClick.bind(this)}>登录/注册</div>
            </div>
            <div className="left-bottom">
              <h2>新闻</h2>
              <div><a href="https://icec.nefu.edu.cn/info/1056/1922.htm">信息学院举办“一流课程双万计划”学术报告</a></div>
              <div><a href="https://icec.nefu.edu.cn/info/1056/1804.htm">信息与计算机工程学院2020年研究生招生专业目录和考试大纲</a></div>
              <div><a href="https://icec.nefu.edu.cn/info/1056/1802.htm">信息与计算机工程学院2020年接收推免复试研究生复试与录取工作办法</a></div>
              <div>东北林业大学2019年研究生学业奖学金评定结果公示</div>
            </div>
            <div className="right-bottom">
              <h2>联系我们</h2>
              <div><img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2791095653,1162162011&fm=26&gp=0.jpg" alt=""/>
                <a href="https://weibo.com/nefuwb?topnav=1&wvr=6&topsug=1&is_all=1">微博: @东北林业大学官方微博</a></div>
              <div><img src="http://img5.imgtn.bdimg.com/it/u=558083160,1157326859&fm=15&gp=0.jpg" alt=""/>
                电话:13200000000
              </div>
              <div><img src="http://thumbs.dreamstime.com/t/%E5%9B%BE%E8%B1%A1%E5%9B%BE%E6%A0%87%E4%BE%8B%E8%AF%81%E9%82%AE%E4%BB%B6-%E5%9C%A8%E7%99%BD%E8%89%B2%E8%83%8C%E6%99%AF%E9%9A%94%E7%BB%9D%E7%9A%84%E6%B6%88%E6%81%AF%E6%A0%87%E5%BF%97-%E5%9B%BE%E8%A1%A8%E7%9A%84%E7%8E%B0%E4%BB%A3%EF%BC%8C%E7%AE%80%E5%8D%95%E7%9A%84%E6%A0%87%E5%BF%97%E5%92%8C%E7%BD%91%E7%BB%9C%E8%AE%BE%E8%AE%A1-123408973.jpg" alt=""/>
                邮箱:ajhsda@nefu.edu.cn
              </div>
            </div>
          </div>

          <div className="login">
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
                            <span className="head-right" onClick={this.loginlClick.bind(this)}>登录</span>
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
          </div>
          <div style={{display : this.state.majorShow}}>
            <Major />
          </div>
          <div style={{display : this.state.labShow}}>
            <Lab />
          </div>
          <div style={{display : this.state.newShow}}>
            <New />
          </div>
          <div style={{display : this.state.noticeShow}}>
            <Notice />
          </div>
          <div style={{display : this.state.teaShow}}>
            <Teacher />
          </div>
          <div style={{display : this.state.workShow}}>
            <Work />
          </div>
        </div>
    )
  }
}

export default App;
