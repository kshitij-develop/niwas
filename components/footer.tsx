"use client";

import React from "react";

export default function Footer() {
  return (
      <footer className="py-12 text-gray-300 bg-gray-800">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Niwas.ai. All rights reserved.
          </p>
        </div>
      </footer>
  );
}
