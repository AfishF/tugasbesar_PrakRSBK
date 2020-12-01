import logo from './logo.svg';
import './App.css';
// import Characters from './pages/Characters';
import Komponen from "../src/pages/Komponen";
import { Row, Col, Layout } from "antd";
import 'antd/dist/antd.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="layout">
      <Header>
      </Header>
      <Content className="content">
        <Komponen />
        {/* <Characters /> */}
      </Content>
      <Footer style={{ textAlign: "center" }}>
        ©2020 Created by Kelompok 8
      </Footer>
    </Layout >
  );
}

export default App;
