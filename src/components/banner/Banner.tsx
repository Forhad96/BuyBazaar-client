const Banner = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-light-background dark:bg-dark-background bg-cover bg-center h-screen text-light-text dark:text-dark-text px-4 sm:px-8"
      style={{
        backgroundImage:
          "url('https://demo.awaikenthemes.com/novaride/dark/wp-content/uploads/2024/08/hero-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-light-overlay dark:bg-dark-overlay"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="text-lg uppercase text-primary mb-4 font-epilogue font-bold">
          ō͡≡o˞̶ <br /> Welcome To Car Rent
        </p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
          Looking to save more on <br className="hidden lg:block" /> your rental
          car?
        </h1>
        <p className="text-base sm:text-lg mb-6 sm:mb-10">
          Whether you’re planning a weekend getaway, a business trip, or just
          need a reliable ride <br className="hidden sm:block" /> for the day,
          we offer a wide range of vehicles to suit your needs.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16">
          <button className="px-6 py-3 rounded-full flex items-center font-semibold bg-primary dark:bg-dark-button text-light-buttonText dark:text-dark-buttonText hover:bg-primaryHover dark:hover:bg-dark-buttonHover transition duration-300 ease-in-out transform hover:scale-110">
            Book A Rental
            <span className="ml-2 transform transition duration-300 ease-in-out group-hover:scale-110">
              ➜
            </span>
          </button>
          <button className="px-6 py-3 rounded-full flex items-center font-semibold bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text transition duration-300 ease-in-out transform hover:scale-110">
            Learn More
            <span className="ml-2 transform transition duration-300 ease-in-out group-hover:scale-110">
              ➜
            </span>
          </button>
        </div>
      </div>

      {/* Form Component */}
      <LuxuryCarForm />
    </div>
  );
};

export default Banner;

import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  fullName: string;
  phoneNo: string;
  location: string;
  pickupDate: string;
};

const LuxuryCarForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="relative z-10 p-6 rounded-md w-full max-w-6xl border bg-light-background border-light-border text-light-text dark:bg-dark-background dark:border-dark-border dark:text-dark-text">
      <h3 className="text-xl font-semibold mb-4">Need to Rent a Luxury Car?</h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5"
      >
        {/* Full Name */}
        <div className="flex flex-col">
          <label
            htmlFor="fullName"
            className="text-sm font-medium mb-1 text-light-text dark:text-dark-text"
          >
            Full Name
          </label>
          <input
            id="fullName"
            {...register("fullName", { required: "Full Name is required" })}
            type="text"
            placeholder="Enter Full Name"
            className="p-3 rounded-md bg-light-input placeholder-light-text w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:placeholder-dark-text"
          />
          {errors.fullName && (
            <span className="text-sm text-error dark:text-error">
              {errors.fullName.message}
            </span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label
            htmlFor="phoneNo"
            className="text-sm font-medium mb-1 text-light-text dark:text-dark-text"
          >
            Mobile No
          </label>
          <input
            id="phoneNo"
            {...register("phoneNo", { required: "Phone number is required" })}
            type="text"
            placeholder="Enter Phone no."
            className="p-3 rounded-md bg-light-input placeholder-light-text w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:placeholder-dark-text"
          />
          {errors.phoneNo && (
            <span className="text-sm text-error dark:text-error">
              {errors.phoneNo.message}
            </span>
          )}
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label
            htmlFor="location"
            className="text-sm font-medium mb-1 text-light-text dark:text-dark-text"
          >
            Pickup Location
          </label>
          <input
            id="location"
            {...register("location", { required: "Location is required" })}
            type="text"
            placeholder="Enter Location"
            className="p-3 rounded-md bg-light-input placeholder-light-text w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:placeholder-dark-text"
          />
          {errors.location && (
            <span className="text-sm text-error dark:text-error">
              {errors.location.message}
            </span>
          )}
        </div>

        {/* Pickup Date */}
        <div className="flex flex-col">
          <label
            htmlFor="pickupDate"
            className="text-sm font-medium mb-1 text-light-text dark:text-dark-text"
          >
            Pickup Date
          </label>
          <input
            id="pickupDate"
            {...register("pickupDate", { required: "Pickup date is required" })}
            type="date"
            className="p-3 rounded-md bg-light-input placeholder-light-text w-full focus:outline-none focus:ring-2 focus:ring-primary dark:bg-dark-input dark:placeholder-dark-text"
          />
          {errors.pickupDate && (
            <span className="text-sm text-error dark:text-error">
              {errors.pickupDate.message}
            </span>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-light-buttonText rounded-full font-semibold hover:bg-primaryHover dark:text-dark-buttonText dark:bg-primary dark:hover:bg-dark-buttonHover focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send  <span className="ml-2 transform transition duration-300 ease-in-out group-hover:scale-110">
  ➜
</span>
          </button>
        </div>
      </form>
    </div>
  );
};
<button type="submit" className="px-6 py-3 rounded-full flex items-center font-semibold bg-primary dark:bg-dark-button text-light-buttonText dark:text-dark-buttonText hover:bg-primaryHover dark:hover:bg-dark-buttonHover transition duration-300 ease-in-out transform hover:scale-105">
Send
<span className="ml-2 transform transition duration-300 ease-in-out group-hover:scale-110">
  ➜
</span>
</button>