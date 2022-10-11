import React from "react";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <Layout>
      <Header>
        <h1>hi</h1>
      </Header>
      <Content>
        <h1>hello v2</h1>
      </Content>
    </Layout>
  );
}

export default Home;