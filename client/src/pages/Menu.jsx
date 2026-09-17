import { useEffect, useMemo, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getMenu } from "../lib/api.js";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchMenu = async () => {
      try {
        const data = await getMenu();

        if (isMounted) {
          setMenuItems(Array.isArray(data) ? data : []);
        }
      } catch (error) {
        console.error("Menu fetch error:", error);

        if (isMounted) {
          setError("Unable to load the menu.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchMenu();

    return () => {
      isMounted = false;
    };
  }, []);

  const groupedMenu = useMemo(() => {
    return menuItems.reduce((groups, item) => {
      if (!groups[item.category]) {
        groups[item.category] = {
          subtitle: item.categorySubtitle || "",
          items: [],
        };
      }

      groups[item.category].items.push(item);

      return groups;
    }, {});
  }, [menuItems]);

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--cream)]">
      <Navbar />

      {/* Header */}
      <section className="px-5 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-40">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-[var(--sage)]/80 sm:text-xs sm:tracking-[0.45em]">
            Est. Chhindwara
          </p>

          <h1 className="font-script mt-4 text-6xl leading-none text-[var(--sage)] sm:mt-5 sm:text-7xl md:text-8xl">
            the menu
          </h1>

          <p className="font-serif-display mx-auto mt-5 max-w-xl text-sm leading-6 text-[var(--cream)]/70 sm:mt-6 sm:text-base sm:leading-7">
            Everything is made fresh through the day. Ask us about seasonal
            specials.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          {loading && (
            <div
              className="py-16 text-center text-sm text-[var(--cream)]/50"
              role="status"
              aria-live="polite"
            >
              Brewing the menu...
            </div>
          )}

          {!loading && error && (
            <div
              className="py-16 text-center text-sm text-red-300"
              role="alert"
            >
              {error}
            </div>
          )}

          {!loading && !error && menuItems.length === 0 && (
            <div className="py-16 text-center text-sm text-[var(--cream)]/50">
              The menu is currently unavailable.
            </div>
          )}

          {!loading && !error && menuItems.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(groupedMenu).map(([category, categoryData]) => (
                <article
                  key={category}
                  className="rounded-2xl border border-[var(--cream)]/10 bg-[#123025] px-5 py-6 sm:px-7 sm:py-7"
                >
                  {/* Category heading */}
                  <div className="border-b border-[var(--cream)]/10 pb-4">
                    <h2 className="font-serif-display text-2xl leading-tight text-[var(--cream)] sm:text-3xl">
                      {category}
                    </h2>

                    {categoryData.subtitle && (
                      <p className="mt-2 text-[10px] uppercase tracking-[0.16em] text-[var(--sage)]/70 sm:text-xs sm:tracking-[0.18em]">
                        {categoryData.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Items */}
                  <div>
                    {categoryData.items.map((item) => (
                      <div
                        key={item._id}
                        className="border-b border-dotted border-[var(--cream)]/10 py-4 last:border-b-0 sm:py-5"
                      >
                        <div className="flex items-baseline gap-2 sm:gap-3">
                          <h3 className="min-w-0 shrink text-sm font-medium leading-5 text-[var(--cream)] sm:text-base">
                            {item.name}
                          </h3>

                          <div className="min-w-[12px] flex-1 border-b border-dotted border-[var(--cream)]/15" />

                          <span className="shrink-0 font-serif-display text-base text-[var(--sage)] sm:text-lg">
                            ₹{item.price}
                          </span>
                        </div>

                        {item.description && (
                          <p className="mt-1.5 text-xs leading-5 text-[var(--cream)]/55 sm:mt-2 sm:text-sm sm:leading-6">
                            {item.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Bottom note */}
          {!loading && !error && menuItems.length > 0 && (
            <p className="mt-12 text-center text-xs text-[var(--cream)]/40 sm:mt-16 sm:text-sm">
              Prices inclusive of taxes. Menu may vary based on availability.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Menu;
