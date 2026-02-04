import HeroBanner from "@/components/ui/hero-banner";

export default async function HomePage() {
  const heading = "Nordöstra Nämdö Samfällighetsförening";
  return (
    <>
      <HeroBanner text={heading} />
      <main></main>
    </>
  );
}
