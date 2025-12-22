import NavBar from "@/components/NavBar";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img from "../public/realestate.png";
import Footer from "@/components/footer";
import CTASection from "@/components/CTASection";

const aboutus = () => {
  return (
    <div>
      <NavBar />
      <main>
        <section className="">
          <div className=" overflow-hidden   ">
            <div className="flex  items-center justify-center flex-col">
              <video
                src="/Untitled design (1).mp4"
                className="object-cover w-full h-screen opacity-100   "
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="flex absolute top-130 text-9xl backdrop-blur-3xl  p-2">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-3xl font-bold text-center"
                >
                  <span className="text-white">
                    Let Ai Manage your Property.
                  </span>{" "}
                  <span className="text-[#ffc946]  border-black">
                    {" "}
                    You Manage Life.
                  </span>
                </motion.h2>
              </div>
            </div>
          </div>
          <div className="">
            <div className="relative w-full h-[110vh] flex items-center justify-center">
              {/* Background Image */}
              <Image
                src={img}
                alt="niwas.ai"
                fill
                className="object-cover  h-screen w-full  "
              />

              {/* Text on Top */}
              <div className="flex justify-center flex-col items-center pt-10">
                <h1 className="relative   z-10 text-white  text-3xl font-semibold bg-black/40 px-4 py-2 rounded-xl ">
                  Our Vision
                </h1>
                <h2 className="relative mt-2 z-10 text-white  font-semibold  px-7 py-2 rounded-xl ">
                  A World where every property performs and every professional
                  prospers
                </h2>

                <h2 className="relative z-10 mt-2 text-white  text-2xl font-semibold bg-black/40 px-4 py-2 rounded-xl">
                  Our Mission
                </h2>
                <h2 className="relative z-10 mt-2 text-white  font-semibold px-7 py-2 rounded-xl">
                  Ai that manages, builds,connects and elevates with 4 &quot;E&quot;
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-10">
                  {/* Card 1 */}
                  <div className=" backdrop-blur-md bg-white rounded-2xl h-110 p-6 shadow-xl hover:scale-105 transition">
                    <Image
                      src="/empower.png"
                      alt="Empower Owners"
                      width={300}
                      height={300}
                      className="rounded-lg w-full object-contain"
                    />
                   
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-105 transition">
                    <Image
                      src="/enable.png"
                      alt="Enable Investors"
                      width={300}
                      height={300}
                      className="rounded-lg w-full object-contain"
                    />
              
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-105 transition">
                    <Image
                      src="/elevate.png"
                      alt="Elevate Professionals"
                      width={300}
                      height={300}
                      className="rounded-lg w-full object-contain"
                    />
                  
                  </div>

                  {/* Card 4 — Add whatever you want */}
                  <div className="bg-white backdrop-blur-md rounded-2xl p-6 shadow-xl hover:scale-105 transition">
                    <Image
                      src="/enrich.png"
                      alt="Fourth Logo"
                      width={300}
                      height={300}
                      className="rounded-lg w-full object-contain"
                    />
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section className="w-full py-20 bg-gradient-to-b from-[#111827] via-[#1f2937] to-[#111827] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 tracking-wide">
          Meet Our Founder
        </h1>

        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="/founder.jpg" // change to your image path
            alt="Founder"
            width={200}
            height={200}
            className="rounded-full shadow-2xl object-cover"
          />
        </div>

        {/* Founder Name */}
        <h2 className="text-3xl font-semibold mb-1">xyz</h2>

        {/* Role */}
        <p className="text-lg text-gray-300 mb-6">
          Founder & CEO, Niwas.ai
        </p>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          ... brings over a decade of experience in real estate,
          technology, and AI-driven automation. His mission is to empower 
          property owners, elevate professionals, and enable investors by 
          creating a unified and intelligent real estate ecosystem.
        </p>

      </div>
    </section>
    <CTASection />
    <Footer />
      </main>
    </div>
  );
};

export default aboutus;
