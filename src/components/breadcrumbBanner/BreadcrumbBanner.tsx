import { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "../Shared/Container";
import { useGetSingleCarsQuery } from "../../redux/features/car/CarManagement.api";

const BreadcrumbBanner: FC = () => {
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/").filter(Boolean);
  const carId = pathSegments[1]; // Assuming the ID is the second segment

  const { data: carData, isError, isLoading } = useGetSingleCarsQuery(carId);
  // Generate breadcrumbs, always starting with "Home"
  // console.log(carData);
  const breadcrumbPaths = [
    { label: "Home", path: "/" },
    ...pathname
      .replace(/^\/home/, "") // Remove the `/home` prefix from the pathname
      .split("/")
      .filter(Boolean) // Remove empty segments
      .map((segment, index, array) => {
        let label = segment.charAt(0).toUpperCase() + segment.slice(1);
        if (index === 1 && carData) {
          // Replace ID with car name
          label = carData?.name || "Unknown Car"; // Assuming carData has a 'name' property
        }
        return {
          label,
          path: "/" + array.slice(0, index + 1).join("/"), // Build path for breadcrumb
        };
      }),
  ];

  // Use the last breadcrumb for the title
  const title = breadcrumbPaths[breadcrumbPaths.length - 1]?.label || "Home";

  return (
    <Container>
      <div
        className="relative flex flex-col items-center justify-center bg-light-background dark:bg-dark-background bg-cover bg-center lg:h-[320px] mt-5 text-light-text dark:text-dark-text px-4 sm:px-8 mb-10 rounded-lg"
        style={{
          backgroundImage:
            "url('https://demo.awaikenthemes.com/novaride/wp-content/uploads/2024/08/page-header-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-overlay/25 dark:bg-dark-overlay"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          {carData && isLoading ? (
            <p>Loading...</p>
          ) : carData && isError ? (
            <p>Error loading car details</p>
          ) : (
            <>
              <h1 className="text-4xl sm:text-6xl text-white lg:text-7xl font-bold mb-6">
                {title}
              </h1>

              <p className="text-white font-bold text-xl tracking-wide">
                {breadcrumbPaths.map((breadcrumb, index) => (
                  <span key={breadcrumb.path}>
                    <Link
                      to={breadcrumb.path}
                      className={`${
                        index === breadcrumbPaths.length - 1
                          ? "text-primary"
                          : "hover:underline"
                      }`}
                    >
                      {breadcrumb.label}
                    </Link>
                    {index < breadcrumbPaths.length - 1 && " / "}
                  </span>
                ))}
              </p>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default BreadcrumbBanner;
