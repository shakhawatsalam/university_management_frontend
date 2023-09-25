"use client";
// import's form Ant Design
import { Col, Row, Button } from "antd";
// Svg Assets
import ligInImage from "../../assets/Privacy policy-rafiki.svg";
import Image from "next/image";
import From from "@/components/Forms/From";
import FromInput from "@/components/Forms/FromInput";
import { SubmitHandler } from "react-hook-form";

type FromValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const onSubmit: SubmitHandler<FromValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
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
