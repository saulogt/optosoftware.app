import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";

export default function ProductsPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							Products
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Right now we make one product: Optogrid.
						</p>
					</div>
				</div>
			</section>

			{/* Main Product - Optogrid */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="mb-16 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Optogrid
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							<a href="https://www.optogrid.com/">
								Measure PD, Dual PD and segment height from a photo
							</a>
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
						<div>
							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								PD Measurement Without a Pupillometer
							</h3>
							<p className="text-lg text-gray-600 mb-6">
								Your customer takes a photo with a credit card as a size
								reference, and Optogrid works out their pupillary distance (PD)
								from it. You can take the order without a store visit, and it
								works just as well at the counter.
							</p>
							<ul className="space-y-3 mb-8">
								{[
									"PD, Dual PD and segment height",
									"0.1 mm precision",
									"Runs in the browser on a phone, tablet or computer",
									"No special equipment, just a credit card for scale",
									"Connects to Shopify and Nuvemshop",
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
									<a href="https://www.optogrid.com/">
										Learn More About Optogrid
									</a>
								</Button>
								<Button size="lg" variant="outline" className="px-8" asChild>
									<a href="https://app.optogrid.com/demo">Try the Demo</a>
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
							How Optogrid Works
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{[
								{
									title: "Capture",
									description:
										"Send the customer a link, or take the photo yourself in the store. A credit card in the picture sets the scale.",
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
									title: "Measure",
									description:
										"Optogrid uses the card to set the scale and calculates PD, Dual PD and segment height.",
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
									title: "Order",
									description:
										"Send the numbers to the lab with the order. The measurement stays on file if you need it again.",
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
							Why Opticians Use It
						</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{[
								{
									title: "Fewer Remakes",
									description:
										"Getting the PD right the first time means fewer lenses sent back to the lab.",
								},
								{
									title: "Sell Online",
									description:
										"Customers who buy from your website can send their PD without coming in.",
								},
								{
									title: "Less Time at the Counter",
									description:
										"Measure in the store from a photo instead of with a ruler or pen dots.",
								},
								{
									title: "Reuse Measurements",
									description:
										"Every measurement is saved, so returning customers don't need to send a new photo.",
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

			{/* CTA Section */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-5xl text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Try Optogrid
					</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
						Start for free, or open the demo to see how a measurement works.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="px-8" asChild>
							<a href="https://www.optogrid.com/">Start Free Trial</a>
						</Button>
						<Button size="lg" variant="outline" className="px-8" asChild>
							<a href="https://app.optogrid.com/demo">Try the Demo</a>
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
