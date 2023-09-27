"use client";
import Contants from "@/components/ui/Contants";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { Island_Moments } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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
    return <p>Loading</p>;
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contants>{children}</Contants>
    </Layout>
  );
};

export default DashBoardLayout;
