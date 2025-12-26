import Image from "next/image";
import Link from "next/link";

export default function OneWayTicketToTaipei() {
  return (
    <div className="max-w-[1000px]">
      <h1>I booked a one way ticket to Taipei</h1>
      <br />
      <p>
        When I first quit my job in 2023, I had a fleeting thought of travelling
        the world as a nomad and living on peanuts. I calculated that I can
        comfortably travel on 5k a month of expenses and see the world. And I
        had way more than enough money to do that. Back then I was not ever
        aware of the proliferated nomad culture that you can find everywhere now
        on twitter (I wasn&#39;t even on twitter!). I just thought it sounded
        cool and it made a good story for my life. It was just a thought, I
        never acted on it. I was dating a long term girlfriend at the time and
        things were going well. (we broke up later that year)
      </p>
      <br />
      <p>
        Much like the startup founders I&#39;ve met over the years. A lot of
        them are inspired by the same heroes. Alex Hormozi, Mark Zuckerberg,
        Collison brother, the list goes on.. The idea of locking in and
        achieving generational success is what we all dream of. The glory and
        everything. After I started working on my first startup - 3 cofounders,
        all based in Toronto - I told myself, this is the time to lock in. No
        more having fun until the startup blows up.
      </p>
      <br />

      <p>
        I think there&#39;s something about being raised in an Asian family with
        high expectations that shapes this type of personality. I craved the
        grind, I wanted to suffer. I could&#39;ve stayed at my 300k chill
        software job and have a chill life, but I chose to quit and do startups.
        A 90 on your test score is not enough, I must try to get 100, or even
        110. Unlike tests however, there are no upper limits to life, you can
        always get more.
      </p>
      <br />
      <p>
        If I ever get an exit I will be a nomad and travel the world. I told
        myself. Just suffer a little bit more, I&apos;ll get my reward. And then
        I did get an exit, but I felt it wasn&apos;t huge enough, it&apos;s not
        life changing. I need to{" "}
        <Link
          target="__blank"
          href={"https://www.youtube.com/watch?v=uEl2KUZ3JWA&t=360s"}
          className="text-blue-500 hover:underline"
        >
          defer my plans again
        </Link>
        . Not yet. Just grind a little more.
      </p>
      <br />
      <p>
        (If you can&apos;t tell, I&apos;m the type of person to have 1000 saved
        potions for the final boss fight in a RPG game, only to save them for
        the final boss and never use them ever.)
      </p>
      <br />
      <hr className="h-[1px] pb-[19px]" />
      <p>
        At some point this year after I quit, my body started sending me
        signals. I keep thinking about this when I&apos;m taking a shower, when
        I&apos;m trying to get out of bed in the morning, when I&apos;m eating,
        all the time. It was getting bad.
      </p>

      <br />
      <p>
        I talked to my parents, I talked to my friends. Just push through, they
        said, be patient and do what you&apos;re gonna do. I thought it was not
        normal, I thought it was a disease. I was getting lazy and wanted to run
        away from all my problems and suffering, it was not good.
      </p>
      <br />
      <p>
        But something else also happened. I started talking with friends who
        have had nomad experiences. I discovered the concept of the{" "}
        <Link
          target="__blank"
          href={"https://www.youtube.com/watch?v=2CIz-P3kIUM"}
          className="text-blue-500 hover:underline"
        >
          shower test
        </Link>
        . I even binge watched Anthony Bourdain and fantasized a little bit. My
        soul slowly but surely begins to sing a song so loud my heart cannot
        ignore.
      </p>
      <br />
      <p>
        I realized that I probably need to accept that this is what I want, and
        try to get it out of my system. No matter how badly I wanted to be the
        Alex Hormozi grind 24/7 type of person, I&apos;m not (at least not right
        now). My body has its own desires, and right now it does not want to
        grind (not to mention there are no ideas that have taken off yet for me
        to grind). I was creating fake anxiety for myself.
      </p>
      <br />
      <p>
        I wish it was an epiphany, a quote, or something impactful that made me
        make my decision in an instant - that would&apos;ve been more poetic.
        But honestly, it was just a gruesome few weeks of introspection that
        made me realize I needed to go through my own journey, and find out what
        I was meant to do.
      </p>
      <br />
      <p>
        I have no idea how long I will travel for, I could even be back to
        Toronto next month, and all this sentimental nonsense will probably be
        all for nothing. But for now I&apos;m sitting at the airport - with a
        one way ticket to Taipei.
      </p>

      <br />
      <div className="flex flex-col items-center">
        <Image
          className="mx-auto"
          src={"/blog/airport-to-taipei.png"}
          width={400}
          height={400}
          alt="One life, worth an attempt"
        />
      </div>
      <br />
      <span>YiMing - Dec 2025</span>
      <br />
    </div>
  );
}
