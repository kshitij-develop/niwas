import * as React from "react";
// Using lucide-react for potential future icons, e.g., in a nav bar
import { motion, easeOut, Variants } from "framer-motion";
import Image from "next/image";
import logo from "../public/NiwasIcon.png";
import icon from "../public/niwasLogo2.png";
import Footer from "./footer";
import { BrainCircuit } from "lucide-react";
import Section3Toggle from "./Section3";
import gif from "../public/2.gif";
import Link from "next/link";
import ScrollVideoSection from "./ScrollVideoSection";
import FAQ from "./FAQ";
import NavBar from "./NavBar";

// import { getServerSession } from "next-auth";
// import { authOptions } from "../api/auth/[...nextauth]";
// import { redirect } from "next/navigation";

/**
 * Main Homepage Component
 * This component lays out the promotional page for the mobile app,
 * including a hero video placeholder, app description, and screenshot gallery.
 */

const desktopCardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};
export default function HomePage() {
  // const session = getServerSession(authOptions);
  // if (!session) {
  //     redirect("/login");
  // }
  const [navDark, setNavDark] = React.useState(false);
  React.useEffect(() => {
    const lightsections = [
      "white-section-1",
      "white-section-2",
      "FAQSEC",
    ];
    const elements = lightsections
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (enteries) => {
        const anyvisible = enteries.some((entry) => entry.isIntersecting);
        if (anyvisible) {
          setNavDark(true);
        } else {
          setNavDark(false);
        }
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" }
    );

    elements.forEach((el) => observer.observe(el!));
    return () => observer.disconnect();
  }, []);

  return (
    // Main container with a white background and Inter font
    <div className="min-h-screen font-sans text-gray-800 bg-white">
      {/* Navigation (Simple Placeholder) */}
     <NavBar />

      {/* Main content area */}
      <main>
        {/* --- 1. Hero Video Section --- */}
        <section className="py-10 md:py-10 bg-[#31445c] ">
          <div className="">
            {/* 16:9 Video / GIF Placeholder */}
            <div className=" overflow-hidden border-b-2 ">
              <div className="flex  items-center justify-center">
                <video
                  src="/Dark Blue and White Modern Business Card (5).mp4"
                  className="object-cover w-full h-screen "
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>

            {/* Heading */}
            <h1 className="mt-8 text-3xl font-extrabold leading-tight text-center text-white md:text-5xl">
              Experience Our App in Action
            </h1>

            {/* --- New Description --- */}
            <p className="max-w-3xl mx-auto mt-4 text-lg text-center text-gray-200 md:text-xl">
              Niwas.ai is your smart property companion. From AI-powered tools
              to streamline tasks, to easy management for every aspect of your
              property, everything you need is just a tap away.
            </p>
          </div>
        </section>

        <ScrollVideoSection />

        {/* --- 2. AI-Powered Management --- */}
        <section className="py-16 md:py-24" id="white-section-1">
          <div className="max-w-full px-4 mx-auto text-center sm:px-6 lg:px-8">
            <h2 className="flex items-center justify-center gap-3 mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              <BrainCircuit className="size-8 text-[#022b60]" />
              Let AI Handle the Hard Work
            </h2>
            <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-600 md:text-xl">
              Our intelligent platform helps you manage properties, track
              maintenance, and analyze performance effortlessly, giving you _
              back your most valuable asset: time.
            </p>

            {/* Asymmetric 2x2 Grid */}
            <motion.div
              className="grid max-w-6xl grid-cols-1 gap-4 pt-10 sm:grid-cols-2 lg:grid-cols-1 md:gap-4 ml-15"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15, // delay between cards
                  },
                },
              }}
            >
              {/* Screenshot 1 */}
              <div className="flex justify-center gap-4 item-center ">
                {/* Wider Card */}
                <div className="w-full h-full object-cover">
                  <Section2Card
                    title="Intuitive Dashboard"
                    description="See all your important info at a single glance."
                    imageSrc="ai2.gif"
                  />
                </div>

                {/* Narrower Card */}
                <div className="w-full h-full object-cover">
                  <Section2Card
                    title="Find best service"
                    description="Easily search and connect with top service providers."
                    imageSrc="ai1.gif"
                  />
                </div>
              </div>

              <div className="flex justify-center gap-4 item-center">
                {/* Screenshot 3 */}
                {/* Narrower Card */}
                <div className="w-full h-full object-cover">
                  <Section2Card
                    title="Find best service"
                    description="Easily search and connect with top service providers."
                    imageSrc="ai3.gif"
                  />
                </div>
                <div className="w-full h-full object-cover">
                  <Section2Card
                    title="Intuitive Dashboard"
                    description="See all your important info at a single glance."
                    imageSrc="ai4.gif"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 3. App Description Section --- */}
        <section className=" md:py-24">
          <div className="max-w-full px-4 mx-auto text-center sm:px-6 lg:px-8 bg-amber-500 pt-10">
            <h2 className="flex items-center justify-center gap-3 mb-6 text-3xl font-bold text-gray-900 max-w-5x1 md:text-4xl">
              The Future of
              <Image alt="" width={150} src={icon} />
            </h2>
            <div className="flex justify-center max-w-full mx-auto text-center">
              <p className="max-w-5xl text-lg leading-relaxed text-center text-white md:text-xl">
                Welcome to Niwas.ai, the revolutionary mobile application
                designed to streamline your workflow, boost your productivity,
                and connect you with what matters most. Our intuitive interface
                and powerful features make it easier than ever to accomplish
                your goals.
              </p>
            </div>
            {/* Responsive Screenshot Grid */}
            <motion.div
              className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-1 md:gap-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15, // delay between cards
                  },
                },
              }}
            >
              {/* Screenshot 1 */}
              <Section3Toggle />
            </motion.div>
          </div>
        </section>

        {/* --- 4. Screenshots Section --- */}
        <section className="py-16 md:py-24 bg-gray-50" id="white-section-2">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold text-center text-gray-900 md:text-4xl md:mb-16">
              Take a Look Inside
            </h2>

            {/* Responsive Screenshot Grid */}
            <motion.div
              className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-12"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15, // delay between cards
                  },
                },
              }}
            >
              {/* Screenshot 1 */}
              <ScreenshotCard
                title="Owner's Dashboard"
                description="See all your important info at a single glance."
                imageSrc="owner dash2.gif"
              />

              {/* Screenshot 2 */}
              <ScreenshotCard
                title="Owner's Ai insights"
                description="Easily search and connect with top service providers."
                imageSrc="owner dash.gif"
              />

              {/* Screenshot 3 */}
              <ScreenshotCard
                title="Tenant's Dashboard"
                description="Track your progress with beautiful, easy-to-read charts."
                imageSrc="Tenant dash.gif"
              />

              {/* Screenshot 4 */}
              <ScreenshotCard
                title="Tenant's Ai Assistance"
                description="Get help from our built-in AI assistant anytime you need it."
                imageSrc="Tenant ai dash.gif"
              />
            </motion.div>
          </div>
        </section>
      </main>
     
        <FAQ  id="FAQSEC"/>
     
      <Footer />
    </div>
  );
}

/**
 * Reusable component for displaying a screenshot placeholder
 * and its accompanying title and description.
 */
interface ScreenshotCardProps {
  title: string;
  description: string;
  imageSrc: string; // Add imageSrc prop
}
interface DualImageCardProps {
  titleLeft: string;
  descriptionLeft: string;
  imageLeft: string;
  titleRight: string;
  descriptionRight: string;
  imageRight: string;
}
// This is the animation for the cards. We define it once.
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut, // ✅ clean and typed
    },
  },
};

// 2. Apply the 'Variants' type
const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

// 3. Apply the 'Variants' type here too
const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, x: 50 },
  show: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const features = [
  {
    name: "Smart Payment Reminders",
    active: true,
    description:
      "Automate rent collection with AI, managing reminders, payments, custom schedules, renewals, tracking, and error-free financial reports.",
  },
  { name: "Automated Payment Process", active: false },
  { name: "Adaptive Scheduling Options", active: false },
  { name: "AI-Supported Late Fees", active: false },
  { name: "Real-Time Payment Insights", active: false },
];

function Section2Card({ title, description, imageSrc }: ScreenshotCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Image container with fixed height and overlay text */}
      <div className="relative w-full h-[400px] rounded-3xl border border-[#022b60] shadow-xl overflow-hidden transition-transform duration-300">
        {/* Text block above image */}
        <div className="relative z-10 px-6 py-4 text-left bg-gradient-to-b from-[#022b60]/20 via-white to-white">
          <h3 className="text-xl font-bold text-black md:text-2xl drop-shadow-sm">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-700 md:text-base">
            {description}
          </p>
        </div>

        {/* Image fills the remaining height */}
        <div className="relative size-full">
          <img
            src={imageSrc}
            alt={title}
            className="object-cover w-full h-[calc(100%-90px)]"
          />

          {/* Optional subtle gradient overlay from top of image */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
      </div>
    </motion.div>
  );
}

function ScreenshotCard({ title, description, imageSrc }: ScreenshotCardProps) {
  return (
    <motion.div
      className="flex flex-col items-center text-center" // Removed unnecessary `initial` and `whileInView` from here as they are handled by the parent motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="w-full max-w-[250px] sm:max-w-none aspect-[9/16] rounded-3xl border-2 border-[#022b60] shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:rotate-1">
        <img src={imageSrc} alt={title} className="object-top size-full" />
      </div>

      <h3 className="mt-6 mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </motion.div>
  );
}

// Add simple fade-in animation
const styles = `
@keyframes fade-in { 0% { opacity: 0; transform: translateY(10px); } 100% { opacity: 1; transform: translateY(0); } }
.animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
body { font-family: 'Inter', sans-serif; }
`;

// This is a common pattern to inject global styles in a component
if (typeof window !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
}
