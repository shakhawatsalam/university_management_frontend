import { Layout, Row, Dropdown, MenuProps, Button, Space, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { getUserInfo, removeUserInFo } from "@/services/auth.service";
import { authKey } from "@/constants/storage";
import { useRouter } from "next/navigation";
const { Header: AntHeader } = Layout;

const Header = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const logOut = () => {
    removeUserInFo(authKey);
    router.push("/login");
  };
  const items: MenuProps["items"] = [
    {
      key: "0",
      label: (
        <Button onClick={logOut} type='text'>
          Log out
        </Button>
      ),
    },
  ];
  return (
    <AntHeader
      style={{
        background: "#fff",
      }}>
      <Row justify='end' align='middle' style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <a href=''>
            <Space wrap size={16}>
              <h1>{role}</h1>
              <Avatar size='large' icon={<UserOutlined />} />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </AntHeader>
  );
};

export default Header;
