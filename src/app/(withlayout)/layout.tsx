"use client";
import Contants from "@/components/ui/Contants";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";
const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const userLoggedIn = isLoggedIn();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);
  if (!isLoading) {
    return <Loading />;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contants>{children}</Contants>
    </Layout>
  );
};

export default DashBoardLayout;
