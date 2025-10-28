import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="w-full py-4 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl text-primary">OptoSoftware</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/products"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button asChild>
            <a href="https://app.optogrid.io/">Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
