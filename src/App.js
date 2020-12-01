import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Characters from './pages/Characters';
import About from './pages/About';
import { Layout, Row, Col} from "antd";
import 'antd/dist/antd.css';
import './App.css';
import Button from "./elements/Button";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header className="navbar" style={{ color: "white" }}>
          <Row>
            <Col span={8}><p style={{ margin: "15px" }}>Kelompok 8</p></Col>
            <Col span={8} offset={8} style={{ textAlign: "right" }}>
              <Button background="transparent">
                <Link style={{ color: "white" }} to="/">Characters</Link>
              </Button>
              <Button background="transparent">
                <Link style={{ color: "white" }} to="/about">About</Link>
              </Button>
            </Col>
          </Row>
        </Header>
        <Content className="content">
          <Switch>
            <Route path="/" exact component={Characters} />
            <Route path="/about" exact component={About} />
          </Switch>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          ©2020 Created by Kelompok 8
      </Footer>
      </Layout >
    </Router>
  );
}

export default App;
