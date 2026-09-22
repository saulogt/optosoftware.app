import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

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
							Questions about Optogrid or your account? Send us an email.
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
									Email
								</h3>
								<p className="text-gray-600 mb-2">For questions and support:</p>
								<a
									href="mailto:support@optogrid.com"
									className="text-primary font-medium hover:underline"
								>
									support@optogrid.com
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
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{[
							{
								question: "How accurate is Optogrid for PD measurements?",
								answer:
									"Optogrid measures PD with 0.1 mm precision. For the best result, take the photo in good light, look straight at the camera, and keep a credit card in the picture as a size reference.",
							},
							{
								question: "Do I need special equipment to use Optogrid?",
								answer:
									"No. You need a phone, tablet or computer with a camera, and a standard credit card to use as a size reference.",
							},
							{
								question: "Is there a free trial?",
								answer:
									"Yes. You can start for free with no credit card. There's also a demo at app.optogrid.com/demo.",
							},
							{
								question: "Does Optogrid work with my online store?",
								answer:
									"Optogrid connects to Shopify and Nuvemshop and attaches the measurements to the customer's order. If you use another platform, email us.",
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
