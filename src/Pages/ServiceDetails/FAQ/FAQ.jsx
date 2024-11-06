
import { useState } from 'react';

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What services do you offer?',
      answer: 'We offer web development, design, and SEO services.',
    },
    {
      question: 'How can I contact support?',
      answer: 'You can contact support via email at support@example.com.',
    },
    {
      question: 'What is your refund policy?',
      answer: 'We provide a 30-day money-back guarantee on all services.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-[780px] mx-auto p-6 pb-20">
      <div className='flex flex-col items-center'>
        <h2 className="poppins font-bold text-[48px] text-center">Frequently <span className="text-[#FF6600]">Asked</span> Questions</h2>
        <p className='poppins font-normal text-[18px] text-center max-w-[510px] pt-8 pb-10'>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200">
            <button
              className="w-full text-left py-3 text-lg font-medium focus:outline-none flex justify-between"
              onClick={() => toggleAccordion(index)}
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </button>
            <div
              className={`transition-[max-height] ease-in-out duration-500 overflow-hidden ${
                activeIndex === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="p-4 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
