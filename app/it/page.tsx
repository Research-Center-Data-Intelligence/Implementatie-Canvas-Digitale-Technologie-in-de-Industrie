import HomeButton from "@/components/homeButton";
import Image from "next/image";

export default function ItPage() {
  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">IT</h1>

        <div className="flex-1 "></div>
      </header>

      <main className="m-8">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. AI-OPS</h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Wat is AI-OPS?</h3>
              <p>
                Het artikel beschrijft AI-OPS (Artificial Intelligence for IT
                Operations) als een technologie waarbij kunstmatige
                intelligentie wordt ingezet om IT-processen te automatiseren en
                te optimaliseren. Moderne IT-omgevingen, zoals ERP-systemen in
                productiebedrijven, genereren grote hoeveelheden data in de vorm
                van logs, metrics en systeemmeldingen. Door de toenemende
                complexiteit van systemen en infrastructuren wordt het steeds
                moeilijker om deze handmatig te monitoren en beheren. Binnen dit
                kader speelt AI een centrale rol doordat het deze grote
                hoeveelheden data kan analyseren en vertalen naar inzichten.
                Volgens het artikel wordt AI-OPS ingezet voor taken zoals
                incidentdetectie, foutvoorspelling, root cause analysis en het
                uitvoeren van automatische acties . Hierdoor kunnen IT-systemen
                niet alleen gemonitord worden, maar ook proactief worden
                aangestuurd en geoptimaliseerd. In een productiebedrijf met een
                ERP-systeem kan dit bijvoorbeeld betekenen dat AI continu
                logdata analyseert van servers en applicaties om afwijkingen te
                herkennen en potentiële storingen te voorspellen voordat deze
                daadwerkelijk optreden.{" "}
              </p>
            </div>
            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/IT 1.png"
                alt="AI-OPS"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Waarom AI-OPS?</h3>
              <p>
                Het toepassen van AI binnen de IT-afdeling maakt het mogelijk om
                IT-systemen betrouwbaarder, efficiënter en minder afhankelijk
                van handmatige monitoring te maken. Traditionele IT-monitoring
                is vaak reactief en afhankelijk van menselijke interpretatie,
                waardoor problemen pas worden opgelost nadat ze zich hebben
                voorgedaan. AI-OPS biedt hier een oplossing door IT-data continu
                te analyseren en afwijkingen automatisch te detecteren. Hierdoor
                kunnen incidenten sneller worden opgespoord en zelfs worden
                voorspeld voordat ze impact hebben op de operatie . Dit is
                vooral belangrijk in productiebedrijven, waar IT-systemen zoals
                ERP direct gekoppeld zijn aan productie, voorraad en logistiek.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>{" "}
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li> uitval van het ERP-systeem wordt voorkomen</li>{" "}
                <li> productieprocessen niet stilvallen door IT-problemen</li>{" "}
                <li>
                  {" "}
                  IT-personeel minder tijd kwijt is aan repetitieve monitoring
                </li>
              </ul>
              <p>
                Daarnaast zorgt AI ervoor dat root cause analysis sneller en
                nauwkeuriger kan worden uitgevoerd, waardoor problemen
                structureel worden opgelost in plaats van tijdelijk.
              </p>
            </div>
            <div className="relative flex-1 h-100 mr-8 w-auto">
              <Image
                src="/aiops.png"
                alt="IT 2"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI-OPS?
            </h3>

            <div className="grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 1: Breng de IT-omgeving in kaart
                </h4>
                <p>Identificeer kritische systemen zoals:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>ERP-systemen (productie, voorraad, logistiek)</li>
                  <li>Servers en cloudomgevingen</li>
                  <li>Netwerken en databronnen</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 2: Verzamel data via IT-systemen
                </h4>
                <p>Verzamel data uit verschillende bronnen zoals:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Server- en applicatielogs</li>
                  <li>Systeemmetrics (CPU, geheugen, netwerkgebruik)</li>
                  <li>Foutmeldingen en incidentdata</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 3: Analyse met AI</h4>
                <p>Gebruik AI om:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Incidenten automatisch te detecteren</li>
                  <li>Afwijkingen en fouten te herkennen</li>
                  <li>Storingen te voorspellen</li>
                  <li>Root causes te achterhalen</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 4: Integreer in IT-processen
                </h4>
                <p>Koppel AI aan systemen zodat:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Automatische meldingen ontstaan</li>
                  <li>Systemen zichzelf kunnen herstellen</li>
                  <li>Resources automatisch schalen</li>
                  <li>Realtime inzicht beschikbaar is</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 5: Continu verbeteren</h4>
                <p>Gebruik data om:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>IT-processen te optimaliseren</li>
                  <li>Storingen te verminderen</li>
                  <li>Performance te verbeteren</li>
                  <li>Handmatig werk te verminderen</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div>
          <h2 className="text-xl">
            Feature 2: Uitleg over de tweede technologie.
          </h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
        <div>
          <h2 className="text-xl">Feature 3: En de derde beschrijving hier.</h2>
          <h3>Wat?</h3>
          <p></p>
          <h3>Hoe?</h3>
          <p></p>
        </div>
      </main>
    </div>
  );
}
