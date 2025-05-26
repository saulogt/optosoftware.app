import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Roadmap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The future of OptoSoftware and our vision for innovation
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Upcoming Innovations
              </h2>
              <p className="text-lg text-gray-600 mb-12 max-w-3xl">
                At OptoSoftware, we&apos;re constantly innovating to bring you the most advanced solutions for the eyewear industry. 
                Here&apos;s a glimpse of what we&apos;re working on for the upcoming months.
              </p>

              <div className="space-y-12">
                {/* Roadmap Item 1 */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      PD Measurement Shopify App
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We&apos;re developing a seamless Shopify integration that will allow online eyewear retailers to offer precise pupillary distance measurements directly on their e-commerce stores. This will significantly improve the online shopping experience for customers and reduce return rates for retailers.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">Coming Soon</span>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 2 */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Expanding Branding to Optogrid
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We&apos;re introducing Optogrid as an alternative branding to Optigrid.io, creating a more versatile brand identity that resonates with a broader audience in the eyewear industry. This rebranding initiative will include a refreshed visual identity and expanded marketing presence.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full">In Progress</span>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 3 */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Advanced AI PD Measurement Capabilities
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We&apos;re enhancing our PD measurement technology with more advanced AI capabilities. This upgrade will improve accuracy, reduce measurement time, and enable measurements in more challenging lighting conditions. The AI will also be able to detect and account for various eyewear frames, providing more precise measurements for different styles.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full">Research Phase</span>
                    </div>
                  </div>
                </div>

                {/* Roadmap Item 4 */}
                <div className="relative pl-8 border-l-2 border-primary">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Future Innovations
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our team is constantly researching and developing new technologies to address the evolving needs of the eyewear industry. While we can&apos;t reveal all the details yet, our upcoming innovations will focus on enhancing the customer experience, improving operational efficiency for optical businesses, and leveraging cutting-edge technologies to solve industry challenges.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full">Planning</span>
                    </div>
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
                  Want to Influence Our Roadmap?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We value input from eyewear professionals. If you have ideas for features or improvements that would benefit your business, we&apos;d love to hear from you.
                </p>
                <Button asChild size="lg">
                  <a href="/contact">Share Your Ideas</a>
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
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    <div className="text-xl text-center text-gray-700">
                      Help shape the future of eyewear technology
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Stay Updated on Our Progress
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Subscribe to our newsletter to receive updates on our roadmap progress, new feature releases, and exclusive insights into the future of eyewear technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Subscribe to Updates
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
