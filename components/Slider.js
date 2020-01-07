import React from "react";
import { Avatar, Card, Affix } from "antd";
import "./slider.less";
import MarkdownNavbar from "markdown-navbar";

const markdown =
  "# P01:课程介绍和环境搭建\n" +
  "[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n" +
  "> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n" +
  "**这是加粗的文字**\n\n" +
  "*这是倾斜的文字*`\n\n" +
  "***这是斜体加粗的文字***\n\n" +
  "~~这是加删除线的文字~~ \n\n" +
  "`console.log(111)` \n\n" +
  "# p02:来个Hello World 初始Vue3.0\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n" +
  "***\n\n\n" +
  "# p03:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p04:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "#5 p05:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p06:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "# p07:Vue3.0基础知识讲解\n" +
  "> aaaaaaaaa\n" +
  ">> bbbbbbbbb\n" +
  ">>> cccccccccc\n\n" +
  "``` var a=11; ```";

const Slider = () => {
  return (
    <div>
      <Card className="slider">
        <div className="me">
          <h3>关于我</h3>
          <Avatar
            size="large"
            src="https://b-ssl.duitang.com/uploads/item/201607/26/20160726185736_yPmrE.thumb.224_0.jpeg"
          />
          {/* <img src={underline} alt='' /> */}
          <p>
            热爱生活的程序猿热爱生活的程序猿热爱生活的程序猿热爱生活的程序猿热爱生活的程序猿热爱生活的程序猿
          </p>
        </div>
      </Card>
      <Affix offsetTop={10}>
        <Card className="navigation">
          <MarkdownNavbar source={markdown} ordered={false} />
        </Card>
      </Affix>
    </div>
  );
};

export default Slider;
