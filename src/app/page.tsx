import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Destinations from "@/components/Destinations";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
