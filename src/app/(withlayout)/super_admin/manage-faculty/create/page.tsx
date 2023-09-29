import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateFacultyPage = () => {
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-Faculty",
            link: "/super_admin/manage-faculty",
          },
        ]}
      />
      <h1>Create Faculty</h1>
    </>
  );
};

export default CreateFacultyPage;
