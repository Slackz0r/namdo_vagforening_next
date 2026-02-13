// Components
import PageShell from "@/components/layout/page-shell";

// Page
export default async function HomePage() {
  return (
    <>
      <PageShell title="Nordöstra Nämdö Samfällighetsförening" showHero={true}>
        <div className="c">
          <h1>Om föreningen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nulla voluptatum. Non
            beatae autem provident totam voluptates nobis suscipit eaque quos laborum fugiat quae
            dolore modi, dolores reiciendis, perspiciatis quod. Quaerat sunt, natus, aut nemo eum
            tempore assumenda ratione esse earum quibusdam provident quas odit minima perferendis
            tempora ipsam voluptas deleniti praesentium alias, facere quidem laborum illum! Sit,
            soluta atque. Nemo laudantium sint soluta laboriosam maiores laborum a maxime, quod amet
            neque officiis earum reprehenderit deleniti accusantium odio dicta facilis debitis eaque
            voluptatem voluptas! Deserunt, veritatis. Aut sit cum minima? Cumque laborum laudantium
            quibusdam veniam ipsam minus, voluptatibus necessitatibus tenetur sint eaque incidunt
            rem ex error fuga quidem officiis quasi iste dignissimos eos? Dolorum veniam accusamus
            aliquam. Vel, labore cupiditate. Porro earum exercitationem quisquam fuga ipsum
            distinctio aliquid quae, velit animi consectetur repellat ratione repudiandae blanditiis
            doloremque sapiente, aliquam nisi saepe aspernatur a. Eveniet distinctio molestias
            officia ab optio ad? Iure hic similique deserunt et voluptates! Itaque, optio non
            recusandae libero ea laudantium, quibusdam maiores corrupti sit id laboriosam vitae
            aperiam similique repudiandae iure harum nam. Veritatis eaque iusto nobis. Perferendis
            voluptatum fugit expedita architecto aliquam! Consequuntur dicta, asperiores tenetur
            nostrum quisquam iste sequi pariatur sunt natus eos molestiae blanditiis cumque
            molestias amet, doloribus culpa non voluptatibus eius distinctio fuga! Cumque, id
            voluptates beatae aliquam corporis, magnam nihil doloribus officiis, esse explicabo
            unde. Fuga, vero sequi velit laborum maiores labore eligendi quidem eum aliquid nihil
            provident nostrum veritatis officiis tempore? Veniam ab facilis accusantium consequuntur
            eius perferendis quisquam, cupiditate, id fugiat neque quod autem voluptates tenetur
            consectetur omnis exercitationem possimus repudiandae! Possimus, voluptates. Obcaecati
            expedita ducimus ex tempore sed non. Vel, assumenda aliquid. Exercitationem neque
            quaerat voluptatum repellat aspernatur repudiandae impedit veniam officia iusto animi
            amet illum iure in, voluptatibus, iste reprehenderit dolor. Ratione rerum est soluta
            sapiente minus doloribus!
          </p>
        </div>
        <div className="bento-start">
          <div className="grid-box hero-box">
            <h2>Senaste nytt</h2>
            <p>Bryggprojektet går vidare enligt plan. Nästa uppdatering presenteras i oktober.</p>
          </div>

          <div className="grid-box">
            <h3>Kommande möte</h3>
            <p>Ordinarie stämma 21 september 2026</p>
          </div>

          <div className="grid-box">
            <h3>Snabblänkar</h3>
            <ul>
              <li>Stadgar</li>
              <li>Styrelse</li>
              <li>Protokoll</li>
            </ul>
          </div>

          <div className="grid-box tall-box">
            <h3>Om föreningen</h3>
            <p>
              Nordöstra Nämdö Samfällighetsförening ansvarar för vägar, bryggor och gemensamma
              anläggningar inom området.
            </p>
          </div>

          <div className="grid-box">
            <h3>Vägar</h3>
            <p>Information om underhåll och planerade åtgärder.</p>
          </div>

          <div className="grid-box">
            <h3>Bryggor</h3>
            <p>Statusuppdateringar och framtida projekt.</p>
          </div>

          <div className="grid-box wide-box">
            <h3>Dokument & Protokoll</h3>
            <p>Här hittar du årsredovisningar, stämmoprotokoll och övriga viktiga handlingar.</p>
          </div>

          <div className="grid-box">
            <h3>Galleri</h3>
            <p>Bilder från föreningens verksamhet och Nämdö.</p>
          </div>

          <div className="grid-box">
            <h3>Karta</h3>
            <p>Översikt över föreningens verksamhetsområde.</p>
          </div>

          <div className="grid-box">
            <h3>Kontakt</h3>
            <p>Har du frågor? Kontakta styrelsen här.</p>
          </div>

          <div className="grid-box">
            <h3>GDPR</h3>
            <p>Så hanterar vi personuppgifter.</p>
          </div>

          <div className="grid-box">
            <h3>Externa länkar</h3>
            <p>Relevanta myndigheter och resurser.</p>
          </div>
        </div>
      </PageShell>
    </>
  );
}
