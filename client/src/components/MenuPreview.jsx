import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMenu } from "../lib/api.js";

function MenuPreview() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const data = await getMenu();

        setMenuItems(Array.isArray(data) ? data.slice(0, 4) : []);
      } catch (error) {
        console.error(error);
        setError("Unable to load the menu.");
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return (
    <section id="menu" className="bg-[var(--background)] px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[var(--cream)]/50 sm:text-xs sm:tracking-[0.45em]">
              on the table
            </p>

            <h2 className="font-serif-display mt-4 text-4xl leading-tight text-[var(--cream)] sm:text-5xl md:text-6xl">
              Something for
              <br />
              <span className="font-script text-[var(--sage)]">
                every mood.
              </span>
            </h2>
          </div>

          <Link
            to="/menu"
            className="w-fit text-xs text-[var(--cream)]/70 transition-colors duration-200 hover:text-[var(--sage)] sm:text-sm"
          >
            View full menu <span className="ml-2">→</span>
          </Link>
        </div>

        {/* Loading */}
        {loading && (
          <div
            className="mt-14 py-10 text-center text-sm text-[var(--cream)]/50"
            role="status"
            aria-live="polite"
          >
            Loading menu...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div
            className="mt-14 py-10 text-center text-sm text-red-300"
            role="alert"
          >
            {error}
          </div>
        )}

        {/* Menu */}
        {!loading && !error && (
          <div className="mt-14 divide-y divide-[var(--cream)]/10 border-y border-[var(--cream)]/10">
            {menuItems.map((item, index) => (
              <div
                key={item._id}
                className="group flex flex-col gap-4 py-6 transition-colors duration-200 hover:bg-[var(--cream)]/[0.025] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <span className="pt-1 text-[10px] text-[var(--sage)]/60 sm:text-xs">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="font-serif-display text-xl text-[var(--cream)] transition-colors duration-200 group-hover:text-[var(--sage)] sm:text-2xl">
                      {item.name}
                    </h3>

                    <p className="mt-1.5 max-w-lg text-xs leading-5 text-[var(--cream)]/50 sm:mt-2 sm:text-sm sm:leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-8 sm:pl-0">
                  <span className="rounded-full border border-[var(--cream)]/10 px-2.5 py-1 text-[9px] uppercase tracking-wider text-[var(--cream)]/40 sm:px-3 sm:text-[10px]">
                    {item.category}
                  </span>

                  <span className="font-serif-display text-lg text-[var(--cream)] sm:text-xl">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default MenuPreview;
