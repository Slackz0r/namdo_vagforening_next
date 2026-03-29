// Components
import PageShell from "@/components/layout/page-shell";
// React/Next
import Image from "next/image";

// Page
export default function MapPage() {
  return (
    <>
      <PageShell title="Karta över området" showHero={true}>
        <div className="image-container">
          <Image
            src="/images/karta_nordostra_namdo.png"
            alt="Fastighetskarta över Nordöstra Nämdö"
            width={850}
            height={500}
          ></Image>
        </div>
      </PageShell>
    </>
  );
}
