import React from "react";
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Route, Routes } from 'react-router-dom';
import Pictures from "../pages/Pictures";

const { Header, Sider, Content } = Layout;

class LayoutComponent extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<PictureOutlined />}>
              Photos
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              Video
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              Upload
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: '0 20px' }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/" element={<Pictures/>}/>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutComponent
