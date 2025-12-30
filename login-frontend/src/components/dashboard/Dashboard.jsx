import { Layout, Menu, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

export default function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh", width: "100vw" }}>
      <Sider>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1" icon={<UserOutlined />}>
            Dashboard
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: "#fff", textAlign: "right" }}>
          <Button icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Button>
        </Header>

        <Content style={{ padding: 24 }}>
          <h2>Welcome to Dashboard</h2>
        </Content>
      </Layout>
    </Layout>
  );
}
