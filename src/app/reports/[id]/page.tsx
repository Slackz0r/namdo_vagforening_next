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

  return (
    <>
      <PageShell title="" showHero={false}>
        <h1>{`Mötesprotokoll ${date}`}</h1>

        <article className="content">
          <h2>{title}</h2>
          <time dateTime={date}>{formatDate(date)}</time>
          {protocol.items.map(({ no, title, body }) => (
            <div className="protocol-item" key={id + body}>
              <h3>{`${no}: ${title}`}</h3>
              <p>{body}</p>
            </div>
          ))}
        </article>
      </PageShell>
    </>
  );
}
