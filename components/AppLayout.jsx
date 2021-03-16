import React from "react";
import Head from "next/head";
import { Layout } from "antd";
import NavBar from "../components/NavBar";

const { Header, Content, Footer } = Layout;

export default function AppLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>Car Dealing App {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout className="layout">
          <Header className="mb-3">
            <div className="container">
              <NavBar />
            </div>
          </Header>
          <Content>
            <div className="container">{children}</div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design{" "}
            <span role="img" aria-label="thumbs up">
              👍
            </span>{" "}
            ©2020 Created by Ant UED
          </Footer>
        </Layout>
      </main>
    </>
  );
}
