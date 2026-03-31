import HomeButton from "@/components/homeButton";
import Image from "next/image";

export default function ProductionPage() {
  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>
        <h1 className="flex-none text-center">Productie</h1>
        <div className="flex-1 "></div>
      </header>

      <main className="m-8 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. Advanced manufacturing</h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1 ">
              <h3 className="font-semibold text-lg">
                Wat is Advanced manufacturing?
              </h3>
              <p>
                Het artikel beschrijft advanced manufacturing als een moderne
                vorm van productie waarin geavanceerde technologieën,
                automatisering en data-analyse centraal staan. Productiesystemen
                worden steeds complexer door het gebruik van sensoren, robots en
                digitale systemen, waardoor traditionele regel- en
                modelgebaseerde methoden vaak tekortschieten. In deze context
                wordt advanced manufacturing gezien als een geïntegreerd systeem
                waarin fysieke processen en digitale informatie continu met
                elkaar verbonden zijn om flexibiliteit, precisie en efficiëntie
                te vergroten. Binnen dit kader laat het artikel zien dat
                kunstmatige intelligentie (AI) een sleutelrol speelt. AI wordt
                gebruikt om grote hoeveelheden productiegegevens te analyseren,
                processen in real time te monitoren, productkwaliteit te bewaken
                en onderhoud te voorspellen. Hierdoor kunnen productiesystemen
                zich aanpassen aan veranderende omstandigheden en zelflerend
                worden. AI fungeert daarmee niet als losse technologie, maar als
                een essentieel hulpmiddel om de complexiteit van moderne
                productiesystemen beheersbaar te maken. Bij SmartBikes kan dit
                bijvoorbeeld worden toegepast door sensoren en systemen te
                gebruiken die continu data verzamelen over de assemblagelijn. AI
                analyseert deze gegevens om inzicht te krijgen in
                productiesnelheid, machineprestaties en verstoringen in het
                proces.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/Productie.png"
                alt="Advanced manufacturing"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1 ">
              <h3 className="font-semibold text-lg">
                Waarom Advanced manufacturing?
              </h3>
              <p>
                Het toepassen van AI binnen de productieafdeling stelt bedrijven
                in staat om beter om te gaan met de toenemende complexiteit van
                moderne productieprocessen. Doordat productiesystemen bestaan
                uit veel onderling verbonden machines en processen, is het voor
                bedrijven lastig om zonder ondersteuning volledig inzicht te
                krijgen in wat er op de werkvloer gebeurt. AI biedt hier een
                oplossing door grote hoeveelheden data te analyseren en
                verborgen patronen zichtbaar te maken. Hierdoor kunnen bedrijven
                productieprocessen niet alleen monitoren, maar ook actief
                verbeteren. AI maakt het mogelijk om knelpunten in de
                productielijn te identificeren, zoals wachttijden of inefficiënt
                gebruik van machines, en om deze gericht aan te pakken.
                Daarnaast kunnen bedrijven met behulp van AI voorspellen wanneer
                storingen of vertragingen zullen optreden, waardoor zij
                proactief kunnen ingrijpen in plaats van reactief. Voor
                SmartBikes betekent dit bijvoorbeeld dat de assemblagelijn
                efficiënter kan worden ingericht, dat stilstand van machines
                wordt verminderd en dat beter kan worden ingespeeld op
                veranderingen in de vraag. Hierdoor wordt het productieproces
                betrouwbaarder en neemt de algehele efficiëntie toe.
              </p>
            </div>
            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/Productie 2.png"
                alt="Advanced manufacturing"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je Advanced manufacturing?
            </h3>
            <div className=" grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 1: Breng het productieproces en knelpunten in kaart
                </h4>
                <p>
                  Identificeer waar inefficiënties of verstoringen optreden,
                  zoals:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li> Wachttijden tussen werkstations </li>{" "}
                  <li> Overbelasting van bepaalde machines (bottlenecks) </li>{" "}
                  <li> Vertragingen in assemblage </li>{" "}
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 2: Verzamel data via technologie
                </h4>
                <p>
                  Installeer sensoren en gebruik systemen om data te verzamelen
                  over:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li> Productietijden per werkstation </li>
                  <li> Machineprestaties en stilstand </li>
                  <li> Doorlooptijden van producten </li>
                  <li> Output van de productielijn </li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 3: Analyse met AI</h4>{" "}
                <p> Gebruik AI-software om deze data te analyseren en:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li> Bottlenecks in de productielijn te identificeren </li>
                  <li> Productieprestaties te optimaliseren </li>
                  <li> Storingen en onderhoud te voorspellen </li>
                  <li> Productieplanning te verbeteren </li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 4: Integreer in het productieproces
                </h4>
                <p>Koppel het AI-systeem aan de productieomgeving zodat:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li> Productieplanning automatisch wordt aangepast </li>
                  <li> Machines efficiënter worden aangestuurd </li>
                  <li> Storingen sneller worden herkend en opgelost </li>
                  <li> Operators realtime inzicht krijgen in de productie </li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 5: Continu verbeteren</h4>
                <p>Gebruik de verzamelde data en inzichten om:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li> Productieprocessen structureel te optimaliseren </li>
                  <li> Doorlooptijden te verkorten </li>
                  <li> Stilstand te verminderen </li>
                  <li> Efficiëntie en flexibiliteit te verhogen </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">
            2. AI predictive maintenance met IoT sensoren
          </h2>
          <section className="flex flex-row items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Wat is AI predictive maintenance?
              </h3>
              <p>
                Binnen de onderhoudsafdeling kan kunstmatige intelligentie (AI)
                worden ingezet als een slim onderhoudssysteem dat storingen
                voorspelt voordat ze optreden. Dit wordt ook wel predictive
                maintenance genoemd.{" "}
              </p>
              <p>De techniek maakt gebruik van: </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  sensoren (IoT) die continu data verzamelen van machines{" "}
                </li>
                <li>software die deze data analyseert</li>
                <li>
                  AI-modellen die patronen herkennen en voorspellingen doen
                </li>
              </ul>
              <p>Bij een productiebedrijf kan dit systeem bijvoorbeeld:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  meten of een machine afwijkend gedrag vertoont (zoals
                  temperatuur of trillingen)
                </li>
                <li>herkennen wanneer een onderdeel begint te slijten </li>
                <li>voorspellen wanneer onderhoud nodig is </li>
              </ul>
              <p>Daarnaast kan het systeem:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li> fouten van operators signaleren </li>
                <li> alarmen omzetten in duidelijke storingen </li>
              </ul>
              <p>
                Hierdoor ontstaat een systeem dat niet alleen controleert, maar
                ook vooruitkijkt en problemen voorkomt.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/Production 2.1.png"
                alt="iets"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI predictive maintenance?
              </h3>
              <p>
                Het toepassen van deze technologie binnen onderhoud biedt
                duidelijke voordelen voor productiebedrijven.
              </p>
              <p>
                Allereerst zorgt het voor minder onverwachte storingen. In
                plaats van dat een machine ineens uitvalt, wordt een probleem
                vroegtijdig herkend en kan er op tijd worden ingegrepen.
              </p>
              <p>Voor een productiebedrijf betekent dit:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>minder stilstand van machines</li>
                <li>minder verstoringen in de planning</li>
                <li>hogere leverbetrouwbaarheid</li>
              </ul>
              <p>Daarnaast leidt het tot lagere kosten:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>minder dure spoedreparaties</li>
                <li>minder verspilling van onderdelen</li>
                <li>efficiënter onderhoud</li>
              </ul>
              <p>
                Ook zorgt het voor een langere levensduur van machines, omdat
                slijtage op tijd wordt aangepakt.
              </p>
              <p>
                Verder helpt het systeem bedrijven om datagedreven te werken:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>inzicht in waar storingen ontstaan</li>
                <li>betere onderhoudsplanning</li>
                <li>continue verbetering van processen</li>
              </ul>
              <p>Tot slot draagt het bij aan:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>betere productkwaliteit</li>
                <li>minder fouten in productie</li>
                <li>hogere klanttevredenheid</li>
              </ul>
            </div>
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/Production 2.2.png"
                alt="Production 2.2"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-col items-start">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI predictive maintenance?
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 1: Bepaal kritische onderhoudsmomenten
                </h4>
                <p>
                  Identificeer waar storingen het meeste impact hebben, zoals:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>belangrijke machines in de productielijn</li>
                  <li>onderdelen die vaak kapot gaan</li>
                  <li>processen waar stilstand duur is</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 2: Verzamel data via sensoren
                </h4>
                <p>
                  Plaats sensoren op deze punten om data te verzamelen over:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>temperatuur</li>
                  <li>trillingen</li>
                  <li>gebruik van machines</li>
                  <li>prestaties van onderdelen</li>
                </ul>
                <p>Deze data wordt automatisch opgeslagen en doorgestuurd.</p>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 3: Analyse met AI</h4>
                <p>Gebruik software om de data te analyseren en:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>afwijkingen te herkennen</li>
                  <li>patronen in storingen te ontdekken</li>
                  <li>
                    te voorspellen wanneer een machine onderhoud nodig heeft
                  </li>
                </ul>
                <p>Het systeem kan ook:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>alarmen vertalen naar concrete storingen</li>
                  <li>risico’s inschatten</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 4: Integreer in het onderhoudsproces
                </h4>
                <p>Koppel het systeem aan de dagelijkse operatie zodat:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>storingen vroeg worden gesignaleerd</li>
                  <li>onderhoud op tijd wordt ingepland</li>
                  <li>operators meldingen krijgen bij afwijkingen</li>
                </ul>
                <p>Hierdoor kan sneller worden ingegrepen.</p>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 5: Continu verbeteren</h4>
                <p>Gebruik de verzamelde data om:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>onderhoudsplannen te verbeteren</li>
                  <li>oorzaken van storingen te achterhalen</li>
                  <li>processen structureel te optimaliseren</li>
                </ul>
                <p>
                  Het systeem wordt hierdoor steeds slimmer en nauwkeuriger.
                </p>
              </div>
            </div>
          </section>
        </div>
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold">3. Productie costing </h2>
          <section className="flex flex-row items-start pb-4">
            <div className="wrap-break-word flex-1">
              <p>
                Voorspellende productkost AI gebruikt kunstmatige intelligentie
                en machine learning om dynamisch en nauwkeurig productiekosten
                te voorspellen. In plaats van vaste aannames en historische
                gemiddelden te gebruiken, analyseert het systeem realtime data
                zoals materiaalprijzen, arbeidskosten en machineuren. Het leert
                continu bij en past kostprijsramingen aan naarmate er nieuwe
                gegevens beschikbaar komen.{" "}
              </p>
              <p>
                Bij SmartBikes kan deze techniek worden toegepast om
                bijvoorbeeld de kosten van stadsfietsen, elektrische fietsen en
                racefietsen nauwkeuriger te berekenen, rekening houdend met
                fluctuaties in materiaalprijzen, arbeid en
                productiecapaciteit.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1"></div>
          </section>
          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <p>
                Bedrijven profiteren van voorspellende productkost AI doordat
                het systeem realtime kostprijsberekeningen mogelijk maakt.
                Veranderingen in grondstofprijzen of arbeidskosten worden direct
                meegenomen in de voorspellingen, waardoor verkoopprijzen
                nauwkeuriger en competitiever kunnen worden vastgesteld. Dit
                verhoogt de winstaccuracy en ondersteunt strategische
                besluitvorming: management krijgt beter inzicht in de kosten per
                product en kan bepalen welke modellen het meest winstgevend zijn
                en waar optimalisatie mogelijk is. Bovendien maakt de toepassing
                het productieproces efficiënter en flexibeler; SmartBikes kan
                sneller reageren op marktveranderingen en resources optimaal
                inzetten. Voor SmartBikes betekent dit dat kosten en
                verkoopprijzen continu geoptimaliseerd kunnen worden, waardoor
                het bedrijf efficiënter en winstgevender produceert.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1"></div>
          </section>
          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold text-lg">
              Hoe gebruik je productie costing AI?
            </h3>

            <p className="max-w-1/2 pb-4">
              Voorspellende productkost AI implementeren verloopt stapsgewijs en
              kan voor een productiebedrijf als SmartBikes als volgt worden
              aangepakt:
            </p>

            <div className="grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 1: Data identificeren en verzamelen
                </h4>
                <p>
                  Verzamel relevante gegevens voor productkostberekening, zoals:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Materiaalkosten (frames, wielen, remmen, etc.)</li>
                  <li>Arbeidskosten per productielijn of taak</li>
                  <li>
                    Indirecte kosten en overhead (energie, onderhoud,
                    machine-uren)
                  </li>
                  <li>Integratie van data uit ERP- en MES-systemen</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 2: Selecteren en trainen van AI-modellen
                </h4>
                <p>
                  Gebruik AI om toekomstige productiekosten nauwkeurig te
                  voorspellen:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Voorspellende algoritmen zoals regressie, random forests of
                    neurale netwerken
                  </li>
                  <li>
                    Train modellen op historische gegevens om nauwkeurige
                    voorspellingen te maken
                  </li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 3: Integreren in bestaande systemen
                </h4>
                <p>Koppel AI-modellen aan ERP zodat:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Data realtime wordt bijgewerkt</li>
                  <li>
                    Kostprijsberekeningen automatisch geüpdatet worden bij
                    nieuwe orders of prijsveranderingen
                  </li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 4: Dashboards en rapportages ontwikkelen
                </h4>
                <p>Visualiseer en ondersteun besluitvorming met:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Voorspelde kosten, werkelijke kosten en afwijkingen</li>
                  <li>
                    Informatie voor planners en controllers om snel beslissingen
                    te nemen
                  </li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 5: Continue evaluatie en optimalisatie
                </h4>
                <p>Monitor en verbeter AI-modellen continu zodat:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Modellen aangepast worden op basis van nieuwe data en
                    veranderende productieprocessen
                  </li>
                  <li>Nauwkeurigheid van kostprijsvoorspellingen verbetert</li>
                  <li>Productieplanning geoptimaliseerd wordt</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
