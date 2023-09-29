"use client";
// import's form Ant Design
import { Col, Row, Button } from "antd";
// Svg Assets
import ligInImage from "../../assets/Privacy policy-rafiki.svg";
import Image from "next/image";
import From from "@/components/Forms/From";
import FromInput from "@/components/Forms/FromInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { isLoggedIn, storeUserInfo } from "@/services/auth.service";
import { useRouter } from "next/navigation";

type FromValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  // console.log(isLoggedIn());
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();
      console.log(res);
      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      // console.log(res.data.accessToken);
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Row
      justify='center'
      align='middle'
      style={{
        minHeight: "100vh",
      }}>
      <Col xs={14} sm={12} md={12} lg={8}>
        <Image
          src={ligInImage}
          width={500}
          //   height={500}
          alt='login Image'></Image>
      </Col>
      <Col xs={16} sm={12} md={16} lg={8}>
        <h1 style={{ margin: "15px 0px" }}>First Login Your Account</h1>
        <div>
          <From submitHandler={onSubmit}>
            <div>
              <FromInput name='id' type='text' size='large' label='User Id' />
            </div>
            <div style={{ margin: "15px 0px" }}>
              <FromInput
                name='password'
                type='password'
                size='large'
                label='User Password'
              />
            </div>
            <Button type='primary' htmlType='submit'>
              Login
            </Button>
          </From>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
