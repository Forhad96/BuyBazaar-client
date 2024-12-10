import { Controller, FieldValues, SubmitHandler } from "react-hook-form";

import { Button, Col, Divider, Form, Input, Row } from "antd";
import CommonForm from "../../components/form/CommonForm";
import CommonInput from "../../components/form/CommonInput";
import { useAddCarMutation } from "../../redux/features/admin/adminManagement.api";
import CommonSelect from "../../components/form/CommonSelect";

const carDefaultValues = {
  name: "Tesla Model S",
  description:
    "A luxury electric sedan with impressive performance and cutting-edge technology.",
  brand: "Tesla",
  model: "Model S",
  year: 2022,
  color: "Red",
  isElectric: true,
  carType: "sedan",
  seats: 5,
  mileage: 15000,
  status: "available",
  location: "San Francisco, CA",
  features: [
    "Autopilot",
    "Panoramic Sunroof",
    "Heated Seats",
    "Bluetooth",
    "Backup Camera",
  ],
  pricePerHour: 50,
  pricePerDay: 300,
  imageUrl: [
    "https://example.com/images/tesla-model-s-front.jpg",
    "https://example.com/images/tesla-model-s-interior.jpg",
  ],
  isDeleted: false,
};

const CreateCar = () => {
  const [addCar, { data, error }] = useAddCarMutation();

  console.log({ data, error });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // const formData = new FormData();

    // formData.append("data", JSON.stringify(carData));
    // formData.append("file", data.image);

    addCar(data);

    //! This is for development
    //! Just for checking
    // console.log(Object.fromEntries(formData));
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <CommonForm onSubmit={onSubmit} defaultValues={carDefaultValues}>
          <Divider>Car Info</Divider>
          <Row gutter={8}>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="name" label="Name" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="description" label="Description" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="brand" label="Brand" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="model" label="Model" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="number" name="year" label="Year" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="color" label="Color" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonSelect
                name="isElectric"
                label="IsElectric"
                options={[
                  { value: true, label: "Yes" },
                  { value: false, label: "No" },
                ]}
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="carType" label="Car Type" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="number" name="seats" label="Seats" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="number" name="mileage" label="Mileage" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="status" label="Status" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="location" label="Location" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="features" label="Features" />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput
                type="number"
                name="pricePerHour"
                label="Price Per Hour"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput
                type="number"
                name="pricePerDay"
                label="Price Per Day"
              />
            </Col>
            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <CommonInput type="text" name="imageUrl" label="Image URLs" />
            </Col>

            <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
              <Controller
                name="image"
                render={({ field: { onChange, value, ...field } }) => (
                  <Form.Item label="Picture">
                    <Input
                      type="file"
                      value={value?.fileName}
                      {...field}
                      onChange={(e) => onChange(e.target.files?.[0])}
                    />
                  </Form.Item>
                )}
              />
            </Col>
          </Row>
          <Button htmlType="submit">Submit</Button>
        </CommonForm>
      </Col>
    </Row>
  );
};

export default CreateCar;
