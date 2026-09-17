const details = [
  {
    title: "Find us",
    content: (
      <p className="leading-relaxed text-[var(--cream)]/75">
        Inoki Cafe
        <br />
        Chhindwara, Madhya Pradesh
        <br />
        India
      </p>
    ),
  },
  {
    title: "Hours",
    content: (
      <div className="space-y-3 text-sm text-[var(--cream)]/75">
        <div className="flex justify-between gap-6">
          <span>Mon – Thu</span>
          <span>11:00 – 22:30</span>
        </div>

        <div className="flex justify-between gap-6">
          <span>Fri – Sat</span>
          <span>11:00 – 23:00</span>
        </div>

        <div className="flex justify-between gap-6">
          <span>Sunday</span>
          <span>11:00 – 22:30</span>
        </div>
      </div>
    ),
  },
  {
    title: "Reservations",
    content: (
      <>
        <p className="text-sm leading-6 text-[var(--cream)]/75">
          Call us to book a table or place a pickup order.
        </p>

        {/* Replace this number with the cafe's actual number */}
        <a
          href="tel:+910000000000"
          className="mt-5 inline-block rounded-full bg-[var(--sage)] px-6 py-2.5 text-sm font-medium text-[var(--background)] transition-colors duration-200 hover:bg-[var(--cream)]"
        >
          Call the cafe
        </a>
      </>
    ),
  },
  {
    title: "Follow along",
    content: (
      <>
        <p className="text-sm leading-6 text-[var(--cream)]/75">
          Peek at what's brewing, daily specials and life behind the counter.
        </p>

        {/* Replace with the cafe's actual Instagram */}
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block rounded-full border border-[var(--sage)]/50 px-6 py-2.5 text-sm text-[var(--cream)] transition-colors duration-200 hover:bg-[var(--sage)]/10"
        >
          Instagram →
        </a>
      </>
    ),
  },
];

function VisitUs() {
  return (
    <section
      id="contact"
      className="bg-[var(--background)] px-6 py-28 sm:py-36"
    >
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-[var(--cream)]/50 sm:text-xs sm:tracking-[0.45em]">
            say hello
          </p>

          <h2 className="font-script mt-3 text-5xl text-[var(--sage)] sm:text-6xl md:text-7xl">
            visit us
          </h2>

          <p className="font-serif-display mt-5 text-sm leading-6 text-[var(--cream)]/65 sm:text-base sm:leading-7">
            We'd love to have you over. Drop by, grab a cup and make yourself
            comfortable.
          </p>
        </div>

        {/* Details */}
        <div className="mt-14 grid gap-5 sm:mt-16 sm:grid-cols-2">
          {details.map((detail) => (
            <article
              key={detail.title}
              className="rounded-2xl border border-[var(--sage)]/15 bg-[var(--card)]/40 p-6 transition-colors duration-200 hover:border-[var(--sage)]/30 sm:p-7"
            >
              <h3 className="font-serif-display text-xl text-[var(--cream)] sm:text-2xl">
                {detail.title}
              </h3>

              <div className="mt-4">{detail.content}</div>
            </article>
          ))}
        </div>

        {/* Maps link */}
        <div className="mt-8 text-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Inoki+Cafe+Chhindwara"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--sage)] underline underline-offset-4 transition-colors hover:text-[var(--cream)]"
          >
            Open Inoki Cafe in Google Maps →
          </a>
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
