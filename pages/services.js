import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Services() {
  const services = [
    {
      title: "Kitchen Remodeling",
      description:
        "Transform your kitchen into a modern culinary paradise with custom cabinets, countertops, and appliances.",
      features: [
        "Custom Cabinet Design",
        "Granite/Quartz Countertops",
        "Appliance Installation",
        "Lighting Solutions",
        "Flooring Upgrade",
      ],
      icon: "🍳",
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Bathroom Renovation",
      description:
        "Create a spa-like retreat in your own home with luxurious fixtures and modern design elements.",
      features: [
        "Shower/Tub Installation",
        "Vanity & Mirror Setup",
        "Tile Work",
        "Plumbing Updates",
        "Ventilation Systems",
      ],
      icon: "🛁",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Living Room Makeover",
      description:
        "Redesign your living spaces for comfort, style, and functionality that fits your lifestyle.",
      features: [
        "Flooring Installation",
        "Paint & Wallpaper",
        "Built-in Storage",
        "Lighting Design",
        "Window Treatments",
      ],
      icon: "🛋️",
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Bedroom Renovation",
      description:
        "Create the perfect sanctuary for rest and relaxation with thoughtful design and quality materials.",
      features: [
        "Closet Organization",
        "Custom Built-ins",
        "Flooring Options",
        "Window Upgrades",
        "Lighting Solutions",
      ],
      icon: "🛏️",
      color: "from-pink-400 to-pink-600",
    },
    {
      title: "Basement Finishing",
      description:
        "Maximize your home's potential by transforming unused basement space into functional living areas.",
      features: [
        "Waterproofing",
        "Insulation & Drywall",
        "Flooring Installation",
        "Electrical Work",
        "Custom Layouts",
      ],
      icon: "🏠",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Whole Home Renovation",
      description:
        "Complete home transformations from top to bottom with comprehensive planning and execution.",
      features: [
        "Design Consultation",
        "Structural Updates",
        "System Upgrades",
        "Interior Design",
        "Project Management",
      ],
      icon: "🏡",
      color: "from-indigo-400 to-indigo-600",
    },
  ];

  return (
    <>
      <Head>
        <title>Our Services - Moonlit Renovations</title>
        <meta
          name="description"
          content="Comprehensive home renovation services including kitchen remodeling, bathroom renovation, living spaces, and complete home makeovers."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Renovation <span className="text-yellow-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                From single rooms to complete home makeovers, we offer
                comprehensive renovation services tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professional renovation services with attention to detail and
                commitment to excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center`}
                  >
                    <span className="text-6xl">{service.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li
                          key={fIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <svg
                            className="w-4 h-4 text-green-500 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A streamlined approach that ensures your renovation is completed
                on time, on budget, and to your exact specifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-900">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Consultation
                </h3>
                <p className="text-gray-600">
                  We discuss your vision, needs, and budget to create a
                  customized plan.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Design
                </h3>
                <p className="text-gray-600">
                  Our team creates detailed plans and 3D renderings for your
                  approval.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Construction
                </h3>
                <p className="text-gray-600">
                  Skilled craftsmen bring your vision to life with quality
                  materials.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Completion
                </h3>
                <p className="text-gray-600">
                  Final walkthrough and quality inspection ensure your
                  satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let&apos;s discuss
              how we can bring your renovation dreams to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Get Free Consultation
              </Link>
              <a
                href="tel:5551234567"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
