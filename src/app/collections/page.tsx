function LinkComponent({ title, link }: { title: string; link: string }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 hover:text-blue-700 hover:underline"
    >
      {title}
      <br />
    </a>
  );
}

export default function Collections() {
  return (
    <>
      <div>
        <h5>Great Web Visual Design:</h5>
        <LinkComponent
          title="Cari Aesthetics"
          link="https://cari.institute/aesthetics"
        />
        <LinkComponent
          link="https://ui.aceternity.com/components"
          title="Aeternity UI Components"
        />
        <LinkComponent
          title="Satori - Html to IMG"
          link="https://github.com/vercel/satori"
        />
        <LinkComponent
          title="Nextra - Next.js + MDX"
          link="https://nextra.site/"
        />

        <br />
        <br />

        <h5>Cool Gift Ideas:</h5>
        <LinkComponent title="Talia Sari - Art" link="https://taliasari.com/" />
        <LinkComponent link="https://purrandmutt.com/" title="Pet Portraits" />

        {/* <h5>Captivating Phrases:</h5>

        <div className="mx-2 text-sm">
          <span>Well folks, it doesn't get any better than this: -</span>
          <br />
          <span>I worship at the alter of X</span>
          <br />
          <span>the best things in life are free, except -</span>
          <br />
        </div>

        <br />

        <h5>Interview Questions:</h5>
        <div className="mx-2 text-sm">
          <span>
            To what do you attribute to your success? You can't say luck.
          </span>
          <br />
          <span>What's the hardest thing you've every done?</span>
          <br />
          <span>Tell me what you are the most proud of.</span>
          <br />
          <span>What would your parents/siblings say about you?</span>
          <br />
          <span>What do you believe in that most people don't?</span>
          <br />
          <span>Do you consider yourself lucky?</span>
          <br />
          <span>
            What feedback should I give the person for their first performance
            review?
          </span>
          <br />
        </div> */}
      </div>
    </>
  );
}
