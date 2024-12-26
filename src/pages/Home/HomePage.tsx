import Banner from "../../components/banner/Banner";
import Testimonial from "../../components/Testimonial/Testimonial";
import FAQSection from "../../components/faqSection/FaqSection";
import FlashSaleSection from "../../components/FlashSale/FlashSaleSection";
import CategoriesSection from "../../components/category/CategoriesSection";
import FeaturedProducts from "../../components/featuredProducts/featuredProducts";
import ProductListing from "@/components/featuredProducts/ProductListing";
import RelatedProduct from "@/components/product/RelatedProduct";
import LiveChat from "@/components/product/LiveChat";
import SpecialOffer from "@/components/product/SpecialOffer";
import { useAppSelector } from "@/redux/hooks";
import { selectCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

const HomePage = () => {
    const token = useAppSelector(selectCurrentToken);
  
    let user;
  
    if (token) {
      user = verifyToken(token);
    }
  console.log(user);
  return (
    <div>
      <Banner />
      <FlashSaleSection/>
      <CategoriesSection/>
      <SpecialOffer/>
      <RelatedProduct/>
      <LiveChat/>

      <FeaturedProducts/>
      <ProductListing/>
      <FAQSection />

      <Testimonial />
    </div>
  );
};
export default HomePage;
