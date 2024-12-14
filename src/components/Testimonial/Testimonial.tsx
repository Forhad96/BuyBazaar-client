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
        "BuyBazaar is the ultimate marketplace for all my shopping needs. The variety and quality of products are unmatched!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      name: "Sarah Lee",
      title: "Family Shopper",
      rating: 4,
      quote:
        "I found everything I needed for my family at BuyBazaar. The platform is easy to use, and the customer service is excellent!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Emily Davis",
      title: "Frequent Buyer",
      rating: 2,
      quote:
        "The deals and discounts at BuyBazaar are fantastic! The support team is friendly and responsive.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Tech Enthusiast",
      rating: 4,
      quote:
        "BuyBazaar offers the best tech gadgets at competitive prices. I'm always impressed by their prompt delivery and service.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Tech Enthusiast",
      rating: 4,
      quote:
        "BuyBazaar offers the best tech gadgets at competitive prices. I'm always impressed by their prompt delivery and service.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Tech Enthusiast",
      rating: 4,
      quote:
        "BuyBazaar offers the best tech gadgets at competitive prices. I'm always impressed by their prompt delivery and service.",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Michael Lee",
      title: "Tech Enthusiast",
      rating: 4,
      quote:
        "BuyBazaar offers the best tech gadgets at competitive prices. I'm always impressed by their prompt delivery and service.",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto ">
          <SectionHeader
            size="large"
            // subtitle="Testimonials"
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
          <SliderAction sliderId="testimonials" buttonColor="bg-gradient-purple-to-pink" />
        </div>
      </div>
    </section>
  );
};
export default Testimonial;
