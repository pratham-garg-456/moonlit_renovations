import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - Moonlit Renovations</title>
        <meta
          name="description"
          content="Learn about Moonlit Renovations - your trusted home renovation experts with over 15 years of experience transforming homes."
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
                About{" "}
                <span className="text-yellow-400">Moonlit Renovations</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
                Transforming homes and lives for over 15 years with passion,
                precision, and unmatched craftsmanship.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2010, Moonlit Renovations began as a small family
                  business with a simple mission: to transform houses into dream
                  homes. What started under the quiet inspiration of moonlit
                  planning sessions has grown into a trusted name in home
                  renovation.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our founder, inspired by the peaceful clarity that comes with
                  late-night planning and dreaming, believed that the best
                  renovations happen when you take the time to truly envision
                  the perfect space. This philosophy continues to guide every
                  project we undertake.
                </p>
                <p className="text-lg text-gray-600">
                  Today, we&apos;ve completed over 500+ successful renovations,
                  but our core values remain the same: quality craftsmanship,
                  honest communication, and turning your vision into reality.
                </p>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-8">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🌙</div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-4">
                      15+ Years
                    </h3>
                    <p className="text-blue-800">
                      of transforming homes and exceeding expectations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our core values shape every decision we make and every project
                we complete.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-blue-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Passion for Excellence
                </h3>
                <p className="text-gray-600">
                  Every project is approached with genuine enthusiasm and
                  commitment to delivering exceptional results that exceed
                  expectations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Customer First
                </h3>
                <p className="text-gray-600">
                  Your vision, needs, and satisfaction are at the heart of
                  everything we do. We listen, communicate, and deliver exactly
                  what you envision.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Integrity & Trust
                </h3>
                <p className="text-gray-600">
                  Honest pricing, transparent communication, and reliable
                  service you can count on. We build lasting relationships based
                  on trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Track Record
              </h2>
              <p className="text-xl text-blue-100">
                Numbers that speak to our experience and dedication
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  500+
                </div>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  15+
                </div>
                <p className="text-blue-100">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  100%
                </div>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
                  24/7
                </div>
                <p className="text-blue-100">Support Available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Renovation Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join the hundreds of satisfied homeowners who trusted us with
              their dream renovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors"
              >
                Get Your Free Quote
              </a>
              <a
                href="/portfolio"
                className="border-2 border-blue-900 text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 hover:text-white transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
