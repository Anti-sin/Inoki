import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-t border-[var(--cream)]/10 bg-[var(--background)] px-6 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-script text-3xl leading-none text-[var(--sage)] sm:text-4xl"
            >
              inoki
            </Link>

            <p className="mt-2 text-xs text-[var(--cream)]/45">
              Coffee, food and little moments worth slowing down for.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-x-6 gap-y-3 text-xs text-[var(--cream)]/55">
            <Link
              to="/"
              className="transition-colors hover:text-[var(--cream)]"
            >
              Home
            </Link>

            <Link
              to="/menu"
              className="transition-colors hover:text-[var(--cream)]"
            >
              Menu
            </Link>

            <a
              href="/#story"
              className="transition-colors hover:text-[var(--cream)]"
            >
              Our Story
            </a>

            <a
              href="/#contact"
              className="transition-colors hover:text-[var(--cream)]"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Bottom line */}
        <div className="mt-7 flex flex-col gap-2 border-t border-[var(--cream)]/10 pt-5 text-[11px] text-[var(--cream)]/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Inoki Cafe. All rights reserved.</p>

          <p>Made with care.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
