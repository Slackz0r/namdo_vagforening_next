import Image from "next/image";

export default function HeroBanner({ title }: { title: string }) {
  return (
    <>
      <header className="hero-banner">
        {/* Banner image */}
        <Image className="hero-image" src={"/images/bote.jpg"} alt="" fill priority />

        {/* Dark fade overlay */}
        <div className="hero-overlay" />

        {/* Text content */}
        <div className="hero-content">
          <h1 id="page-title" className="hero-heading">
            {title}
          </h1>
        </div>
      </header>
    </>
  );
}
