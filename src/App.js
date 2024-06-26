import { BrowserRouter as Router} from 'react-router-dom';
import MainTable from './components/MainTable';
import "./App.css";
import React, { useState } from 'react';
import './index.css';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Badge, Button } from 'antd';

import { siteNames } from './utils/static';

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("Prestige");

  const [newdeleteamount, setNewDeleteAmount] = useState({}); // State to hold newdeleteamount

  // Function to update newdeleteamount
  const getBadgeData = (value) => {
    setNewDeleteAmount(value);
  };

  const changeHeader = (title) => {
    setHeaderTitle(siteNames[title])
  }
  return (
    <Layout className="site-layout">
      <Router> {/* Wrap the Sider content with Router */}
        <Sider className="site-layout-sider" trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
            >
              <Menu.Item key="1" style={{ display: "flex", alignItems: "center" }} icon={<img src='./prestige.png' alt='prestige' width="20px" />} onClick={() => changeHeader(0)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Prestige</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newprestigeAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedprestigeAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px" }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="2" style={{ display: "flex", alignItems: "center" }} icon={<img src='./couristan.png' width="20px" alt='couristan' />} onClick={() => changeHeader(1)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Couristan</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newcouristanAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedcouristanAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="4" style={{ display: "flex", alignItems: "center" }} icon={<img src='./kaya.png' width="20px" alt='kaya' />} onClick={() => changeHeader(3)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Kaya</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newkayaAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedkayaAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="3" style={{ display: "flex", alignItems: "center" }} icon={<img src='./fibre.svg' width="20px" alt='fibre' />} onClick={() => changeHeader(2)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Fibre</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newfibreAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedfibreAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="5" style={{ display: "flex", alignItems: "center" }} icon={<img src='./bloomsburg.png' width="20px" alt='bloomsburg' />} onClick={() => changeHeader(4)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Blooms</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newbloomsburgAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedbloomsburgAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="6" style={{ display: "flex", alignItems: "center" }} icon={<img src='./harcourt.png' width="20px" alt='harcourt' />} onClick={() => changeHeader(5)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Harcourt</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newharcourtAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedharcourtAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="7" style={{ display: "flex", alignItems: "center" }} icon={<img src='./nourison.png' width="20px" alt='nourison' />} onClick={() => changeHeader(6)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Nourison</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newnourisonAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletednourisonAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="8" style={{ display: "flex", alignItems: "center" }} icon={<img src='./kaleen.png' width="20px" alt='kaleen' />} onClick={() => changeHeader(7)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Kaleen</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newkaleenAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedkaleenAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="9" style={{ display: "flex", alignItems: "center" }} icon={<img src='./fabrica.png' width="20px" alt='fabrica' />} onClick={() => changeHeader(8)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Fabrica</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newfabricaAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedfabricaAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="10" style={{ display: "flex", alignItems: "center" }} icon={<img src='./dixie.png' width="20px" alt='dixie' />} onClick={() => changeHeader(9)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Dixie</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newdixieAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deleteddixieAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="11" style={{ display: "flex", alignItems: "center" }} icon={<img src='./masland.png' width="20px" alt='masland' />} onClick={() => changeHeader(10)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Masland</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newmaslandAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedmaslandAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="12" style={{ display: "flex", alignItems: "center" }} icon={<img src='./andersontuftex.png' width="20px" alt='andersontuftex' />} onClick={() => changeHeader(11)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Anderson</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newandersontuftexAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedandersontuftexAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="13" style={{ display: "flex", alignItems: "center" }} icon={<img src='./wicanders.png' width="20px" alt='wicanders' />} onClick={() => changeHeader(12)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Wicanders</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newwicandersAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedwicandersAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="14" style={{ display: "flex", alignItems: "center" }} icon={<img src='./shawfloors.png' width="18px" alt='shawfloors' />} onClick={() => changeHeader(13)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Shawfloor</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newshawfloorsAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedshawfloorsAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="15" style={{ display: "flex", alignItems: "center" }} icon={<img src='./hardwood.png' width="20px" alt='hardwood' />} onClick={() => changeHeader(14)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Hardwood</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newhardwoodAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedhardwoodAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="16" style={{ display: "flex", alignItems: "center" }} icon={<img src='./adorra.png' width="20px" alt='adorra' />} onClick={() => changeHeader(15)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Adorra</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newadorraAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedadorraAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="17" style={{ display: "flex", alignItems: "center" }} icon={<img src='./rebel.jpg' width="20px" alt='rebel' />} onClick={() => changeHeader(16)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Rebel</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newrebelAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedrebelAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item key="18" style={{ display: "flex", alignItems: "center" }} icon={<img src='./mohawk.png' width="20px" alt='mohawk' />} onClick={() => changeHeader(17)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ marginRight: "3px" }}>Mohawk</span>
                  <div style={{ alignItems: "right" }}>
                    <Badge count={newdeleteamount.newmohawkAmount} style={{ backgroundColor: "green", padding: "0px 2px", borderColor: "green", marginRight: "2px" }} />
                    <Badge count={newdeleteamount.deletedmohawkAmount} style={{ backgroundColor: "red", borderColor: "red", padding: "0px 2px", }} />
                  </div>
                </div>
              </Menu.Item>
            </Menu>

        </Sider>
        <Layout style={{ backgroundColor: 'white' }}>
          <Header className="site-layout-header" style={{ padding: 0, fontSize: "20px", backgroundColor: "grey" }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            })}
            {headerTitle}

          </Header>
          <Content
            className="site-layout-content"
            style={{
              minHeight: 280,
              backgroundColor: "white",
              marginTop: "110px"
            }}
          >
            <MainTable current={headerTitle} getBadgeData={getBadgeData} />
          </Content>
        </Layout>
      </Router>
    </Layout>
  );
};

export default App;