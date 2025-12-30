import { Button, Card, Form, Input, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import AuthLayout from "../layout/AuthLayout";

const { Title } = Typography;

export default function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await api.post("/auth/register", values);
      message.success("Registered successfully");
      navigate("/");
    } catch (err) {
      message.error(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <AuthLayout>
      <Card style={{ width: 350 }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Register
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
            rules={[{ required: true, min: 6 }]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Register
          </Button>

          <Button type="link" block onClick={() => navigate("/")}>
            Back to Login
          </Button>
        </Form>
      </Card>
    </AuthLayout>
  );
}
