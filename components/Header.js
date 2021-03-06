import React from 'react'
// import './header.css';
import { Menu, Button, Row, Col, Icon } from 'antd';
import './header.less';

// const Header = () => (
//     <div className="header">
//       <Row type="flex" justify="center">
//           <Col  xs={24} sm={24} md={10} lg={10} xl={10}>
//               <span className="header-logo">YU</span>
//               {/* <span className="header-txt">专注前端开发,每年100集免费视频。</span> */}
//           </Col>

//           <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
//               <Menu  mode="horizontal">
//                   <Menu.Item key="home">
//                       <Icon type="home" />
//                       首页
//                   </Menu.Item>
//                   <Menu.Item key="video">
//                       <Icon type="youtube" />
//                       关于我
//                   </Menu.Item>
//                   <Menu.Item key="life">
//                       <Icon type="smile" />
//                       生活
//                   </Menu.Item>
//               </Menu>
//           </Col>
//       </Row>
//    </div>
//   )

function Header() {
    return (
        <div className='header'>
            {/* <Row type='flex' justify='space-between'> */}
            <Row type="flex" justify="center">

                <Col className='header-logo' xs={24} sm={24} md={10} lg={10} xl={10}>
                    <span>YU</span>
                </Col>
                <Col xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode='horizontal'>
                        <Menu.Item>首页</Menu.Item>
                        <Menu.Item>关于我</Menu.Item>
                        <Menu.Item>慢生活</Menu.Item>
                        <Menu.Item>留言板</Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header