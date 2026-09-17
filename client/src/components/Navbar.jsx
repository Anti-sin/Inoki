import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="absolute left-0 right-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="Inoki Cafe home"
          className="font-script text-3xl text-[var(--sage)]"
        >
          inoki
        </Link>

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-10 text-sm tracking-wide sm:flex"
        >
          <Link
            to="/menu"
            className="text-[var(--cream)]/90 transition-colors duration-200 hover:text-[var(--cream)]"
          >
            menu
          </Link>

          <a
            href="/#story"
            className="text-[var(--cream)]/90 transition-colors duration-200 hover:text-[var(--cream)]"
          >
            about us
          </a>

          <a
            href="/#contact"
            className="text-[var(--cream)]/90 transition-colors duration-200 hover:text-[var(--cream)]"
          >
            contact us
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="rounded-full border border-[var(--cream)]/20 p-2 text-[var(--cream)] transition-colors duration-200 hover:border-[var(--cream)]/40 sm:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="mx-4 rounded-2xl border border-[var(--cream)]/10 bg-[var(--background)]/95 p-5 backdrop-blur-md sm:hidden"
        >
          <div className="flex flex-col gap-5">
            <Link
              to="/menu"
              onClick={closeMenu}
              className="text-[var(--cream)]"
            >
              menu
            </Link>

            <a
              href="/#story"
              onClick={closeMenu}
              className="text-[var(--cream)]"
            >
              about us
            </a>

            <a
              href="/#contact"
              onClick={closeMenu}
              className="text-[var(--cream)]"
            >
              contact us
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
