import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[var(--sage)]/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--sage)]/10 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <p className="mb-8 animate-pulse text-xs uppercase tracking-[0.5em] text-[var(--cream)]/70 sm:text-sm">
          A neighbourhood cafe · Chhindwara
        </p>

        <h1 className="font-script select-none text-[22vw] leading-none text-[var(--sage)] sm:text-[16vw] md:text-[13vw]">
          inoki
        </h1>

        <p className="mt-8 max-w-xl font-serif-display text-lg leading-relaxed text-[var(--cream)]/80">
          Slow mornings, warm brews and a little corner of comfort in the heart
          of Madhya Pradesh.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/menu"
            className="rounded-full bg-[var(--sage)] px-8 py-3 font-medium text-[var(--background)] transition-transform duration-200 hover:scale-[1.03] hover:bg-[var(--sage)]/90"
          >
            View the menu
          </Link>

          <a
            href="#about"
            className="rounded-full border border-[var(--sage)]/60 px-8 py-3 text-[var(--cream)] transition-colors duration-200 hover:bg-[var(--sage)]/10"
          >
            Discover more
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-[var(--cream)]/40">
        scroll ↓
      </div>
    </section>
  );
}

export default Hero;
