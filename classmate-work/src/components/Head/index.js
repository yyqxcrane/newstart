import React, { Component } from 'react';
import Carousel from 'antd/es/carousel';
import 'antd/es/carousel/style/css';
import './index.css';

class index extends Component {
    render() {
        return (
            <div>
                <Carousel autoplay>
                    <div className="head-img">
                        <img src="https://www.nefu.edu.cn/images/20190923.jpg" alt=""/>
                    </div>
                    <div className="head-img">
                        <img src="https://www.nefu.edu.cn/images/20191004.jpg" alt=""/>
                    </div>
                    <div className="head-img">
                        <img src="https://www.nefu.edu.cn/images/20190925.jpg" alt=""/>
                    </div>
                    <div className="head-img">
                        <img src="https://www.nefu.edu.cn/images/201909271.jpg" alt=""/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default index;