function BlogComponent({
  pre,
  title,
  link,
}: {
  pre: string;
  title: string;
  link: string;
}) {
  return (
    <span className="whitespace-pre">
      {pre}{" "}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        {title}
        <br />
      </a>
    </span>
  );
}

export default function Collections() {
  return (
    <>
      <div>
        <BlogComponent
          pre="Dec 25 2025 -"
          title="I booked a one way ticket to Taipei"
          link="/blog/one-way-ticket-to-taipei"
        />
        <BlogComponent
          pre="Aug 30 2025 -"
          title="Qutting, Again"
          link="/blog/quitting-again"
        />
        <BlogComponent
          pre="Feb  6 2025 -"
          title="Selling My First Startup"
          link="/blog/selling-my-first-startup"
        />
      </div>
    </>
  );
}
