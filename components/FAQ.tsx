"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ({id}:{id?:string}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does Niwas.ai help property owners?",
      answer:
        "Niwas.ai automates rent collection, maintenance tracking, and property evaluations, making property management effortless.",
    },
    {
      question: "Can tenants use the app too?",
      answer:
        "Yes. Tenants can pay rent, raise repair requests, track updates, and communicate directly with property owners.",
    },
    {
      question: "Is Niwas.ai free to use?",
      answer:
        "The basic features are free. Advanced AI insights and premium tools are part of the upcoming pro plan.",
    },
    {
      question: "How secure is my property and payment data?",
      answer:
        "All data is encrypted and stored securely using industry-standard cloud infrastructure.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4" id={id}>
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4" >
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className="border border-gray-200 rounded-xl p-4 cursor-pointer shadow-sm transition-all"
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>

              <ChevronDown
                className={`transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>

            {/* Answer Animation */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
