// Components
import HeroBanner from "../ui/hero-banner";

// Interface
type PageShellProps = {
  title: string;
  children: React.ReactNode;
  showHero: boolean;
};

export default function PageShell({ title, children, showHero }: PageShellProps) {
  return (
    <>
      <main className="flow-large" aria-labelledby="page-title">
        {showHero && <HeroBanner title={title} />}

        <div className="page-container flow-large">
          {/* Add components as children */}
          {children}
        </div>
      </main>
    </>
  );
}
