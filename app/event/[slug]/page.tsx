import H1 from "@/components/H1";
import Image from "next/image";

type EventPageProps = {
  params: {
    slug: string;
  };
};

export default async function EventPage({ params }: EventPageProps) {
  const slug = params.slug;

  const response = await fetch(
    `https://bytegrad.com/course-assets/projects/evento/api/events/${slug}`
  );
  const event = await response.json();

  return (
    <main>
      <section className="relative h-[361px] overflow-hidden">
        <Image
          src={event.imageUrl}
          alt="Event background image"
          fill
          sizes="(max-width: 1280px) 100vw, 1280px"
          quality={50}
          className="object-cover blur-2xl z-0"
        />

        <div className="z-1 relatives">
          <Image
            src={event.imageUrl}
            alt={event.name}
            width={300}
            height={201}
          />

          <div>
            <H1>{event.name}</H1>
          </div>
        </div>
      </section>

      <div></div>
    </main>
  );
}
