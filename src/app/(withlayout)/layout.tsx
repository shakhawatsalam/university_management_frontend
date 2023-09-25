import Contants from "@/components/ui/Contants";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contants>{children}</Contants>
    </Layout>
  );
};

export default DashBoardLayout;
