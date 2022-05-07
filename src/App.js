import React from 'react';
import { Layout } from 'antd';

import Kanban from './components/Kanban';
import Sider from './components/Sider'

import './App.css';

const App = () => {
  const { Header, Footer } = Layout;

  return (
    <Layout style={{ height: '100%' }}>

      {/* List all members start */}
      <Sider />
      {/* List all members end */}
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{ padding: 0 }}
        />

        {/* Kanban start */}
        <Kanban />
        {/* Kanban end */}

        <Footer style={{ textAlign: 'center' }}>
          ©2022 Created by Ninabanina
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
