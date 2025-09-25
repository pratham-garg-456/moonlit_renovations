import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "kitchen", name: "Kitchens" },
    { id: "bathroom", name: "Bathrooms" },
    { id: "living", name: "Living Spaces" },
    { id: "whole-home", name: "Whole Home" },
  ];

  const projects = [
    {
      id: 1,
      title: "Modern Kitchen Transformation",
      category: "kitchen",
      description:
        "Complete kitchen remodel featuring custom white cabinets, quartz countertops, and stainless steel appliances.",
      duration: "6 weeks",
      budget: "$45,000",
      features: [
        "Custom Cabinets",
        "Quartz Countertops",
        "Island Installation",
        "LED Lighting",
      ],
    },
    {
      id: 2,
      title: "Luxury Master Bathroom",
      category: "bathroom",
      description:
        "Spa-like master bathroom with walk-in shower, soaking tub, and heated floors.",
      duration: "4 weeks",
      budget: "$28,000",
      features: [
        "Walk-in Shower",
        "Soaking Tub",
        "Heated Floors",
        "Dual Vanity",
      ],
    },
    {
      id: 3,
      title: "Open Concept Living Room",
      category: "living",
      description:
        "Opened up walls to create a spacious, modern living area with built-in entertainment center.",
      duration: "3 weeks",
      budget: "$22,000",
      features: [
        "Wall Removal",
        "Built-in Storage",
        "Hardwood Flooring",
        "Crown Molding",
      ],
    },
    {
      id: 4,
      title: "Victorian Home Restoration",
      category: "whole-home",
      description:
        "Complete restoration of a historic Victorian home while preserving original character.",
      duration: "16 weeks",
      budget: "$125,000",
      features: [
        "Historic Preservation",
        "System Updates",
        "Period Details",
        "Modern Amenities",
      ],
    },
    {
      id: 5,
      title: "Contemporary Kitchen Design",
      category: "kitchen",
      description:
        "Sleek, contemporary kitchen with waterfall island and integrated smart appliances.",
      duration: "7 weeks",
      budget: "$52,000",
      features: [
        "Waterfall Island",
        "Smart Appliances",
        "Touch Controls",
        "Wine Storage",
      ],
    },
    {
      id: 6,
      title: "Guest Bathroom Refresh",
      category: "bathroom",
      description:
        "Small bathroom maximized with clever storage solutions and modern fixtures.",
      duration: "2 weeks",
      budget: "$12,000",
      features: [
        "Space Optimization",
        "Modern Fixtures",
        "Storage Solutions",
        "Tile Work",
      ],
    },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <Head>
        <title>Portfolio - Moonlit Renovations</title>
        <meta
          name="description"
          content="View our portfolio of completed renovation projects including kitchens, bathrooms, living spaces, and whole home transformations."
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
                Our <span className="text-yellow-400">Portfolio</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Explore our recent renovation projects and see the quality
                craftsmanship that sets us apart.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  {/* Project Image Placeholder */}
                  <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <svg
                        className="w-16 h-16 mx-auto mb-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="text-sm">Project Image</p>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium text-gray-900">
                          {project.duration}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Investment</p>
                        <p className="font-medium text-gray-900">
                          {project.budget}
                        </p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-sm text-gray-500 mb-2">Key Features</p>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* 
                    <button className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition-colors">
                      View Details
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Don&apos;t just take our word for it - hear from our satisfied
                customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Moonlit Renovations transformed our outdated kitchen
                  into a modern masterpiece. The attention to detail and quality
                  of work exceeded our expectations.&rdquo;
                </p>
                <p className="font-semibold text-gray-900">
                  - Sarah & Mike Johnson
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Professional, reliable, and skilled craftsmen. They
                  completed our bathroom renovation on time and within budget.
                  Highly recommended!&rdquo;
                </p>
                <p className="font-semibold text-gray-900">- David Rodriguez</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;The entire home renovation was handled with such
                  professionalism. Our house feels brand new and we
                  couldn&apos;t be happier with the results.&rdquo;
                </p>
                <p className="font-semibold text-gray-900">- Emily Chen</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Start Your Own Transformation Story
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to see your home featured in our next portfolio showcase?
              Let&apos;s discuss your renovation project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-300 transition-colors"
              >
                Get Your Free Quote
              </Link>
              <a
                href="tel:5551234567"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
