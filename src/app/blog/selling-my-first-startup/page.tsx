import Image from "next/image";

function Section({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <>
      <br />
      <hr className="h-[1px] pb-[19px]" />
      <p>- {title}</p>
      <br />
      {content}
    </>
  );
}

export default function SellingMyFirstStartup() {
  return (
    <div className="max-w-[1000px]">
      <h1>Selling My First Startup:</h1>
      <p>
        <span>
          the story of working on something for 14 months and selling it in 4
          days
        </span>
      </p>
      <br />
      <Section
        title="Nov 2023 - the beginning"
        content={
          <>
            <div className="flex flex-col items-center">
              <div className="gap-xl flex flex-col pb-[6px] xl:flex-row">
                <Image
                  src="/blog/early-product-1.png"
                  alt="early product v1"
                  width={644}
                  height={1124}
                />
                <Image
                  src="/blog/early-product-2.png"
                  alt="early product v2"
                  width={644}
                  height={1124}
                />
              </div>
              Early Products of the Company
            </div>
            <p>
              <br />
              I met my co-founder Daniel at a Toronto local AI event. We briefly
              chatted and exchanged contact info, but didn&apos;t talk too much,
              since back then I was working with a different team on a different
              idea.I had no idea this would turn into something wild. Funny how
              life is sometimes.
              <br />
              <br />
              About a month after that event, he reached out. Their CTO at the
              time could not commit to quitting to work on their startup full
              time, and that was a deal breaker. Coincidentally, I also just
              left my last team due to timezone and personality issues, and I
              was just about to look for something new. It was a 2 person team
              at the time - Daniel was leading operations, and Max was leading
              sales. They were looking for a tech guy. After we met up, Max
              showed me his fully booked sales calendar. “This could be a big
              opportunity,&quot; he said, &quot; a lot of people are
              interested.&quot;
              <br />
              <br />
              &quot;why not, ill give this a try&quot; I thought, not knowing
              the 1 year rollercoaster ride that follows.
            </p>
          </>
        }
      />
      <Section
        title="Jan to June 2024 - getting traction and growing fast"
        content={
          <p>
            The team was small but complete - Max was working sales, I was doing
            software, and Daniel managing operations/everything else.
            <br />
            <br />
            We started selling aggressively to sales teams that needed custom
            research and personalization, and they don&apos;t really care about
            using a complete product - they just want to book meetings. So we
            started off building simple tools to automate the obvious parts of
            the workflow, and hired VAs to manually do the rest. We were running
            the business as a sales agency - a “tech enabled” sales agency.
            <br />
            <br />
            This fits well with us being bootstrapped and our team comp - we
            couldn&apos;t afford to wait for months before getting the product
            ready to start selling. Also, since the majority of the team is
            non-technical, a tech-enabled service agency makes sense for us to
            start with so everyone has stuff to do. Our thesis is that we would
            take any customer and their workflow, do it manually first, and
            eventually automate everything with tech.
            <br />
            <br />
            This method worked really well - we were profitable from the get go,
            and didn&apos;t really need any outside capital to sustain
            ourselves. Our MRR grew really fast in the initial couple of months,
            partly thanks to our aggressive sales tactics, partly thanks to the
            AI hype. We hired interns, added more cold callers, things are
            looking great. We were living the dream, everyday is constant
            winning, nothing could go wrong.
            <br />
            <br />
            Until -
          </p>
        }
      />
      <Section
        title="July to Sep 2024 - Churn, the Dip, and the blow up"
        content={
          <>
            <div className="flex flex-col items-center">
              <Image
                className="pb-[14px]"
                src="/blog/churn.png"
                alt="1"
                width={644}
                height={1124}
              />
              Sweet Sweet Churn
            </div>
            <p>
              <br />
              They say there&apos;s always many dips in the entrepreneur
              journey, and ours came around month 6.
              <br />
              <br />
              We started to get customer churns, due to us over-promising and
              under delivering. We had it coming though - we wouldn&apos;t say
              no to customers wanting to give us money, even though we knew we
              would do a subpar job for them. On top of that, there are a lot of
              factors we can&apos;t control, such as the macro environment, the
              customers&apos; products, and their offers. If a failing sales
              organization comes to us for help due to having a bad product -
              there is inherently nothing we can do. We can only do so much.
              <br />
              <br />
              Perhaps worse from the actual financial churn is our emotional
              distress. As we started to see our MRR decline, the emotions
              started to kick in. At this point we have been grinding for half a
              year, and we were winning every step of the way. And now, it is
              the time for us to be tested.
              <br />
              <br />
              We started arguing, we needed more product features for retention,
              we needed better customer service, we needed more and more and
              more… The stress is getting us. Morale is low and we didn&apos;t
              really develop good mechanisms or skills to deal with this type of
              stress. Soon we would get into hours long calls every other day
              just to argue and have bad fights.
              <br />
              <br />
              The funny thing is - by all popular metrics, we are still doing
              VERY WELL. We are default alive, profitable, and operating with
              good margins. But of course, that&apos;s rarely what kills start
              ups. In the end, we felt like something had to change. Max ended
              up leaving the team to join another start up, leaving me and
              Daniel left to run the show.
              <br />
              <br />
              Things got slightly better after this. There was less fighting
              going on, but churn is still a real and pressing problem. We made
              some big changes to our product, and are still fighting hard to
              grow.
              <br />
              <br />
              Then, the second dip hit.
            </p>
          </>
        }
      />
      <Section
        title="Oct to Dec 2024 - the burnout"
        content={
          <p>
            For people that never experience burnout, the description probably
            seems impossible to resonate or even understand. The idea of intense
            physical pain from pushing yourself too hard, and sometimes even
            entire body shut downs, all completely from the mental stress. I
            definitely thought this was an exaggeration, until I had my first
            burnout.
            <br />
            <br />
            Around October, a month after Max left, we were going about as
            usual, taking customer calls, making product improvements. Then
            suddenly, the burnout came. I had a massive panic attack, I felt
            like I was dying, my chest was tight, and I could have a heart
            attack at any moment. I could barely work for weeks. Every time I
            opened my laptop, I would have this haunting chest pain, I would be
            out of breath.
            <br />
            <br />
            It was my first burnout, and it was scary in a lovecraftian way. I
            never experienced anything like it - the intense pain caused by
            something completely psychological. There were a lot of logical
            reasons for this burnout - we were probably stretching ourselves way
            too thin after our third cofounder left, taking on 1.5x the workload
            on top of an already busy schedule that we&apos;ve had. It&apos;s my
            body&apos;s way of fighting back. Logic aside, I felt defeated. I
            genuinely did not know how to deal with this type of response from
            my body.
            <br />
            <br />
            Luckily, I had a Japan trip planned right after I had my burnout. I
            took some time to completely disconnect for a few days. It helped a
            lot - but still didn&apos;t completely address the burnout though.
            <br />
            <br />
            Coming back from Japan, my burnout got a lot better, but the
            business problems still didn&apos;t go away - customer churn,
            product breaking, the emotional stress of things, not to mention at
            this time we are starting to dig into our personal savings for
            holiday expenses. We still need to live our lives, relationships and
            families to work on. Emotions kept racking up.
            <br />
            <br />
            We took the entire December to think about what we wanted to do, and
            eventually decided to look for an exit
          </p>
        }
      />
      <Section
        title="Jan 2025 -  the exit"
        content={
          <p>
            The deal, from start to finish, probably took 4 days.
            <br />
            <br />
            We started to reach out to a couple of companies in January that are
            working on similar things to us, just to get some conversations
            started. Certainly we didn&apos;t expect any sort of outcome any
            time soon. Among those companies was a company that just came out of
            stealth, building something similar to what we were building .
            <br />
            <br />
            It was a Friday morning. My CEO Daniel took what was supposedly a 30
            min quick call with the other co&apos;s CEO to do some product demos
            and to &quot;exchange ideas&quot;. Somehow that call turned into a
            few more texts and calls, and we were having dinner with their chief
            of staff who just happened to also be in Toronto that same night. We
            shared plans about our ideas for the product if we had more
            resources, and a lot of dots were connecting for us.
            <br />
            <br />
            We ended up talking with the entire exec on the following Monday,
            and started to work out a deal on Tuesday. Without counting the 2
            day weekend, it took us about 4 days to finalize everything from
            intro to finish.
            <br />
            <br />
            I&apos;m sitting here writing this post, having just signed my
            papers. To be honest, I&apos;m still a little winded by how fast
            things moved. This is one of the moments where the beauty of running
            a startup really hits for me, and why I love startups. Things can
            happen really, REALLY fast. One week you are still a bootstrapped
            b2b SaaS founder, and another week you are getting acquired and
            ready to go back to working for a boss.
            <br />
            <br />
            So that&apos;s it. my first startup experience. the entire ups and
            downs. The ecstasy of rapid growth, the anguish when churn kicks in,
            and the burnout so bad it can only be described as mental illness.
            <br />
            <br />
          </p>
        }
      />
      <hr className="h-[1px] pb-[19px]" />
      <br />
      <span>
        I hope you had some fun reading this story, I&apos;m certainly not done
        with startups.
        <br />
        Hopefully I&apos;ll see you coming back in a few years, for some even
        wilder stories.
      </span>
      <br />
      <br />
      <span>YiMing - Feb 2025</span>
      <br />
      <br />
      <br />
    </div>
  );
}
