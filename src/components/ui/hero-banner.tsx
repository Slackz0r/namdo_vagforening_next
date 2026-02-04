import Image from "next/image";

export default function HeroBanner({ text }: { text: string }) {
  return (
    <>
      <section className="hero-banner">
        {/* Banner image */}
        <Image
          className="hero-image"
          src={"/images/bote.jpg"}
          alt="Dimmig horisont med öar i bakgrunden"
          fill
          priority
        />

        {/* Dark fade overlay */}
        <div className="hero-overlay" />

        {/* Text content */}
        <div className="hero-content">
          <h1 className="hero-heading">{text}</h1>
        </div>
      </section>
    </>
  );
}
