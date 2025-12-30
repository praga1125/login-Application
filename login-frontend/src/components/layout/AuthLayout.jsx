import { Layout } from "antd";

const { Content } = Layout;

export default function AuthLayout({ children }) {
  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Content
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f0f2f5",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
