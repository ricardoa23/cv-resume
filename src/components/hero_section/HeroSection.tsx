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

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="bg-gradient-to-t from-bgDarkBlue to-bgLightBlue snap-center min-h-screen min-w-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <div>LOGO PlaceHolder</div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              PlaceHolder
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <div>Placeholder</div>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl pt-28 pb-4 sm:py-40 lg:py-40 xl:py-50">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-accent sm:text-6xl">
              Ricardo Ayala
            </h1>
            {/*summary Section */}
            <p className="mt-6 text-md leading-8 text-gray-600">
            Leveraging a strong aerospace background and disciplined approach acquired as an Air Force veteran, I transitioned into tech through CodeUp&apos;s intensive 5-month bootcamp, acquiring hands-on experience in full-stack software development. Committed to excellence and continuous learning, I seamlessly blend technical skills with a problem-solving mindset to deliver high-quality software solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md min-w-[120px] bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ctaHover border-white border border-solid"
              >
                Work History
              </a>
              <a
                href="#"
                className="rounded-md min-w-[120px] bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ctaHover border-white border border-solid "
              >
                Portfolio
              </a>
              <a
                href="#"
                className=" border border-solid border-white rounded-md min-w-[120px] bg-cta px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ctaHover"
              >
                Education
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-start">
          <a
            href="#"
            className="rounded-md min-w-[120px] bg-cta px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-ctaHover text-center border-white border border-solid"
          >
            Take A Look
          </a>
        </div>
        <div className="flex justify-center mt-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
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
