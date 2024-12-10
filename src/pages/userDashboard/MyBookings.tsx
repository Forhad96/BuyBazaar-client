import { Button, Table, TableColumnsType } from "antd";
import { useGetMyBookingsQuery } from "../../redux/features/user/bookingManagement";
import { TBooking } from "../../types";

const MyBookings = () => {
    const {data:bookingData,isFetching} = useGetMyBookingsQuery(undefined)
    // console.log(bookingData);
  const tableData = bookingData?.data?.map(({ _id, date, startTime }:TBooking) => ({
    key: _id,
    date,
    startTime
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
            render: () => <Button>Update</Button>,
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
export default MyBookings;