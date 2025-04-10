"use client";

import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { id: 1, question: "When can I start?", answer: "You can start immediately after purchasing. You'll receive access to the content and can begin the course at your own pace." },
    { id: 2, question: "Who is this blueprint for?", answer: "This blueprint is designed for entrepreneurs, developers, and product builders who want to create AI-powered applications without extensive coding knowledge." },
    { id: 3, question: "Do I need coding skills?", answer: "No, you don't need extensive coding skills. The blueprint is designed to be accessible to people with minimal technical background." },
    { id: 4, question: "Do I need to have a specific computer?", answer: "Any modern computer (Windows, Mac, or Linux) with an internet connection will work. No specialized hardware is required." },
    { id: 5, question: "What's the refund policy?", answer: "We offer a 30-day satisfaction guarantee. If you're not satisfied with the blueprint, contact us for a full refund." },
    { id: 6, question: "How do I make money?", answer: "The blueprint includes strategies for monetization, including subscription models, one-time purchases, and freemium approaches." },
    { id: 7, question: "What AI tools are used?", answer: "We cover a range of AI tools including OpenAI's GPT models, Claude, and other popular AI services that can power your applications." },
    { id: 8, question: "Can I build my specific idea?", answer: "Yes! The blueprint provides a framework that can be adapted to build various types of AI-powered applications." },
    { id: 9, question: "What if I get stuck?", answer: "We offer community support and resources to help you overcome any obstacles. Premium tiers include direct coaching." },
  ];

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-xl font-semibold text-blue-600 uppercase tracking-wider">QUESTIONS ANSWERED</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Frequently Asked Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id} 
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div 
                className="flex justify-between items-center p-4 cursor-pointer hover:bg-blue-50"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold">{faq.id}</span>
                  <h4 className="font-medium text-gray-800">{faq.question}</h4>
                </div>
                <svg 
                  className={`w-5 h-5 ${activeIndex === index ? 'text-blue-500 transform rotate-180' : 'text-gray-400'} transition-all`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              {activeIndex === index && (
                <div className="p-4 pt-0 border-t border-gray-100">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
