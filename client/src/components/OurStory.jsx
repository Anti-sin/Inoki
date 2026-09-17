import interiorImage from "../assets/interior.jpg";

function OurStory() {
  return (
    <section
      id="story"
      className="bg-[var(--cream)] px-6 py-28 text-[var(--sage-deep)] sm:py-36"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.05fr_0.95fr] md:gap-20">
        {/* Image */}
        <div className="overflow-hidden rounded-[2rem]">
          <img
            src={interiorImage}
            alt="The interior of Inoki Cafe"
            loading="lazy"
            className="h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.02] sm:h-[440px] md:h-[480px]"
          />
        </div>

        {/* Story */}
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.45em] opacity-55">
            our story
          </p>

          <h2 className="font-serif-display mt-5 text-5xl leading-[1.05] sm:text-6xl">
            A place to
            <br />
            <span className="font-script text-[var(--sage)]">slow down.</span>
          </h2>

          <div className="mt-8 space-y-5 font-serif-display text-base leading-8 opacity-75 sm:text-lg">
            <p>
              Inoki was created around a simple idea: good coffee, good food and
              a space that makes you want to stay a little longer.
            </p>

            <p>
              We believe the best cafe moments aren't always planned. They're
              the extra conversation over one more cup, a quiet afternoon by the
              window, or a pizza shared between friends.
            </p>
          </div>

          <div className="mt-10 h-px w-20 bg-[var(--sage-deep)]/30" />

          <p className="mt-6 text-sm leading-6 opacity-60">
            Come as you are. Stay as long as you like.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
