import CommonSlider from "../Shared/CommonSlider/CommonSlider";
import SliderAction from "../Shared/CommonSlider/SliderAction";
import SectionHeader from "../Shared/SectionHeader";
import TestimonialsCard from "./TestimonialsCard";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "Robert Johnson",
      title: "Business Traveler",
      rating: 5,
      quote:
        "Drive Now car rentals exceeded my expectations with their outstanding service and quality vehicles. Highly recommended!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Sarah Lee",
      title: "Family Traveler",
      rating: 4,
      quote:
        "The car was clean, comfortable, and exactly what I needed for my business trip. The rental process was smooth and hassle-free!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily Davis",
      title: "Vacationer",
      rating: 2,
      quote:
        "Great service and a wonderful selection of vehicles. The staff was incredibly helpful and made my trip even better.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Frequent Renter",
      rating: 4,
      quote:
        "I’ve rented from several companies, but this one always delivers the best service and vehicles at affordable prices.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Frequent Renter",
      rating: 4,
      quote:
        "I’ve rented from several companies, but this one always delivers the best service and vehicles at affordable prices.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Frequent Renter",
      rating: 4,
      quote:
        "I’ve rented from several companies, but this one always delivers the best service and vehicles at affordable prices.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Frequent Renter",
      rating: 4,
      quote:
        "I’ve rented from several companies, but this one always delivers the best service and vehicles at affordable prices.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <SectionHeader
            size="large"
            subtitle="Testimonials"
            title="What our customers are saying about us"
          />
        </div>
        <div className="mt-12">
          <CommonSlider
            sliderId="testimonials"
            loop={true}
            slidesPerView={3}
            slidesPerGroup={1}
            grabCursor
          >
            {testimonials.map((item, idx) => (
              <TestimonialsCard key={idx} item={item} />
            ))}
          </CommonSlider>
          <SliderAction sliderId="testimonials" buttonColor="bg-primary" />
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
