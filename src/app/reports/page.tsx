// Fetch
import { getMeetings } from "@/data/meetings";
// Functions
import { formatDate } from "@/utils/dateUtils";
// Interfaces
import type { IMeetingProtocol } from "@/models/IMeetingsProtocol";
// React/Next
import Link from "next/link";
// Components
import PageShell from "@/components/layout/page-shell";

export default async function ReportsPage() {
  // Get meeting protocols from database
  const meetings: IMeetingProtocol[] = await getMeetings();

  return (
    <>
      <PageShell title="Resultat och rapporter" showHero={true}>
        <section className="meeting-protocols content flow">
          {meetings.map(({ id, title, date, protocol }) => (
            <article key={title} className="meeting-protocol">
              <Link href={`/reports/${id}`}>
                <h2>{title}</h2>
                <time dateTime={date}>{formatDate(date)}</time>
              </Link>
            </article>
          ))}
        </section>
      </PageShell>
    </>
  );
}
