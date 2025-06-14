import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";




function Hero() {
// Falls du navigation, navigationVariants, buttonVariants, scrollToSection, scrollToLearnMore, closeMobileMenu verwendest, müssen diese auch importiert oder im selben File definiert werden.
// Beispiel für navigation (Dummy):
const navigation = [
  { name: "Home", href: "#", onClick: () => {} },
  { name: "Galerie", href: "#galerie", onClick: () => scrollToSection("galerie") },
  { name: "Datenschutz", href: "#datenschutz", onClick: () => scrollToSection("datenschutz") },
];

// Beispiel für Variants (Dummy):
const navigationVariants = {};
const buttonVariants = {};

// Beispiel für State:
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Beispiel für Funktionen:
function scrollToSection() {}
function scrollToLearnMore() {}
function closeMobileMenu() {}

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
      <source src="src/assets/DJI_20240727060859_0001_D.MP4" type="video/mp4" />
        Dein Browser unterstützt dieses Video-Format nicht.
      </video>
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.header className="absolute inset-x-0 top-0 z-50"
        initial="hidden"
        animate="visible"
        variants={navigationVariants}>
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ihre Möbel</span>
              
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6"/>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
            key={item.name}
            href={item.href}
            onClick={(e) => {
              e.preventDefault(); // Verhindert das Springen nach "#"
              item.onClick(); // Führt die Scroll-Funktion aus
            }}
            className="text-xl ueberschrift-font_2 text-gray-200 transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-gray-200"
            > 
            {item.name}
            </a>
            ))}

          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">APVisuals</span>
                <img
                  alt=""
                  src="./bilder/logo-removebg-preview-removebg-preview.png"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      onClick={closeMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
                
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </motion.header>

      <div className="relative isolate px-6 pt-14 lg:px-8 flex items-center justify-center h-screen w-screen">
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden sm:-top-80"
  >
    <div
      style={{
        clipPath:
          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        filter: 'none', // Remove blur filter
        opacity: 1, // Set opacity to 1
      }}
      className="bg-[url('./bilder/DeckBild.JPEG')] h-full"
    />
  </div>
  <motion.div
    className="mx-auto max-w-2xl py-32 sm:py-0 lg:py-56 flex flex-col items-center justify-center"
    initial="hidden"
    animate="visible"
    variants={buttonVariants}
  >

    {/* Titel und Beschreibung */}
    <motion.div className="text-center" initial="hidden" animate="visible" variants={buttonVariants}>
      <h1 className="text-6xl ueberschrift-font tracking-tight text-white sm:text-8xl">
        APVisuals
      </h1>
      <p className="mt-8 sm:mt-2 text-xl unterschrift-font text-gray-300 sm:text-2xl">
        Mehr als nur Bilder – wir erzählen Geschichten.
      </p>

      {/* Button "Kontaktieren" */}
      <motion.div
        className="mt-10 flex items-center justify-center gap-x-6"
        initial="hidden"
        animate="visible"
        variants={buttonVariants}
      >
      
      </motion.div>
    </motion.div>
  </motion.div>
</div>

        </div>
    </section>
  );
}

export default Hero;
