"use client";

// TODO: Replace {{SERIES_NAME}} with your series name
// TODO: Replace logo and series cover image paths with your actual images
export default function Hero() {
  return (
    <section id="hero" className="relative flex flex-col overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-dark-light to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />

      <div className="relative z-10 pt-20 sm:pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Series logo */}
          <div className="flex justify-center mb-12 animate-fadeInUp">
            <img
              src="/images/logo.png"
              alt="Series Logo"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Full-width complete series cover */}
          <div className="animate-fadeInUp mb-8">
            <img
              src="/images/complete-series-cover-landscape.png"
              alt="The Complete Series"
              className="w-full h-auto rounded-xl shadow-professional border border-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
