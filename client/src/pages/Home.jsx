import { useEffect, useState } from "react";
import useContent from "../hooks/useContent";
import BlogPostSection from "../components/BlogPostSection";
import TestimonialSection from "../components/TestimonialSection";
import PromotionSection from "../components/PromotionSection";
import FeaturedProducts from "../components/FeaturedProducts";
import HeaderSection from "../components/HeaderSection";
import WhyChooseSection from "../components/WhyChooseSection";

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const { getContent } = useContent();

  const hero = getContent("hero");
  const sections = getContent("sections");
  const whyChooseSection = sections?.whyChoose;
  const testimonialSection = sections?.testimonials;
  const featuredSection = sections?.featuredProducts;
  const promotionsData = sections?.promotions;

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const productsResponse = await fetch("/api/products");
        const productsData = await productsResponse.json();
        console.log("Products data:", productsData); // For debuggind
        setFeaturedProducts(Array.isArray(productsData) ? productsData : []);

        const testimonialsResponse = await fetch("/api/testimonials");
        const testimonialsData = await testimonialsResponse.json();
        console.log("Testimonials data:", testimonialsData); // For debuggind
        setTestimonials(
          Array.isArray(testimonialsData) ? testimonialsData : []
        );
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <HeaderSection data={hero} />
      <WhyChooseSection data={whyChooseSection} />
      {featuredProducts && (
        <FeaturedProducts
          sectionData={featuredSection}
          data={featuredProducts}
        />
      )}
      {testimonials && (
        <TestimonialSection
          sectionData={testimonialSection}
          data={testimonials}
        />
      )}
      <PromotionSection data={promotionsData} />
      <BlogPostSection />
    </>
  );
};

export default Home;
