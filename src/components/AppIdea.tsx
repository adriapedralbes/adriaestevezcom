import Image from "next/image";

export default function AppIdea() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Got an app idea, but tech keeps getting in the way?
            </h2>
            
            <p className="text-gray-700 mb-6">
              You're not alone. Most entrepreneurs hit the same wall. AI tools feel confusing, and
              developers are slow, expensive, and need managing.
            </p>
            
            <p className="text-gray-700 mb-6">
              That's exactly why I created the AI Coding Blueprint. A hands-on system to launch
              real, money-making apps using AI tools, without writing code or hiring help.
            </p>
            
            <h3 className="text-xl font-bold text-gray-800 mb-4">What You Will Learn</h3>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Launch your first revenue-ready app in days</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Validate ideas before wasting time or money</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Write powerful prompts that build for you</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Deploy beautiful, working apps, no coding needed</span>
              </div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span className="text-gray-700">Repeat the process anytime you want to build again</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              No theory. No fluff. Just a repeatable system I've used to ship real apps fast.
            </p>
            
            <p className="text-gray-700 mb-8">
              Join the AI revolution and finally build what's in your head.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <Image 
                  src="/profile-pic.svg" 
                  alt="Robin Ebers" 
                  width={60} 
                  height={60} 
                  className="rounded-full"
                />
              </div>
              <div>
                <p className="font-bold text-gray-900">Robin Ebers <span className="text-blue-500 font-normal">(@itsbyrobin)</span></p>
                <p className="text-gray-600 text-sm">YouTuber, Entrepreneur, AI Expert</p>
                <p className="text-gray-600 text-sm">20+ Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
