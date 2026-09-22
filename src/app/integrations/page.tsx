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
              Optogrid connects to Shopify and Nuvemshop.
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
                Online Stores
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                If you sell glasses online, customers need a way to give you
                their PD. Connect Optogrid to your store and the measurements
                are attached to the customer&apos;s order.
              </p>

              <div className="max-w-xl mb-16">
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
                    Customers measure their PD from a photo, and you get the
                    result with their order. No store visit needed.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Shopify
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      Nuvemshop
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
                  Using a Different Platform?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Tell us which store or system you use and we&apos;ll let you
                  know what&apos;s possible.
                </p>
                <Button asChild size="lg">
                  <a href="/contact">Contact Us</a>
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
                      Shopify · Nuvemshop
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
