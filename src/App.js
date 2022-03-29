import React from 'react';
import { Layout, Menu } from 'antd';
import { TeamOutlined } from '@ant-design/icons';

import { DragDropContext } from 'react-beautiful-dnd';
import styles from './App.module.scss';

import { members } from './data/members';
import { Column, onDragEnd } from './context/KanbanContext';
import KanbanContext from './context/KanbanContext';

import './App.css';

const App = () => {
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const blueTeamMembers = members.filter((member) => member.team === 'Blue');
  const redTeamMembers = members.filter((member) => member.team === 'Red');
  const greenTeamMembers = members.filter((member) => member.team === 'Green');

  return (
    <Layout style={{ height: '100%' }}>
      {/* List all members start */}
      <Sider className='site-layout-background' width={200}>
        <div className='logo' />
        <Menu
          theme='dark'
          mode='inline'
          defaultSelectedKeys={['0']}
          defaultOpenKeys={['blue']}
          style={{ height: '100%' }}
        >
          <SubMenu key='blue' icon={<TeamOutlined />} title='Blue team'>
            {blueTeamMembers.map((member) => (
              <Menu.Item key={member.id}>{member.name}</Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key='red' icon={<TeamOutlined />} title='Red team'>
            {redTeamMembers.map((member) => (
              <Menu.Item key={member.id}>{member.name}</Menu.Item>
            ))}
          </SubMenu>
          <SubMenu key='green' icon={<TeamOutlined />} title='Green team'>
            {greenTeamMembers.map((member) => (
              <Menu.Item key={member.id}>{member.name}</Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
      {/* List all members end */}
      <Layout>
        <Header
          className='site-layout-sub-header-background'
          style={{ padding: 0 }}
        />

        {/* Kanban start */}
        <KanbanContext.Consumer>
          {([kanbanData, setKanbanData]) => {
            return (
              <DragDropContext
                onDragEnd={(result) =>
                  onDragEnd(result, kanbanData, setKanbanData)
                }
              >
                <Content>
                  <div className={styles.kanban__container}>
                    <Column />
                  </div>
                </Content>
              </DragDropContext>
            );
          }}
        </KanbanContext.Consumer>

        {/* Kanban end */}

        <Footer style={{ textAlign: 'center' }}>
          ©2022 Created by Ninabanina
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;
