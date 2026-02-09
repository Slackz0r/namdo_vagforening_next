// Fetch
import { getMeeting } from "@/data/meetings";
// Functions
import { formatDate } from "@/utils/dateUtils";
// Interface
import { IMeetingProtocol } from "@/models/IMeetingsProtocol";
// React/Next
import { notFound } from "next/navigation";
// Components
import PageShell from "@/components/layout/page-shell";

// Page
export default async function ProtocolPage({ params }: { params: Promise<{ id: number }> }) {
  const { id } = await params;
  // Initialize variable
  let thisProtocol: IMeetingProtocol;

  // Fetch specific protocol
  try {
    thisProtocol = await getMeeting(id);
  } catch (error) {
    notFound();
  }
  // Destructuring protocol
  const { title, date, year, protocol } = thisProtocol;

  // Variables
  const heading = `Mötesprotokoll ${date}`;

  return (
    <>
      <PageShell title={heading} showHero={false}>
        <h1>{heading}</h1>

        <article className="content">
          <h2>{title}</h2>
          <time dateTime={date}>{formatDate(date)}</time>
          {protocol.map(({ paragraph }) => (
            <p key={id}>{paragraph}</p>
          ))}
        </article>
      </PageShell>
    </>
  );
}
