import React from 'react';

export function FAQSection() {
  const faqs = [
    {
      question: "What is the duration of the internships?",
      answer: "The duration of the internships varies by program, typically ranging from 3 to 6 months."
    },
    {
      question: "Are the internships paid?",
      answer: "Yes, many of our internships offer competitive stipends or hourly wages."
    },
    {
      question: "How do I apply for an internship?",
      answer: "You can apply for internships through our website by filling out the application form."
    },
    {
      question: "What qualifications do I need to apply?",
      answer: "Qualifications vary by internship, but generally, we look for candidates with relevant skills and a passion for learning."
    },
    {
      question: "Will I receive a certificate after completing the internship?",
      answer: "Yes, all interns will receive a certificate upon successful completion of their internship."
    },
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="relative p-4 border rounded-lg bg-white dark:bg-gray-800 shadow group">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">{faq.question}</h3>
              <p className="absolute inset-0 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 rounded-lg">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 