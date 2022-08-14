import React, { useEffect } from 'react';
import styles from './Sider.module.scss';
import { Layout, Menu } from 'antd';
import { members, blueTeamMembers, redTeamMembers, greenTeamMembers } from '../../data/members';
import { TeamOutlined } from '@ant-design/icons';
import { useKanbanContext } from '../../context/KanbanContext';

const Sider = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    const { kanbanDispatch, kanbanState } = useKanbanContext();

    return (
        <Sider className='site-layout-background' width={200}>
            <Menu
                theme='dark'
                mode='inline'
                selectedKeys={members.filter(member => member.name === kanbanState.filter).map(member => member.id.toString())}
                className={styles.container}
            >
                <SubMenu key='blue' icon={<TeamOutlined />} title='Blue team'>
                    {blueTeamMembers
                        .map((member) => (
                            <Menu.Item onClick={() => {
                                kanbanDispatch({ type: 'FILTER_COORD', filter: member.name })
                            }} key={member.id}>{member.name}</Menu.Item>
                        ))}
                </SubMenu>
                <SubMenu key='red' icon={<TeamOutlined />} title='Red team'>
                    {redTeamMembers
                        .map((member) => (
                            <Menu.Item onClick={() => {
                                kanbanDispatch({ type: 'FILTER_COORD', filter: member.name })
                            }} key={member.id}>{member.name} </Menu.Item>
                        ))}
                </SubMenu>
                <SubMenu key='green' icon={<TeamOutlined />} title='Green team'>
                    {greenTeamMembers
                        .map((member) => (
                            <Menu.Item onClick={() => {
                                kanbanDispatch({ type: 'FILTER_COORD', filter: member.name })
                            }} key={member.id}>{member.name} </Menu.Item>
                        ))}
                </SubMenu>
            </Menu>
        </Sider>

    );
};

export default Sider;