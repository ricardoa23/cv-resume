"use client";

import React, { useState, useEffect } from "react";
import "./heroSection.css";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// TODO: Need to work on the Nav bar and make it responsive
// TODO: Need to make buttons functional
// TODO: need to replace all placeholders with actual content
// TODO: need to improve the summary ln 127
// FIXME: possibly find a Way to make the hero Section render Server Side
// TODO: See if the Buttons make sense / if removed increase size of summary text
//  TODO: Add box Shadows to the buttons

const navigation = [
  { name: "PlaceHolder", href: "#" },
  { name: "PlaceHolder", href: "#" },
  { name: "PlaceHolder", href: "#" },
  { name: "PlaceHolder", href: "#" },
];

const HeroSection = () => {
  // Hero section was copied from https://tailwindui.com

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth', // Optional: adds animation
    });
  };

  return (
    <section className="bg-gradient-to-t from-bgDarkBlue to-bgLightBlue snap-center min-h-screen min-w-screen">

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-28 pb-4 sm:py-40 lg:py-40 xl:py-50">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl text-offWhite font-bold tracking-tight text-accent sm:text-6xl">
              Ricardo Ayala
            </h1>
            {/*summary Section */}
            <p className="mt-6 text-md leading-8 text-offWhite opacity-50">
            Leveraging a strong aerospace background and disciplined approach acquired as an Air Force veteran, I transitioned into tech through CodeUp&apos;s intensive 5-month bootcamp, acquiring hands-on experience in full-stack software development. Committed to excellence and continuous learning, I seamlessly blend technical skills with a problem-solving mindset to deliver high-quality software solutions.
            </p>

          </div>
        </div>
        <div className="flex justify-center items-start">
          <a
          onClick={scrollToBottom}
            className="rounded-md min-w-[120px] bg-cta px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-ctaHover text-center border-white border border-solid"
          >
            Take A Look
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="fff"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 17.25 12 21m0 0-3.75-3.75M12 21V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
