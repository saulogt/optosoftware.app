import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;d love to hear from you. Reach out with any questions
              about our products or services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Contact Information
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email Us
                </h3>
                <p className="text-gray-600 mb-2">
                  For general inquiries and support:
                </p>
                <a
                  href="mailto:support@optigrid.io"
                  className="text-primary font-medium hover:underline"
                >
                  support@optigrid.io
                </a>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Our Location
                </h3>
                <p className="text-gray-600">
                  OptoSoftware Headquarters
                  <br />
                  Vancouver, British Columbia
                  <br />
                  Canada
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Business Hours
                </h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM (PST)
                  <br />
                  Saturday - Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our products and
              services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                question: "How accurate is Optigrid.io for PD measurements?",
                answer:
                  "Optigrid.io provides PD measurements with 0.1mm precision, ensuring highly accurate results for eyewear fitting.",
              },
              {
                question: "Do I need special equipment to use Optigrid.io?",
                answer:
                  "No, Optigrid.io works with any device that has a camera, such as smartphones, tablets, or computers with webcams.",
              },
              {
                question: "Is there a trial version available?",
                answer:
                  "Yes, we offer a free trial so you can experience the benefits of Optigrid.io before making a commitment.",
              },
              {
                question: "Can Optigrid.io integrate with my existing systems?",
                answer:
                  "Yes, Optigrid.io is designed to integrate seamlessly with most practice management and inventory systems used in the eyewear industry.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
