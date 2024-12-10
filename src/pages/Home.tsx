import Banner from "../components/banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import FAQSection from "../components/faqSection/FaqSection";
import FlashSaleSection from "../components/FlashSale/FlashSaleSection";
import CategoriesSection from "../components/category/CategorySection";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSaleSection/>

      <CategoriesSection/>
      <FAQSection />

      <Testimonial />
    </div>
  );
};
export default Home;
