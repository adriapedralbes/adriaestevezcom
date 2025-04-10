export default function Pricing() {
  return (
    <section className="py-16 bg-white" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-xl font-semibold text-blue-600 uppercase tracking-wider">READY TO BUILD?</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Turn Your Ideas Into Real Products</h3>
          <p className="text-gray-700 mt-2 text-lg">Every plan includes early access + lifetime updates</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-4">
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <div className="absolute -top-8 -left-6 -right-6 text-center">
                      <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">SOLD OUT</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 mt-2">$97</span>
              </div>

              <div className="flex-grow mx-4 h-0.5 bg-gray-200 relative">
                <div className="absolute top-0 left-0 h-0.5 bg-blue-500" style={{ width: '80%' }}></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <div className="absolute -top-8 -left-6 -right-6 text-center">
                      <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">SOLD OUT</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 mt-2">$147</span>
              </div>

              <div className="flex-grow mx-4 h-0.5 bg-gray-200 relative">
                <div className="absolute top-0 left-0 h-0.5 bg-blue-500" style={{ width: '80%' }}></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                    <div className="absolute -top-8 -left-6 -right-6 text-center">
                      <span className="text-xs font-bold bg-red-100 text-red-600 px-2 py-1 rounded">SOLD OUT</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 mt-2">$197</span>
              </div>

              <div className="flex-grow mx-4 h-0.5 bg-gray-200 relative">
                <div className="absolute top-0 left-0 h-0.5 bg-blue-500" style={{ width: '80%' }}></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <div className="absolute -top-8 -left-6 -right-6 text-center">
                      <span className="text-xs font-bold bg-blue-100 text-blue-600 px-2 py-1 rounded">CURRENT</span>
                    </div>
                  </div>
                </div>
                <span className="text-blue-600 font-bold mt-2">$247</span>
              </div>

              <div className="flex-grow mx-4 h-0.5 bg-gray-200 relative">
                <div className="absolute top-0 left-0 h-0.5 bg-blue-500" style={{ width: '20%' }}></div>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 font-bold">
                    <span>5</span>
                    <div className="absolute -top-8 -left-6 -right-6 text-center">
                      <span className="text-xs font-bold bg-gray-100 text-gray-600 px-2 py-1 rounded">COMING</span>
                    </div>
                  </div>
                </div>
                <span className="text-gray-500 mt-2">$297</span>
              </div>
            </div>
          </div>

          <div className="text-center mb-10">
            <div className="inline-block rounded-full bg-yellow-50 border border-yellow-200 px-4 py-1">
              <span className="text-sm text-black">Only 24 spots left at this price!</span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="price-card border-t-blue-500 shadow-lg">
              <div className="flex items-start justify-between">
                <div className="inline-block bg-blue-50 py-1 px-3 rounded-full mb-2">
                  <span className="text-blue-600 font-medium text-sm">Early Bird</span>
                  <span className="ml-2 bg-green-100 text-green-600 px-2 py-0.5 rounded-full text-xs font-bold">17% OFF</span>
                </div>
              </div>

              <p className="text-gray-700 mb-3">Lock in the lowest lifetime price today</p>

              <div className="flex flex-col mb-6">
                <span className="text-5xl font-bold text-gray-900">$247</span>
                <span className="text-gray-500 line-through mt-1">$297</span>
              </div>

              <a href="#" className="btn-primary w-full text-center block mb-6">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  Pre-order now
                </span>
              </a>

              <h4 className="font-medium text-black mb-3">What's included</h4>

              <div className="space-y-2">
                <div className="check-item text-black">Lock in the lowest price (save $50)</div>
                <div className="check-item text-black">15+ real-world video lessons</div>
                <div className="check-item text-black">Get early access to the blueprint</div>
                <div className="check-item text-black">Lifetime updates included</div>
              </div>
            </div>

            <div className="price-card border-t-blue-300 bg-blue-50 shadow-lg">
              <div className="flex items-start justify-between">
                <div className="inline-block bg-blue-100 py-1 px-3 rounded-full mb-2">
                  <span className="text-blue-700 font-medium text-sm">Bootstrap</span>
                </div>
              </div>

              <p className="text-gray-700 mb-3 font-medium">With 1:1 coaching + template ($997+ value)</p>

              <div className="flex flex-col mb-6">
                <span className="text-5xl font-bold text-gray-900">$547</span>
              </div>

              <a href="#" className="btn-primary w-full text-center block mb-6">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  Pre-order now
                </span>
              </a>

              <h4 className="font-medium text-black mb-3">What's included</h4>

              <div className="space-y-2">
                <div className="check-item text-black">1:1 strategy call with Rob (1 hour)</div>
                <div className="check-item text-black">Ready-to-Use AI App Template</div>
                <div className="check-item text-black">Get early access to the blueprint</div>
                <div className="check-item text-black">Lifetime updates included</div>
              </div>
            </div>

            <div className="price-card border-t-gray-800 bg-gray-900 text-white shadow-lg">
              <div className="flex items-start justify-between">
                <div className="inline-block bg-gray-800 py-1 px-3 rounded-full mb-2">
                  <span className="text-white font-medium text-sm">Mentorship</span>
                </div>
              </div>

              <p className="text-black mb-3">Private mentorship to help you launch fast</p>

              <div className="flex flex-col mb-6">
                <span className="text-5xl font-bold text-black">$4497</span>
              </div>

              <a href="#" className="bg-white hover:bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded-full transition-colors w-full text-center block mb-6">
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                  Pre-order now
                </span>
              </a>

              <h4 className="font-medium text-black mb-3">What's included</h4>

              <div className="space-y-2">
                <div className="check-item text-black">4x 1:1 coaching sessions (4 hours total)</div>
                <div className="check-item text-black">VIP WhatsApp support for 30 days</div>
                <div className="check-item text-black">Priority access to the blueprint</div>
                <div className="check-item text-black">All updates + exclusive mentor insights</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
