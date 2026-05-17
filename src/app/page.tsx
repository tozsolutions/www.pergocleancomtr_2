import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { References } from "@/components/sections/References";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <PriceCalculator />
      <Process />
      <Testimonials />
      <References />
      <BlogPreview />
      <Faq />
      <Contact />
    </>
  );
}