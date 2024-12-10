import Banner from "../components/banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import FAQSection from "../components/faqSection/FaqSection";
import FlashSaleSection from "../components/FlashSale/FlashSaleSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSaleSection/>
      <FAQSection />

      <Testimonial />
    </div>
  );
};
export default Home;
