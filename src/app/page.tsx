// Components
import PageShell from "@/components/layout/page-shell";

// Page
export default async function HomePage() {
  return (
    <>
      <PageShell title="Nordöstra Nämdö Samfällighetsförening" showHero={true}>
        <section className="flow">
          <p>
            Nordöstra Nämdö samfällighetsförening innefattar 92 fastigheter på norra Nämdö.
            Föreningen etablerades vid en förrättning av Lantmäteriet 1985.
          </p>

          <h2>Den omfattar:</h2>

          <ul>
            <li>
              <p>Östanviks Brygga</p>
            </li>
            <li>
              <p>Vägen från Östanviks brygga till grindstolpen vid gamla Östanviks gård</p>
            </li>
            <li>
              <p>Traktorstigen mellan Östanviks Gård och Nämdö Böte brygga</p>
            </li>
            <li>
              <p>Nämdö Böte brygga</p>
            </li>
          </ul>

          <p>
            Föreningen förvaltar dessa vägar och bryggor, vilket innebär underhåll, drift och
            planering. Som fastighetsägare är man obligatoriskt ansluten till föreningen. Man är då
            skyldig att respektera föreningens stadgar, och de beslut som tas på föreningens
            årsstämma, som hålls på Nämdö varje år. Fastighetsägare har olika andelar i föreningen,
            vilket har fastställts av Lantmäteriet. Fastighetsägare kan heller inte utträda ur
            föreningen men välkomnas att göra sin röst hörd under årsstämman.
          </p>
        </section>
      </PageShell>
    </>
  );
}
