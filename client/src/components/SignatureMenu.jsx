import coffeeImage from "../assets/coffee.jpg";
import pizzaImage from "../assets/pizza.jpg";
import baristaImage from "../assets/barista.jpg";

const experiences = [
  {
    title: "Slow-pulled coffee",
    description: "Single-origin beans, hand-poured with intention.",
    image: coffeeImage,
  },
  {
    title: "Wood-fired pizzas",
    description: "Hand-stretched dough, blistered crust, molten centre.",
    image: pizzaImage,
  },
  {
    title: "Made by hand",
    description: "A small team who loves what they pour and plate.",
    image: baristaImage,
  },
];

function SignatureMenu() {
  return (
    <section className="bg-[var(--background)] px-6 py-28 sm:py-36">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.45em] text-[var(--cream)]/60">
            Made with care
          </p>

          <h2 className="font-script mt-3 text-5xl leading-none text-[var(--sage)] sm:text-6xl md:text-7xl">
            little joys
          </h2>

          <p className="font-serif-display mt-5 text-base leading-7 text-[var(--cream)]/75 sm:text-lg">
            Freshly ground beans, wood-fired pizzas and desserts baked each
            morning, small rituals we take seriously.
          </p>
        </div>

        {/* Experience cards */}
        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {experiences.map((item) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-2xl border border-[var(--cream)]/10 bg-[var(--card)]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-[280px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.035] sm:h-[320px]"
                />
              </div>

              {/* Content */}
              <div className="px-7 py-7">
                <h3 className="font-serif-display text-2xl text-[var(--cream)] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[var(--cream)]/60">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SignatureMenu;
