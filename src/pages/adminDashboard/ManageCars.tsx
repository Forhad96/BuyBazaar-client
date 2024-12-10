import { Button, Table, TableColumnsType } from "antd";
import { useGetAllCarsQuery } from "../../redux/features/car/CarManagement.api";
import { TCar } from "../../types";
const ManageCars = () => {
  const { data: carData, isFetching } = useGetAllCarsQuery(undefined);
  console.log(carData);
  const tableData = carData?.data?.result?.map(({ _id, name,year,color }:TCar) => ({
    key: _id,
    name,
    year,
    color,
  }));
  const columns: TableColumnsType = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Year",
      dataIndex: "year",
    },
    {
      title: "Color",
      dataIndex: "color",
    },
    {
      title: "Action",
      render: () => <Button>Edit</Button>,
    },
  ];

  return (
    <Table
      loading={isFetching}
      columns={columns}
      dataSource={tableData}
      //   onChange={onChange}
      showSorterTooltip={{ target: "sorter-icon" }}
    />
  );
};
export default ManageCars;
