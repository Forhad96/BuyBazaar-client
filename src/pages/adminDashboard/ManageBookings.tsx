import { Button, Table, TableColumnsType } from "antd";
import { useGetAllBookingsQuery } from "../../redux/features/admin/adminManagement.api";
import { TBooking } from "../../types";
const ManageBookings = () => {
  const { data: bookingData, isFetching } = useGetAllBookingsQuery(undefined);
  console.log(bookingData);
  const tableData = bookingData?.data?.map(({ _id, date, startTime }:TBooking) => ({
    key: _id,
    date,
    startTime,
  }));
  const columns: TableColumnsType = [
    {
      title: "Pick Up Date",
      dataIndex: "date",
    },
    {
      title: "Pick Up Time",
      dataIndex: "startTime",
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
export default ManageBookings;
