import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              OptoSoftware Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions designed specifically for the eyewear
              industry.
            </p>
          </div>
        </div>
      </section>

      {/* Main Product - Optigrid.io */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Optigrid.io
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <a href="https://www.optigrid.io/">
                The premier SaaS platform for precise pupillary distance
                measurement
              </a>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Precision PD Measurement for Eyewear Professionals
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Optigrid.io revolutionizes how opticians and eyewear retailers
                measure pupillary distance (PD), ensuring perfect fitting
                glasses and improved customer satisfaction.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Accurate to 0.1mm precision",
                  "Works with any device with a camera",
                  "No specialized equipment needed",
                  "Results in seconds",
                  "Integrates with your existing systems",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-primary mr-2 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8" asChild>
                  <a href="https://www.optigrid.io/">
                    Lear more about Optigrid.io
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <a href="https://app.optigrid.io/demo/">Watch Demo</a>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
                <div className="w-4/5 h-4/5 bg-white rounded-lg shadow-md p-6">
                  <div className="grid grid-cols-3 gap-2 h-full">
                    <div className="col-span-2 bg-blue-50 rounded-md flex items-center justify-center">
                      <div className="relative w-32 h-32 rounded-full bg-gray-200">
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-black"></div>
                        </div>
                        <div className="absolute inset-0 border-2 border-dashed border-blue-400 rounded-full"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 text-xs font-mono">
                          PD: 63.5mm
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="h-1/3 bg-gray-100 rounded-md p-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      </div>
                      <div className="h-1/3 bg-gray-100 rounded-md p-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      </div>
                      <div className="h-1/3 bg-gray-100 rounded-md p-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-1"></div>
                        <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              How Optigrid.io Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Capture",
                  description:
                    "Take a simple photo of your customer using any smartphone or tablet with our app.",
                  icon: (
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Analyze",
                  description:
                    "Our advanced AI algorithms instantly analyze the image and calculate precise PD measurements.",
                  icon: (
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Apply",
                  description:
                    "Use the accurate measurements to order or adjust eyewear with confidence.",
                  icon: (
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center"
                >
                  <div className="flex justify-center mb-4">{step.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits for Your Business
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Increased Accuracy",
                  description:
                    "Reduce errors in eyewear prescriptions with precise PD measurements that ensure perfect fitting glasses.",
                },
                {
                  title: "Time Savings",
                  description:
                    "Get instant measurements without manual tools, speeding up the customer experience.",
                },
                {
                  title: "Enhanced Customer Experience",
                  description:
                    "Impress customers with modern technology that delivers better-fitting eyewear.",
                },
                {
                  title: "Reduced Returns",
                  description:
                    "Minimize costly returns and adjustments by getting measurements right the first time.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Eyewear Business Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond Optigrid.io, OptoSoftware offers a comprehensive suite of
              tools for eyewear professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inventory Management",
                description:
                  "Keep track of your entire inventory with real-time updates, low stock alerts, and automated reordering.",
              },
              {
                title: "Patient Records & CRM",
                description:
                  "Maintain comprehensive patient records with medical history, prescriptions, and purchase history.",
              },
              {
                title: "Point of Sale",
                description:
                  "Streamline your checkout process with our integrated POS system designed for eyewear retailers.",
              },
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link
                  href="#"
                  className="text-primary hover:underline font-medium"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Eyewear Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join hundreds of optical businesses already using Optigrid.io and
            our suite of tools to streamline operations and enhance customer
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8" asChild>
              <a href="https://www.optigrid.io/">Start Free Trial</a>
            </Button>
            <Button size="lg" variant="outline" className="px-8" asChild>
              <a href="https://app.optigrid.io/demo/">Demo</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
