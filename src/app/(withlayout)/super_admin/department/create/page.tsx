import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import React from "react";

const CreateDepartMentPage = () => {
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />
      <div>
        <h1>Create Department Page</h1>
      </div>
    </>
  );
};

export default CreateDepartMentPage;
