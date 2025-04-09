import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-16 bg-blue-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 uppercase">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What People Have to Say</h3>
          <p className="text-gray-700 mt-2 text-lg">Real comments from people already learning from me on <span className="text-red-600 font-medium">YouTube</span>.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center bg-blue-500 text-white">
              <span className="text-lg font-bold">A</span>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">@AymontHoward • 5 days ago</p>
              <p className="font-medium text-gray-800 text-lg">Exceptional!</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center bg-teal-500 text-white">
              <span className="text-lg font-bold">D</span>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">@danielaba • 7 days ago</p>
              <p className="font-medium text-gray-800 text-lg">finally a good breakdown on the things that matter lol</p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center bg-pink-500 text-white">
              <span className="text-lg font-bold">M</span>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-500">@morganmurphy1688 • 3 days ago</p>
              <p className="font-medium text-gray-800 text-lg">Thank you very much!!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
