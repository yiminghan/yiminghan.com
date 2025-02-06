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
    <span>
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
          pre="Feb 6 2024 -"
          title="Selling My First Startup"
          link="/blog/selling-my-first-startup"
        />
      </div>
    </>
  );
}
