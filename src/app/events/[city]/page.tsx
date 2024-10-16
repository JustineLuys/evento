import EventsList from "@/components/event/EventsList";
import H1 from "@/components/layout/H1";
import SkeletonCards from "@/components/skeleton/SkeletonCards";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";
import React, { Suspense } from "react";
import { z } from "zod";

type Props = {
  params: {
    city: string;
  };
};
type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata({ params }: Props): Metadata {
  const city = capitalize(params.city);
  return {
    title: `${city === "All" ? "All Events" : `Events in ${city}`} | Events`,
    description: `Events in ${capitalize(params.city)}`,
  };
}

const pageNumberSchema = z.coerce.number().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = capitalize(params.city);
  const parsedPage = pageNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error("Invalid page number");
  }
  const page = parsedPage.data ?? 1;
  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {city === "All" ? "All Events" : `Events in ${city}`}
      </H1>
      <Suspense key={city + page} fallback={<SkeletonCards />}>
        <EventsList city={city} page={page} />
      </Suspense>
    </main>
  );
}
