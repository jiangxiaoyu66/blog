import React from 'react'
import Head from 'next/head'
import { Row,Col } from 'antd';
import Header from "../components/Header";
import Content from '../components/Content';
import Slider from "../components/Slider";

const Home = () => (
  <div>
    {/* Head标签中是项目在浏览器标签页中的内容 */}
    <Head>
      <title>Home</title>
      {/* 这里的link是引用标签，可以引用外部文件,这里引用了项目中的favicon.ico */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />

    <Row type='flex' justify='center'>
        <Col xs={24} md={16} lg={18} xl={14}>
          <Content />
        </Col>
        <Col xs={0} md={0} lg={3} xl={4}  >
          <Slider />
        </Col>
    </Row>


  </div>
)

export default Home
