import React from 'react';
import styles from './Sider.module.scss';
import { Layout, Menu } from 'antd';
import { members } from '../../data/members';
import { TeamOutlined } from '@ant-design/icons';
import { useKanbanContext } from '../../context/KanbanContext';

const Sider = () => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    const { kanbanDispatch } = useKanbanContext();

    const blueTeamMembers = members.filter((member) => member.team === 'Blue');
    const redTeamMembers = members.filter((member) => member.team === 'Red');
    const greenTeamMembers = members.filter((member) => member.team === 'Green');

    return (
        <Sider className='site-layout-background' width={200}>
            <div className='logo' />
            <Menu
                theme='dark'
                mode='inline'
                className={styles.container}
            >
                <SubMenu key='blue' icon={<TeamOutlined />} title='Blue team'>
                    {blueTeamMembers
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((member) => (
                            <Menu.Item onClick={() => {
                                kanbanDispatch({ type: 'FILTER_COORD', filter: member.name })
                            }} key={member.id}>{member.name}</Menu.Item>
                        ))}
                </SubMenu>
                <SubMenu key='red' icon={<TeamOutlined />} title='Red team'>
                    {redTeamMembers
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((member) => (
                            <Menu.Item onClick={() => {
                                kanbanDispatch({ type: 'FILTER_COORD', filter: member.name })
                            }} key={member.id}>{member.name}</Menu.Item>
                        ))}
                </SubMenu>
                <SubMenu key='green' icon={<TeamOutlined />} title='Green team'>
                    {greenTeamMembers
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .sort((a, b) => a.name.localeCompare(b.name)).map((member) => (
                            <Menu.Item onClick={() => {
                                kanbanDispatch({ type: 'FILTER_COORD', filter: member.name })
                            }} key={member.id}>{member.name}</Menu.Item>
                        ))}
                </SubMenu>
            </Menu>
        </Sider>

    );
};

export default Sider;