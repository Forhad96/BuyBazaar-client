const UserDashboard = () => {
    return (
      <div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <OverviewCard title="Total bookings" value={2}></OverviewCard>
          <OverviewCard title="Pending Bookings" value={2}></OverviewCard>
          <OverviewCard title="Approved Bookings" value={2}></OverviewCard>
          <OverviewCard title="Total Spending" value={200}></OverviewCard>
        </section>
      </div>
    );
};
export default UserDashboard;





import { FC } from "react";

// Define props type
interface OverviewCardProps {
  title: string;
  value: string | number;
  className?: string;
}

const OverviewCard: FC<OverviewCardProps> = ({
  title,
  value,
  className,
}) => (
  <div
    className={`${className} p-7 rounded-lg shadow-lg w-full mt-4 lg:mt-0`}
  >
    <h2 className="text-xl text-[#9e9e9e] leading-10 font-semibold">{title}</h2>
    <p className="text-4xl mt-4">
      <span className="text-[gray] pr-3 "></span>
      {value}
    </p>
  </div>
);
