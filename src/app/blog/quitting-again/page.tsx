import Image from "next/image";
import Link from "next/link";

export default function QuittingAgain() {
  return (
    <div className="max-w-[1000px]">
      <h1>Quitting, Again</h1>
      <br />
      <p>
        Earlier this year,{" "}
        <Link
          href={"/blog/selling-my-first-startup"}
          className="text-blue-500 hover:underline"
        >
          I sold my first startup
        </Link>
        . Through some sheer coincidence and luck, we got discovered by Daniel
        Saks, and he decided to acquire us in just 4 days. It was a strange
        experience and definitely changed my world a bit. The phrase &quot;You
        can just do things&quot; has never been more true.
      </p>
      <br />
      <p>
        And yet just after 7 months, I&apos;ve decided to leave and start
        something new again.
      </p>
      <br />
      Landbase, like any company, has its challenges, but overall it&apos;s a
      good company to work for. My manager was really supportive and the team
      was nice. I got to grow the Toronto team from 0 to 4 members, and witness
      a lot of company growth first hand.
      <p>
        But as Naval said, &quot;A taste of freedom can make you
        unemployable&quot;. Ever since I&apos;ve experienced what it&apos;s like
        to run your own stuff, it&apos;s hard to go back. I want to pick my own
        tools, own my own shit, and take full responsibility for the
        product&apos;s success. The biggest problem has always been that I can
        try to be my 90% best and outwork everyone, but I never felt the
        incentive to go 100%. The incentive structure is hard to set up that
        way.
      </p>
      <br />
      <p>
        As I&apos;m telling everyone that I&apos;m quitting, the first question
        people ask is &quot;What will you be working on?&quot; And to be honest,
        I don&apos;t know. I want to at least bet the next 1-2 years on myself
        and see if I can make even 10k revenue every month by myself. I might
        not even work on anything serious for a while, and choose to spend more
        time focusing on my hobbies and my relationships. Maybe I&apos;ll raise
        some money and work on b2b SaaS again. Maybe I&apos;ll do a bunch of
        money and work on b2b saas again. Maybe I&apos;ll do a bunch of
        consulting part time and travel. Maybe I&apos;ll make 12 apps in 12
        months like the indie hacker guys, and see where that takes me.
      </p>
      <br />
      <p>I truly have no plan, and I feel good about it.</p>
      <br />
      <p>
        Any time is precious, especially youth. While I still consider myself
        young, I think it&apos;s time to embark on a new adventure and step into
        the unknowns again.
      </p>
      <br />
      <Image
        className="mx-auto"
        src={"/blog/one-life.png"}
        width={400}
        height={400}
        alt="One life, worth an attempt"
      />
      <br />
      <span>YiMing - Aug 2025</span>
      <br />
    </div>
  );
}
