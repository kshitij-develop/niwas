"use client";

import Image from "next/image";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";

const COLORS = {
  primary: "text-[#ffc946]",
  primaryBg: "bg-[#ffc946]",
  darkBg: "bg-[#111827]",
  sectionBg: "bg-[#1f2937]",
  textLight: "text-gray-300",
};

export default function AboutUs() {
  return (
    <>
      <NavBar />

      {/* HERO SECTION */}
      <section className={`${COLORS.darkBg} pt-24 pb-20`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className={COLORS.primary}>Niwas.ai</span>
          </h1>
          <p className={`max-w-3xl mx-auto text-lg ${COLORS.textLight}`}>
            Building intelligent systems that simplify property management,
            empower professionals, and help people focus on what truly matters.
          </p>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className={`${COLORS.sectionBg} py-20`}>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold text-white mb-4">
              Our Vision
            </h2>
            <p className={COLORS.textLight}>
              A world where every property performs efficiently and every
              professional thrives with the support of intelligent technology.
            </p>

            <h2 className="text-3xl font-semibold text-white mt-10 mb-4">
              Our Mission
            </h2>
            <p className={COLORS.textLight}>
              To build AI-powered solutions that manage, connect, and elevate
              every aspect of the property ecosystem.
            </p>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl">
            <video
            src="/Noticia Text.mp4" 
            autoPlay
            muted
            loop
            playsInline
            className="h-full object-contain rounded-2xl"
          />
          </div>
        </div>
      </section>

      {/* VALUES / FEATURES */}
      <section className={`${COLORS.darkBg} py-20`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-14">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { title: "Empower", img: "/empower.png" },
              { title: "Enable", img: "/enable.png" },
              { title: "Elevate", img: "/elevate.png" },
              { title: "Enrich", img: "/enrich.png" },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white backdrop-blur-md rounded-2xl p-6 text-center hover:scale-105 transition"
              >
                <Image
                  src={item.img}      // 🔁 change image
                  alt={item.title}
                  width={200}
                  height={200}
                  className="mx-auto mb-4 object-contain rounded-2xl"
                />
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDER SECTION */}
      <section className={`${COLORS.sectionBg} py-20`}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Image
            src="/524aba48f48add054705cc91791f4169.png"      // 🔁 change image
            alt="Founder"
            width={180}
            height={180}
            className="rounded-full mx-auto mb-6 object-cover"
          />
          <h3 className="text-2xl font-semibold text-white">
            Founder Name
          </h3>
          <p className={`${COLORS.primary} mb-4`}>
            Founder & CEO
          </p>
          <p className={COLORS.textLight}>
            With deep experience in real estate and technology, our founder
            is driven by a mission to simplify property operations and build
            intelligent, people-centric systems.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
