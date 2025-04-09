import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image 
            src="/logo.svg" 
            alt="AI Coding Blueprint Logo" 
            width={40} 
            height={40} 
          />
          <div>
            <h1 className="text-lg font-bold text-blue-800">AI Coding Blueprint by Adria Estevez</h1>
            <p className="text-sm text-gray-700">Launch Profitable Apps in Days with AI Tools</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#what-youll-get" className="text-gray-800 hover:text-blue-600 font-medium">
            What You'll Get
          </Link>
          <Link href="#testimonials" className="text-gray-800 hover:text-blue-600 font-medium">
            Testimonials
          </Link>
          <Link href="#faq" className="text-gray-800 hover:text-blue-600 font-medium">
            FAQ
          </Link>
          <Link href="#pricing" className="bg-blue-600 text-white py-2 px-5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Pre-order now
          </Link>
        </nav>
        <button className="md:hidden text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
