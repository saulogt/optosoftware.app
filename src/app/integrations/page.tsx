import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function IntegrationsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Integrations
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamlessly connect OptoSoftware with your favorite tools and
              platforms
            </p>
          </div>
        </div>
      </section>

      {/* Main Integrations Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Powerful Connections for Your Eyewear Business
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                OptoSoftware is designed to work seamlessly with the tools and
                platforms you already use. Our integrations help streamline your
                workflow, eliminate data silos, and create a cohesive technology
                ecosystem for your eyewear business.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* E-commerce Integration */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    E-commerce Platforms
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Connect your OptoSoftware solutions with leading e-commerce
                    platforms to offer seamless online shopping experiences. Our
                    PD measurement technology integrates directly with your
                    online store.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Shopify
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      WooCommerce
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Magento
                    </span>
                  </div>
                </div>

                {/* Practice Management */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Practice Management Systems
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Integrate with your existing practice management software to
                    streamline patient data, prescriptions, and appointments.
                    Eliminate double entry and reduce errors.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Eyefinity
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      My Vision Express
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      RevolutionEHR
                    </span>
                  </div>
                </div>

                {/* Lens Manufacturers */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Lens Manufacturers
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Connect directly with lens manufacturers for seamless
                    ordering and processing. Send precise measurements and
                    prescription data electronically to reduce errors and speed
                    up fulfillment.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Essilor
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Zeiss
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Hoya
                    </span>
                  </div>
                </div>

                {/* Payment Processors */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Payment Processors
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Integrate with popular payment processors to offer flexible
                    payment options to your customers. Process transactions
                    securely and efficiently.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Stripe
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      PayPal
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Square
                    </span>
                  </div>
                </div>

                {/* Insurance Providers */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Insurance Providers
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Streamline insurance claim processing with direct
                    integrations to major vision insurance providers. Verify
                    eligibility and submit claims electronically.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      VSP
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      EyeMed
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Davis Vision
                    </span>
                  </div>
                </div>

                {/* Marketing Tools */}
                <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col h-full">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Marketing Tools
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Connect with popular marketing platforms to automate
                    customer communications, manage email campaigns, and track
                    customer engagement.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Mailchimp
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      HubSpot
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Klaviyo
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Partners */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Integration Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              We work with leading technology providers in the eyewear industry
              to ensure seamless compatibility and enhanced functionality.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center justify-center h-24"
              >
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-400 font-medium">
                    Partner Logo {i}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-white p-8 md:p-12 rounded-xl shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Need a Custom Integration?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our team can help you connect OptoSoftware with your existing
                  systems or build custom integrations tailored to your specific
                  business needs.
                </p>
                <Button asChild size="lg">
                  <a href="/contact">Contact Our Integration Team</a>
                </Button>
              </div>
              <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
                    <svg
                      className="w-16 h-16 text-primary mb-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    <div className="text-xl text-center text-gray-700">
                      Seamless connections for your business
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
