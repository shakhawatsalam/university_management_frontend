"use client";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import React from "react";

const CreateAdmin = () => {
  const { role } = getUserInfo() as any;
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <div>
        <h1>Create Admin</h1>
      </div>
    </>
  );
};

export default CreateAdmin;
