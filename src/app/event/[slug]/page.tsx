import H1 from "@/components/layout/H1";
import { getEvent } from "@/lib/server-utils";
import { capitalize } from "@/lib/utils";
import { EventoEvent } from "@prisma/client";
import { Metadata } from "next";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return [
    {
      slug: "dj-practice-session",
    },
    {
      slug: "comedy-extravaganza",
    },
  ];
}
export function generateMetadata({ params }: EventPageProps): Metadata {
  const title = params.slug
    .split("-")
    .map((event) => capitalize(event))
    .join(" ");
  return {
    title: `Event: ${title}`,
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const event: EventoEvent = await getEvent(params.slug);
  return (
    <main>
      <section className="relative h-[450px] lg:h-[361px] py-14 md:py-20 overflow-hidden flex justify-center items-center">
        <Image
          src={event.imageUrl}
          className="object-cover blur-3xl z-0"
          alt="Event background image"
          fill
          quality={50}
          sizes="(max-width: 1280) 100vw, 1280px"
        />
        <div className="z-1 flex flex-col lg:flex-row gap-6 lg:gap-16 relative">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
            className="rounded-xl border-2 border-white/50 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-white/75">
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}
            </p>
            <H1 className="mb-2 mt-1 whitespace-nowrap lg:text-5xl">
              {event.name}
            </H1>
            <p className="whitespace-nowrap text-xl lg:text-2xl text/75">
              Organized by <span className="italic">{event.organizerName}</span>
            </p>
            <button className="bg-white/20 text-lg capitalize mt-6 lg:mt-auto w-[95vw] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects">
              Get tickets
            </button>
          </div>
        </div>
      </section>
      <div className="min-h-[75vh] text-center px-5 py-16">
        <Section className="mb-12">
          <SectionHeading>About this event</SectionHeading>
          <SectionContent>{event.description}</SectionContent>
        </Section>
        <Section>
          <SectionHeading>Location</SectionHeading>
          <SectionContent>{event.location}</SectionContent>
        </Section>
      </div>
    </main>
  );
}

function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={className}>{children}</section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl mb-6">{children}</h2>;
}

function SectionContent({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg leading-8 text-white/75 max-w-4xl mx-auto">
      {children}
    </p>
  );
}
