import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Button } from "@/components/ui/button";
import {
	numberExperienceYears,
	numberOpticalStores,
	numberPDMeasurements,
} from "@/lib/consts";

export default function AboutPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />

			{/* Hero Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							About OptoSoftware
						</h1>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto">
							Pioneering eyewear technology solutions
						</p>
					</div>
				</div>
			</section>

			{/* Our Story */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Story
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Founded in British Columbia, Canada, OptoSoftware founders have
								over 30 years of experience in the eyewear industry and the same
								amount of experience in software development. What began as an
								idea to solve a real problem for our small family-run eyewear
								business, has grown into innovative solutions for opticians and
								eyewear retailers worldwide.
							</p>
							<p className="text-lg text-gray-600 mb-6">
								Our flagship product, Optogrid, has streamlined pupillary
								distance measurement, performing over 1 million measurements and
								counting. This achievement reflects our commitment to precision,
								reliability, and continuous innovation in eyewear technology.
							</p>
							<p className="text-lg text-gray-600">
								Based in beautiful British Columbia, our team combines deep
								industry knowledge with cutting-edge technology to create
								solutions that address the real challenges faced by eyewear
								professionals every day.
							</p>
						</div>
						<div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
								<div className="w-4/5 h-4/5 bg-white rounded-lg shadow-md p-6 flex flex-col justify-center items-center">
									<div className="text-5xl font-bold text-primary mb-4">
										30+
									</div>
									<div className="text-xl text-gray-700 mb-8">
										Years of Experience
									</div>
									<div className="w-full h-px bg-gray-200 mb-8"></div>
									<div className="text-5xl font-bold text-primary mb-4">
										1M+
									</div>
									<div className="text-xl text-gray-700">PD Measurements</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Mission */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Our Mission
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
							To empower eyewear professionals with innovative technology that
							enhances precision, efficiency, and customer satisfaction.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								title: "Innovation",
								description:
									"We continuously push the boundaries of what&apos;s possible in eyewear technology, developing solutions that solve real-world problems.",
							},
							{
								title: "Precision",
								description:
									"We're committed to accuracy in every measurement, ensuring perfect-fitting eyewear and satisfied customers.",
							},
							{
								title: "Accessibility",
								description:
									"We believe advanced technology should be accessible to all eyewear professionals, regardless of practice size.",
							},
						].map((value, index) => (
							<div key={index} className="bg-white p-8 rounded-lg shadow-md">
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{value.title}
								</h3>
								<p className="text-gray-600">{value.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Location */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-7xl">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-gray-900 mb-6">
								Our Home in British Columbia
							</h2>
							<p className="text-lg text-gray-600 mb-6">
								Located in the heart of British Columbia, Canada, our
								headquarters draws inspiration from the natural beauty that
								surrounds us. The innovative spirit of the Pacific Northwest
								tech scene combined with our deep roots in the eyewear industry
								creates the perfect environment for developing groundbreaking
								solutions.
							</p>
							<p className="text-lg text-gray-600 mb-8">
								From our Canadian base, we serve eyewear professionals across
								North America and beyond, bringing precision and efficiency to
								optical practices worldwide.
							</p>
							<Button asChild>
								<a href="/contact">Contact Us</a>
							</Button>
						</div>
						<div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-blue-100 flex items-center justify-center">
								<div className="w-4/5 h-4/5 bg-white rounded-lg shadow-md p-6">
									<div className="h-full flex items-center justify-center">
										<div className="text-center">
											<div className="text-2xl font-bold text-gray-900 mb-2">
												OptoSoftware HQ
											</div>
											<div className="text-gray-600 mb-4">
												Vancouver, British Columbia
											</div>
											<div className="w-full h-48 bg-blue-100 rounded-md mb-4 flex items-center justify-center">
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
														d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
											</div>
											<div className="text-sm text-gray-500">
												Proudly Canadian since 2019
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Achievements */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-7xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-gray-900 mb-6">
							Our Achievements
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
							Milestones that mark our journey of innovation
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						{[
							{
								number: numberPDMeasurements,
								label: "PD Measurements",
								description: "Performed by Optogrid.io worldwide",
							},
							{
								number: numberExperienceYears,
								label: "Years Experience",
								description: "In the eyewear industry",
							},
							{
								number: numberOpticalStores,
								label: "Optical Stores",
								description: "Using our solutions daily",
							},
							{
								number: "0.1 mm",
								label: "Precision",
								description: "In PD measurements",
							},
						].map((stat, index) => (
							<div
								key={index}
								className="bg-white p-6 rounded-lg shadow-md text-center"
							>
								<div className="text-4xl font-bold text-primary mb-2">
									{stat.number}
								</div>
								<div className="text-xl font-medium text-gray-900 mb-2">
									{stat.label}
								</div>
								<p className="text-gray-600">{stat.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-16 px-4 bg-gray-50">
				<div className="container mx-auto max-w-5xl text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
						Join the OptoSoftware Family
					</h2>
					<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
						Experience the difference that 30+ years of eyewear industry
						expertise can make for your business.
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg" className="px-8" asChild>
							<a href="https://www.optogrid.io/">Explore Optogrid.io</a>
						</Button>
						<Button size="lg" variant="outline" className="px-8" asChild>
							<a href="/contact">Contact Our Team</a>
						</Button>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	);
}
