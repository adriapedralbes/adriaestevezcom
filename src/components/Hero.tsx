import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Stop Hiring Developers.
            <br />
            Start Launching with AI.
          </h1>
          <p className="text-lg mb-8 text-gray-800">
            Build real subscription-based apps in days using AI tools
            like Cursor, Claude, and Grok. Imagine you could build any
            idea you have. No code, no devs, no delays.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-800">15+ step-by-step video lessons</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-800">Includes proven, ready-to-use prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-800">Zero coding or technical skills required</span>
            </div>
          </div>
          <div className="mt-8">
            <a href="#pricing" className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full inline-flex items-center gap-2 shadow-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
              Pre-order now for $247
            </a>
            <div className="mt-4 text-green-600 font-medium">
              SAVE $50 (17%)
            </div>
            <div className="mt-2 bg-yellow-50 border border-yellow-200 rounded-lg p-2 inline-block">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                <span className="text-sm">Early Bird Pricing! This price increases to $297 in 24 sales.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl shadow-xl overflow-hidden">
            <Image 
              src="/code-screenshot.svg" 
              alt="AI Coding Screenshot" 
              width={600} 
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <p className="text-sm italic text-gray-700">"...just our first call together was crazy. Rob showed me how to train AI to write my newsletters in 10 minutes. Before this call, I used to spend at least 1 hour per week writing emails. CRAZY! 😮"</p>
            <div className="flex items-center gap-2 mt-2">
              <Image 
                src="/profile-pic.svg" 
                alt="Testimonial author" 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              <div>
                <p className="font-medium text-gray-800">Peter Renkewitz, Founder</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
