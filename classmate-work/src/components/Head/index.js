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
                        1<img src="" alt=""/>
                    </div>
                    <div className="head-img">
                        2<img src="" alt=""/>
                    </div>
                    <div className="head-img">
                        3<img src="" alt=""/>
                    </div>
                    <div className="head-img">
                        4<img src="" alt=""/>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default index;