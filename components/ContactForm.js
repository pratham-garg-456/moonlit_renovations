import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import Testimonial from "../components/Testimonial";
import PortfolioItem from "../components/PortfolioItem";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        {/* Hero Section */}
        <section>
          <h1>Transform Your Space with Expert Renovation</h1>
          <p>Quality renovations for kitchens, bathrooms, and more!</p>
        </section>
        {/* Services Overview */}
        <section>
          <h2>Our Services</h2>
          <div>
            <ServiceCard title="Kitchen Renovation" />
            <ServiceCard title="Bathroom Upgrade" />
            {/* Add more services */}
          </div>
        </section>
        {/* Portfolio Preview */}
        <section>
          <h2>Recent Projects</h2>
          {/* <PortfolioItem /> */}
          {/* Add more portfolio items */}
        </section>
        {/* Testimonials */}
        <section>
          <h2>What Clients Say</h2>
          {/* <Testimonial /> */}
        </section>
        {/* CTA */}
        <section>
          <button>Get a Free Quote</button>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
