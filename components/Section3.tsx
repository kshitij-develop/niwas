"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Section3Toggle() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      title: "Complete Property Management ✨",
      description:
        "Manage all your properties, tenants, and leases in one intuitive platform.Manage all your properties, tenants, and leases in one intuitive ",
      image: "cpm.jpg",
    },
    {
      title: "Seamless Tenant & Rental Management",
      description:
        "Easily handle tenant communications, lease agreements, and rental payments all in one place.",
      image: "strm.jpg",
    },
    {
      title: "Stay Up to date",
      description:
        "Get real-time notifications and updates on rent payments, maintenance requests, and lease renewals.",
      image: "siaic.jpg",
    },
    {
      title: "Hassle-Free Maintenance & Repairs",
      description:
        "Streamline maintenance requests, track progress, and communicate with service providers effortlessly.",
      image: "strm.jpg",
    },
    {
      title: "Never Miss Important Updates",
      description:
        "Receive timely alerts for rent due dates, lease expirations, and maintenance schedules.",
      image: "nmiu.jpg",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-between w-full gap-10 py-16 md:flex-row md:gap-16">
      {/* ---------- LEFT CONTENT ---------- */}
      <div className="flex flex-col w-full max-w-lg text-left ml-10">
        <h2 className="text-4xl font-extrabold text-black md:text-5xl">
          AI-Automated Rent Collection
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-white">
          Automate rent collection with AI — manage reminders, payments,
          renewals, and tracking seamlessly.
        </p>

        {/* CTA */}
        <button className="px-6 py-2 mt-6 font-medium text-white transition-all border border-[#022b60] rounded-full w-fit hover:bg-purple-50">
          Explore workflows
        </button>

        {/* Feature list with toggle */}
        <div className="mt-10 space-y-3">
          {features.map((f, idx) => (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={` cursor-pointer pl-4 border-l-2 transition-all ${
                idx === activeIndex
                  ? "border-[#022b60]"
                  : "border-gray-200 hover:border-purple-300"
              }`}
            >
              <h4
                className={`font-semibold transition-colors text-black ${
                  idx === activeIndex
                    ? "text-[#022b60]"
                    : "text-white hover:[#022b60]/60"
                }`}
              >
                {f.title}
              </h4>
              {idx === activeIndex && (
                <p className="mt-1 text-sm text-white">{f.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- RIGHT IMAGE (toggles) ---------- */}
      <div className="relative w-full max-w-sm md:max-w-md bg-[#f7f8ff] rounded-3xl shadow-md p-3 md:p-4 flex items-center justify-center mr-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={features[activeIndex].image}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="w-full overflow-hidden bg-white border border-gray-100 shadow-lg rounded-2xl"
          >
            <img
              src={features[activeIndex].image}
              alt={features[activeIndex].title}
              className="object-cover w-full h-[320px] md:h-[380px] rounded-2xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
