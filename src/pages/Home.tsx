import Banner from "../components/banner/Banner";
import Testimonial from "../components/Testimonial/Testimonial";
import FAQSection from "../components/faqSection/FaqSection";
import FlashSaleSection from "../components/FlashSale/FlashSaleSection";
import CategoriesSection from "../components/category/CategoriesSection";
import FeaturedProducts from "../components/featuredProducts/featuredProducts";
import ProductListing from "@/components/featuredProducts/ProductListing";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSaleSection/>
      <CategoriesSection/>
      {/* <FeaturedProducts/> */}
      <ProductListing/>
      <FAQSection />

      <Testimonial />
    </div>
  );
};
export default Home;
