import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Features from "../components/Features";
import Footer from "../components/Footer";
import AITools from "../components/AITools";
import CTA from "../components/CTA";
import WhyChoose from "../components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <AITools />
      <WhyChoose />
      <CTA />
      <Footer />
    </>
  );
}