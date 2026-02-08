import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export default function FeaturesPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Features Built for Optical Businesses
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Discover how OptoSoftware&apos;s comprehensive suite of tools can
							transform your eyewear business.
						</p>
					</div>
				</div>
			</section>

			{/* Main Features */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-7xl">
					{[
						{
							title: "Inventory Management",
							description:
								"Keep track of your entire inventory with real-time updates, low stock alerts, and automated reordering. Our system handles frames, lenses, accessories, and more with detailed categorization and search capabilities.",
							features: [
								"Real-time inventory tracking",
								"Barcode scanning integration",
								"Automated reordering",
								"Multi-location inventory management",
								"Detailed product categorization",
								"Supplier management",
							],
							imagePosition: "right",
						},
						{
							title: "Patient Records & CRM",
							description:
								"Maintain comprehensive patient records with medical history, prescriptions, purchase history, and appointment scheduling. Our CRM tools help you build lasting relationships with your customers.",
							features: [
								"Comprehensive patient profiles",
								"Prescription management",
								"Purchase history tracking",
								"Appointment scheduling",
								"Communication history",
							],
							imagePosition: "left",
						},
						{
							title: "Point of Sale",
							description:
								"Streamline your checkout process with our integrated POS system. Process payments, apply discounts, manage insurance billing, and generate receipts and invoices all in one place.",
							features: [
								"Integrated payment processing",
								"Insurance billing",
								"Discount and promotion management",
								"Digital receipts and invoices",
								"Returns and exchanges",
								"Gift card management",
							],
							imagePosition: "right",
						},
						{
							title: "Analytics & Reporting",
							description:
								"Gain valuable insights into your business performance with detailed analytics and customizable reports. Track sales, inventory, customer behavior, and more to make data-driven decisions.",
							features: [
								"Sales performance tracking",
								"Inventory analytics",
								"Customer behavior insights",
								"Staff performance metrics",
								"Customizable reports",
								"Data export options",
							],
							imagePosition: "left",
						},
					].map((feature, index) => (
						<div key={index} className="mb-24">
							<div
								className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
									feature.imagePosition === "left" ? "lg:flex-row-reverse" : ""
								}`}
							>
								<div>
									<h2 className="text-3xl font-bold text-gray-900 mb-4">
										{feature.title}
									</h2>
									<p className="text-lg text-gray-600 mb-6">
										{feature.description}
									</p>
									<ul className="space-y-3 mb-8">
										{feature.features.map((item, i) => (
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
									<Button>Learn More</Button>
								</div>
								<div
									className={`relative h-[400px] rounded-xl overflow-hidden shadow-lg ${
										feature.imagePosition === "left" ? "order-first" : ""
									}`}
								>
									<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
										<div className="w-4/5 h-4/5 bg-white rounded-lg shadow-md p-6">
											<div className="h-8 bg-gray-200 rounded-md w-3/4 mb-4"></div>
											<div className="h-4 bg-gray-200 rounded-md w-full mb-2"></div>
											<div className="h-4 bg-gray-200 rounded-md w-5/6 mb-2"></div>
											<div className="h-4 bg-gray-200 rounded-md w-4/6 mb-6"></div>
											<div className="grid grid-cols-2 gap-4">
												<div className="h-24 bg-blue-100 rounded-md"></div>
												<div className="h-24 bg-blue-100 rounded-md"></div>
												<div className="h-24 bg-blue-100 rounded-md"></div>
												<div className="h-24 bg-blue-100 rounded-md"></div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-5xl text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Ready to Experience OptoSoftware?
					</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
						Join hundreds of optical businesses already using our platform to
						streamline operations and enhance customer experiences.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="px-8" asChild>
							<a href="https://www.optogrid.com">Start Free Trial</a>
						</Button>
						<Button size="lg" variant="outline" className="px-8" asChild>
							<a href="https://app.optogrid.io/demo">Test our Demo</a>
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
