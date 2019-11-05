import React from 'react'
import Head from 'next/head'
import { Button } from 'antd';
import Header from "../components/Header";

const Home = () => (
  <div>
    {/* Head标签中是项目在浏览器标签页中的内容 */}
    <Head>
      <title>Home</title>
      {/* 这里的link是引用标签，可以引用外部文件,这里引用了项目中的favicon.ico */}
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Header />
  </div>
)

export default Home
