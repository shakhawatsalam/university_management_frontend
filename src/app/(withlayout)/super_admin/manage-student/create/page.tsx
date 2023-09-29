import UMBreadCrumb from "@/components/ui/UMBreadCrumb";

const CreateStudentPage = () => {
  return (
    <>
      <UMBreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "manage-student",
            link: "/super_admin/manage-student",
          },
        ]}
      />
      <h1>Create Student</h1>
    </>
  );
};

export default CreateStudentPage;
