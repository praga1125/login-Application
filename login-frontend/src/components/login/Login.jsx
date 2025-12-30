import { Button, Card, Form, Input, Typography, message } from "antd";

import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import AuthLayout from "../layout/AuthLayout";

const { Title } = Typography;

export default function Login() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await api.post("/auth/login", values);
      localStorage.setItem("token", res.data.token);
      message.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      message.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <AuthLayout>
      <Card style={{ width: 350 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Login
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Login
          </Button>

          <Button type="link" block onClick={() => navigate("/register")}>
            New user? Register
          </Button>
        </Form>
      </Card>
    </AuthLayout>
  );
}
