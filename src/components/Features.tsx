export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50" id="what-youll-get">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-xl font-semibold text-blue-600 uppercase tracking-wider mb-2">WHY THIS WORKS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Why This Blueprint Works</h3>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">Idea to MVP</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
              Use my exact method to turn rough ideas into polished, user-ready apps powered by AI.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">Master AI Tools</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
              Get hands-on with Cursor, Claude, and Grok, tools I rely on to build and ship products.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">Monetize Fast</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
              Set up Stripe payments, add premium features, and start making money from your app.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
              </svg>
            </div>
            <h4 className="text-xl font-bold mb-4 text-black group-hover:text-blue-600 transition-colors">Launch with Confidence</h4>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
              Follow the proven launch checklist, so your app attracts your first users fast.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#pricing"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-10 rounded-full inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
            <span>Start building with AI</span>
          </a>
        </div>
      </div>
    </section>
  );
}
