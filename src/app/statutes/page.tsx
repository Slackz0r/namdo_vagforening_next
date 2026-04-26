// Imports
import PageShell from "@/components/layout/page-shell";

// Page
export default function StatutesPage() {
  return (
    <>
      <PageShell title="Stadgar" showHero={true}>
        <article className="statutes-document flow">
          <header>
            <p className="document-meta">Organisationsnummer: 716418-9107</p>
            <p className="document-meta">Sammanträdesdatum: 1985-11-07</p>

            <h2>Stadgar för Nordöstra Nämdös samfällighetsförening</h2>

            <p>
              Stadgar för samfällighetsförening, bildad enligt lagen (1973:1150) om förvaltning av
              samfälligheter. Lagens bestämmelser om förvaltningen skall gälla i den mån inte annat
              framgår av dessa stadgar.
            </p>
          </header>

          <section aria-labelledby="firma">
            <h3 id="firma">§ 1 Firma</h3>
            <p>Föreningens firma är Nordöstra Nämdös samfällighetsförening.</p>
          </section>

          <section aria-labelledby="samfalligheter">
            <h3 id="samfalligheter">§ 2 Samfälligheter</h3>
            <p>
              Föreningen förvaltar anläggningssamfällighet avseende bryggor och vägar tillkommen
              genom anläggningsbeslut 1985-11-07, dnr AB6:6-83-3.
            </p>
          </section>

          <section aria-labelledby="grunderna">
            <h3 id="grunderna">§ 3 Grunderna för förvaltningen</h3>
            <p>
              Samfälligheten eller samfälligheterna skall förvaltas i enlighet med vad som vid
              bildandet bestämts om dess eller deras ändamål.
            </p>
          </section>

          <section aria-labelledby="medlem">
            <h3 id="medlem">§ 4 Medlem</h3>
            <p>
              Medlem i föreningen är ägare till fastighet eller därmed jämställd egendom, som har
              del i samfällighet upptagen under § 2.
            </p>
          </section>

          <section aria-labelledby="styrelse-sate">
            <h3 id="styrelse-sate">§ 5 Styrelse – säte och sammansättning</h3>
            <p>För föreningen skall finnas en styrelse med säte i Värmdö kommun.</p>
            <p>Styrelsen skall bestå av 5 ledamöter och 2 suppleanter.</p>
          </section>

          <section aria-labelledby="styrelse-val">
            <h3 id="styrelse-val">§ 6 Styrelse – val</h3>
            <p>Styrelsen väljs vid ordinarie föreningsstämma.</p>
            <p>Mandattiden för ledamot är 2 år och för suppleant ett år.</p>
            <p>Första gången val äger rum skall 2 ledamöter väljas på endast ett år.</p>
            <p>
              Stämman utser ordförande bland styrelsens ledamöter. I övrigt konstituerar styrelsen
              sig själv.
            </p>
          </section>

          <section aria-labelledby="kallelse-styrelse">
            <h3 id="kallelse-styrelse">
              § 7 Styrelse – kallelse till sammanträde och föredragningslista
            </h3>
            <p>
              Kallelse till styrelsesammanträde, vilken skall innehålla uppgift om förekommande
              ärenden, skall tillställas ledamöterna minst 14 dagar före sammanträdet.
            </p>
            <p>
              Suppleanterna skall inom samma tid tillställas underrättelse om sammanträdet och
              förekommande ärenden. Ledamot, som är förhindrad att närvara, skall genast meddela
              detta till ordföranden, som har att omedelbart kalla suppleant i ledamotens ställe.
            </p>
            <p>
              Suppleant som ej tjänstgör i ledamots ställe har rätt att närvara vid sammanträdet men
              har ej rösträtt.
            </p>
          </section>

          <section aria-labelledby="styrelse-beslut">
            <h3 id="styrelse-beslut">§ 8 Styrelse – beslutförhet och protokoll</h3>
            <p>
              Styrelsen är beslutför när kallelse skett i behörig ordning och minst halva antalet
              styrelseledamöter är närvarande. Utan hinder härav skall styrelsesammanträde anses
              behörigen utlyst om samtliga ordinarie ledamöter infunnit sig till sammanträdet.
            </p>
            <p>
              Som styrelsens beslut gäller den mening om vilken de flesta röstande förenar sig. Vid
              lika röstetal avgörs val genom lottning. I andra frågor gäller den mening som biträdes
              av ordföranden.
            </p>
            <p>
              Utan att ha angivits i kallelsen får ärende avgöras om minst två tredjedelar av
              styrelseledamöterna är närvarande och ense om beslutet.
            </p>
            <p>
              Fråga får utan hinder av bestämmelserna i första stycket avgöras utan kallelse om
              samtliga ordinarie ledamöter är ense om beslutet.
            </p>
            <p>
              Den som deltagit i avgörandet av ärende äger anföra reservation mot beslutet. Sådan
              reservation skall anmälas före sammanträdets slut.
            </p>
            <p>
              Över ärenden i vilka styrelsen fattat beslut skall föras protokoll som upptar datum,
              deltagande ledamöter och suppleanter, kort beskrivning av ärendet, styrelsens beslut
              samt anförda reservationer. Protokollet skall justeras av ordföranden eller annan
              ledamot som vid förfall för ordföranden lett sammanträdet.
            </p>
          </section>

          <section aria-labelledby="styrelse-forvaltning">
            <h3 id="styrelse-forvaltning">§ 9 Styrelse – förvaltning</h3>
            <p>Styrelsen skall:</p>
            <ol>
              <li>förvalta samfälligheten eller samfälligheterna och föreningens tillgångar,</li>
              <li>föra redovisning över föreningens räkenskaper,</li>
              <li>föra förteckning över delägande fastigheter, dessas andelstal och ägare,</li>
              <li>
                årligen till ordinarie stämma avge förvaltningsberättelse över föreningens
                verksamhet och ekonomi,
              </li>
              <li>
                om förvaltningen omfattar flera samfälligheter eller annars är uppdelad på olika
                verksamhetsgrenar och medlemmarna andelar inte är lika stora i alla
                verksamhetsgrenarna, föra särskild redovisning för varje sådan gren,
              </li>
              <li>
                i övrigt fullgöra vad lagen föreskriver om styrelsens handhavande av föreningens
                angelägenheter.
              </li>
            </ol>
          </section>

          <section aria-labelledby="revision">
            <h3 id="revision">§ 10 Revision</h3>
            <p>
              För granskning av styrelsens förvaltning skall medlemmarna på ordinarie
              föreningsstämma utse 2 revisorer och 2 suppleanter.
            </p>
            <p>
              Revisionsberättelse skall överlämnas till styrelsen senast tre veckor före ordinarie
              stämma.
            </p>
          </section>

          <section aria-labelledby="rakenskapsperiod">
            <h3 id="rakenskapsperiod">§ 11 Räkenskapsperiod</h3>
            <p>Föreningens räkenskapsperiod omfattar tiden 1 maj – 30 april.</p>
          </section>

          <section aria-labelledby="foreningsstamma">
            <h3 id="foreningsstamma">§ 12 Föreningsstämma</h3>
            <p>
              Ordinarie stämma skall årligen hållas under juli månad på tid och plats som styrelsen
              bestämmer.
            </p>
            <p>Styrelsen kan när den finner det erforderligt utlysa extra stämma.</p>
            <p>
              Om stämma skall godkänna uttaxering skall styrelsen bereda medlemmarna tillfälle att
              från det kallelseåtgärd vidtagits ta del av debiteringslängd, utvisande det belopp som
              skall uttaxeras, vad som belöper på varje medlem och när betalning skall ske.
            </p>
            <p>
              Före ordinarie stämma skall dessutom förvaltningsberättelse och revisionsberättelse
              för den avslutade räkenskapsperioden samt utgifts- och inkomststat finnas tillgänglig
              för granskning under samma tid.
            </p>
          </section>

          <section aria-labelledby="kallelse-till-stamma">
            <h3 id="kallelse-till-stamma">§ 13 Kallelse till stämma</h3>
            <p>
              Kallelse till stämma skall utfärdas av styrelsen och ske genom skriftligt meddelande
              som utsänds med posten.
            </p>
            <p>Kallelseåtgärd skall vidtas senast 1 månad före sammanträdet.</p>
            <p>
              I kallelsen skall anges vilka ärenden som skall förekomma på stämman och lämnas
              uppgift om plats där i § 12 angivna handlingar finns tillgängliga.
            </p>
            <p>
              Andra meddelanden skall genom styrelsens försorg bringas till medlemmarnas kännedom
              genom skriftligt meddelande som utsänds med posten.
            </p>
          </section>

          <section aria-labelledby="motioner">
            <h3 id="motioner">§ 14 Motioner</h3>
            <p>
              Medlem kan genom motion väcka förslag rörande föreningens verksamhet. Motion, som
              skall behandlas på ordinarie stämma, skall vara styrelsen tillhanda senast under maj
              månad.
            </p>
            <p>
              Styrelsen skall bereda avgivna motioner och hålla dem tillgängliga för medlemmarna
              tillsammans med förvaltningsberättelsen.
            </p>
          </section>

          <section aria-labelledby="dagordning">
            <h3 id="dagordning">§ 15 Dagordning vid ordinarie stämma</h3>
            <p>Vid ordinarie stämma skall följande ärenden behandlas:</p>
            <ol>
              <li>val av ordförande för stämman,</li>
              <li>val av sekreterare för stämman, normalt föreningens sekreterare,</li>
              <li>val av två justeringsmän,</li>
              <li>styrelsens och revisorernas berättelser,</li>
              <li>ansvarsfrihet för styrelsen,</li>
              <li>framställningar från styrelsen eller motioner från medlemmarna,</li>
              <li>ersättning till styrelsen och revisorerna,</li>
              <li>styrelsens förslag till utgifts- och inkomststat samt debiteringslängd,</li>
              <li>val av styrelse och styrelseordförande,</li>
              <li>val av revisorer,</li>
              <li>fråga om val av valberedning,</li>
              <li>övriga frågor,</li>
              <li>meddelande av plats där stämmoprotokollet hålls tillgängligt.</li>
            </ol>
          </section>

          <section aria-labelledby="avkastning">
            <h3 id="avkastning">§ 16 Disposition av avkastning</h3>
            <p>
              Fördelning av överskott skall ske efter medlemmarnas andelar i samfälligheten eller
              samfälligheterna.
            </p>
          </section>

          <section aria-labelledby="stammobeslut">
            <h3 id="stammobeslut">§ 17 Stämmobeslut</h3>
            <p>Beslut fattas med acklamation om inte omröstning begärs.</p>
            <p>
              I fråga om omröstning med mera gäller 48, 49, 51 och 52 §§ lagen om förvaltning av
              samfälligheter.
            </p>
            <p>
              När omröstning företas skall till protokollet antecknas de omständigheter angående
              rösträtt, andelstal, ombud med mera som har betydelse för bedömandet av
              röstresultatet.
            </p>
            <p>Val skall ske med slutna sedlar om någon begär det.</p>
          </section>

          <section aria-labelledby="verksamhetsgrenar">
            <h3 id="verksamhetsgrenar">§ 18 Flera verksamhetsgrenar</h3>
            <p>
              Skall omröstning ske i fråga som berör flera verksamhetsgrenar gemensamt har vid
              tillämpning av huvudtalsmetoden varje medlem en röst även om han har del i flera
              verksamhetsgrenar.
            </p>
            <p>
              Vid tillämpning av andelsmetoden skall i motsvarande fall varje medlems röstetal
              framräknas på följande sätt. Först reduceras medlemmens röstetal inom varje
              verksamhetsgren i förhållande till verksamhetsgrenens andel i den gemensamma
              verksamhet omröstningen avser. Därefter sammanläggs de reducerade röstetalen för varje
              medlem.
            </p>
            <p>
              Verksamhetsgrenarnas andelar i verksamhet som är gemensam för samfälligheten utgör
              lika andelar, 1/3 per sektion.
            </p>
          </section>

          <section aria-labelledby="protokollsjustering">
            <h3 id="protokollsjustering">§ 19 Protokollsjustering och tillgänglighållande</h3>
            <p>
              Stämmoprotokollet skall justeras inom två veckor efter stämman och därefter hållas
              tillgängligt för medlemmarna.
            </p>
            <p>Dessa stadgar har antagits vid sammanträde enligt datum på första sidan.</p>
          </section>

          <section aria-labelledby="kommentarer">
            <h2 id="kommentarer">Kommentar till stadgarna</h2>

            <section aria-labelledby="kommentar-ingress">
              <h3 id="kommentar-ingress">Till ingressen</h3>
              <p>
                Vid hänvisning till lagrum avser SFL lagen (1973:1150) om förvaltning av
                samfälligheter i dess lydelse den 1 juli 1974.
              </p>
              <p>
                SFL innehåller tvingande regler för föreningsförvaltningen och stadgarnas innehåll.
                Genom bestämmelser i stadgarna kan föreningsmedlemmarna dock i vissa hänseenden
                avvika från SFL. I SFL anges i vilka situationer stadgarna får innehålla avvikelser
                från lagen.
              </p>
            </section>

            <section aria-labelledby="kommentar-1">
              <h3 id="kommentar-1">Till § 1</h3>
              <p>
                Samfällighetsförenings firma skall innehålla ordet samfällighetsförening. Firman
                skall tydligt skilja sig från andra hos länsstyrelsen registrerade
                samfällighetsföreningsfirmor.
              </p>
            </section>

            <section aria-labelledby="kommentar-2">
              <h3 id="kommentar-2">Till § 2</h3>
              <p>
                Samfällighetsförenings ändamål är att förvalta den samfällighet för vilken den
                bildats. Samfällighetsförening får ej driva verksamhet som är främmande för det
                ändamål som samfälligheten skall tillgodose.
              </p>
              <p>
                Alla samfälligheter skall anges uttömmande och på ett sådant sätt att de kan
                identifieras.
              </p>
            </section>

            <section aria-labelledby="kommentar-3">
              <h3 id="kommentar-3">Till § 3</h3>
              <p>
                Samfällighets ändamål kan ha bestämts vid lantmäteriförrättning och framgår i så
                fall av förrättningshandlingarna. Är det vid förrättning bestämda ändamålet oklart
                eller har det blivit inaktuellt, bör grunderna för förvaltningen preciseras i
                stadgarna.
              </p>
            </section>

            <section aria-labelledby="kommentar-4">
              <h3 id="kommentar-4">Till § 4</h3>
              <p>
                Med delägarfastighet förstås fastighet som har del i samfällighet och med delägare
                ägaren av delägarfastighet. Medlemmarna i samfällighetsförening utgörs av delägarna
                i samfällighet.
              </p>
            </section>

            <section aria-labelledby="kommentar-5">
              <h3 id="kommentar-5">Till § 5</h3>
              <p>
                Styrelsen för samfällighetsförening skall bestå av en eller flera ledamöter och ha
                sitt säte i den ort där medlemmarnas fastigheter eller huvuddelen av dessa ligger.
              </p>
            </section>

            <section aria-labelledby="kommentar-6">
              <h3 id="kommentar-6">Till § 6</h3>
              <p>
                När skäl därtill föreligger, får länsstyrelsen förordna att styrelsen skall bestå av
                flera ledamöter än som anges i stadgarna.
              </p>
              <p>
                Styrelseledamot kan av den som utsett honom skiljas från sitt uppdrag före utgången
                av den tid för vilken han utsetts.
              </p>
            </section>

            <section aria-labelledby="kommentar-8">
              <h3 id="kommentar-8">Till § 8</h3>
              <p>
                Som styrelsens beslut gäller den mening om vilken vid styrelsesammanträde de flesta
                röstande förenar sig. Vid lika röstetal avgörs val genom lottning. I andra frågor
                gäller den mening som biträdes av ordföranden.
              </p>
            </section>

            <section aria-labelledby="kommentar-9">
              <h3 id="kommentar-9">Till § 9</h3>
              <p>
                Styrelsen handhar samfällighetens angelägenheter i överensstämmelse med lagen,
                stadgarna och föreningsstämmobeslut, i den mån beslutet ej strider mot denna lag
                eller annan författning.
              </p>
            </section>

            <section aria-labelledby="kommentar-10">
              <h3 id="kommentar-10">Till § 10</h3>
              <p>
                Revisionen avser räkenskapsperiod. Eftersom räkenskapsperiod inte behöver stämma
                överens med styrelsens mandattid, kan styrelsens förvaltning komma att revideras i
                omgångar.
              </p>
            </section>

            <section aria-labelledby="kommentar-12">
              <h3 id="kommentar-12">Till § 12</h3>
              <p>
                Tiden för ordinarie stämma bör bestämmas så långt efter räkenskapsperiods utgång att
                revisorerna får tid att revidera och avge revisionsberättelse och styrelsen därefter
                får tid att kalla till stämma.
              </p>
            </section>

            <section aria-labelledby="kommentar-13">
              <h3 id="kommentar-13">Till § 13</h3>
              <p>
                Kallelse till föreningsstämma sker genom styrelsens försorg. I kallelsen anges vilka
                ärenden som skall behandlas på stämman.
              </p>
            </section>

            <section aria-labelledby="kommentar-15">
              <h3 id="kommentar-15">Till § 15</h3>
              <p>
                Styrelsen är skyldig att på föreningsstämma lämna de upplysningar om föreningens
                verksamhet som medlem begär och som kan vara av betydelse för medlemmarna.
              </p>
            </section>

            <section aria-labelledby="kommentar-16">
              <h3 id="kommentar-16">Till § 16</h3>
              <p>
                Om föreningens verksamhet är sådan att den inte ger ekonomiskt överskott bör
                bestämmelsen utgå.
              </p>
            </section>

            <section aria-labelledby="kommentar-17">
              <h3 id="kommentar-17">Till § 17</h3>
              <p>
                Den som underlåtit att i rätt tid fullgöra sin bidragsskyldighet får delta i
                förhandlingarna men ej utöva rösträtt innan han fullgjort vad han eftersatt.
              </p>
              <p>
                Medlem eller annan får icke, själv eller genom ombud eller som ombud, delta i
                behandling av angelägenhet vari han äger ett väsentligt intresse som strider mot
                föreningens.
              </p>
              <p>
                Röstberättigad medlem har en röst, oavsett om han äger en eller flera
                delägarfastigheter. I fråga om ekonomisk betydelse skall medlemmarnas röstetal
                istället beräknas efter delägarfastigheternas andelstal om medlem begär det.
              </p>
              <p>
                För beslut om överlåtelse eller sökande av inteckning i fast egendom eller
                upplåtelse av sådan egendom med nyttjanderätt för längre tid än fem år fordras minst
                två tredjedelar av de avgivna rösterna.
              </p>
              <p>
                Beslut om stadgeändring skall genom styrelsens försorg genast anmälas för
                registrering. Vid anmälan skall fogas två bestyrkta avskrifter av protokoll över
                beslutet. Beslutet får ej tillämpas innan registrering skett.
              </p>
            </section>

            <section aria-labelledby="kommentar-18">
              <h3 id="kommentar-18">Till § 18</h3>
              <p>
                Angående innebörden av huvudtalsmetod och andelstalsmetod, se kommentaren till § 17.
              </p>
            </section>

            <section aria-labelledby="kommentar-19">
              <h3 id="kommentar-19">Till § 19</h3>
              <p>Angående tillgänglighållande av protokollet, se kommentaren till § 15.</p>
            </section>
          </section>
        </article>
      </PageShell>
    </>
  );
}
