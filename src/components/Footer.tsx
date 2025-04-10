import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center gap-3 mb-6 md:mb-0">
            <Image 
              src="/logo.svg" 
              alt="AI Coding Blueprint Logo" 
              width={40} 
              height={40} 
            />
            <div>
              <h3 className="text-lg font-bold text-gray-800">AI Coding Blueprint</h3>
              <p className="text-sm text-gray-500">By Adria Estevez</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="#what-youll-get" className="text-gray-600 hover:text-blue-600">
              What You'll Get
            </Link>
            <Link href="#testimonials" className="text-gray-600 hover:text-blue-600">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-600 hover:text-blue-600">
              FAQ
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-blue-600">
              Pricing
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Adria Estevez. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-500 hover:text-blue-600">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">Contact</a>
          </div>
          
          <div className="mt-6">
            <p>This site is not affiliated with Cursor, Claude, or Grok.</p>
            <p className="mt-2">Built with AI technologies by Adria Estevez.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
