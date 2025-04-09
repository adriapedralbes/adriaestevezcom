import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
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
              <h3 className="text-lg font-bold">AI Coding Blueprint</h3>
              <p className="text-sm text-gray-400">By Adria Estevez</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="#what-youll-get" className="text-gray-300 hover:text-white">
              What You'll Get
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white">
              Testimonials
            </Link>
            <Link href="#faq" className="text-gray-300 hover:text-white">
              FAQ
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white">
              Pricing
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Adria Estevez. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white">Contact</a>
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
