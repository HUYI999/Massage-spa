
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Team from "../components/Team";
import BookingForm from "../components/BookingForm";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Team />
      <BookingForm />
      <Contact />
      <Footer />
    </div>
  );
}
