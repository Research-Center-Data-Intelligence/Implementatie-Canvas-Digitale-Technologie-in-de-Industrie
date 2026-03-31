import HomeButton from "@/components/homeButton";

export default function Planning() {
  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">Planning</h1>

        <div className="flex-1 ">
          {/* Leeg, zodat 'Inkoop' in het midden blijft */}
        </div>
      </header>

      <main className="m-8 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold">1. AI productie planning</h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="font-semibold text-lg">
                Wat is AI productie planning?
              </h3>
              <p>
                Productieplanningen worden steeds complexer bij moderne
                fabrieken door dynamische omstandigheden, zoals wisselende
                vraag, variabele doorlooptijden en onverwachte verstoringen
                (bijvoorbeeld machine-uitval). Traditionele planningsmethoden
                zijn vaak gebaseerd op vaste regels en statische schema’s,
                waardoor zij onvoldoende in staat zijn om flexibel in te spelen
                op veranderingen.{" "}
              </p>
              <p>
                Binnen deze context introduceert het artikel reinforcement
                learning (RL) als een geavanceerde AI-techniek voor
                productieplanning. Reinforcement learning is een vorm van
                kunstmatige intelligentie waarbij een systeem leert door
                ervaring: het neemt beslissingen, ontvangt feedback over de
                uitkomst en past zijn strategie continu aan om betere resultaten
                te behalen.{" "}
              </p>
              <p>
                In plaats van een statische planning te gebruiken, ontwikkelt AI
                een zelflerend systeem dat continu optimale beslissingen maakt
                op basis van actuele data. Hierdoor kan het systeem automatisch
                bepalen welke orders prioriteit krijgen, hoe machines worden
                ingezet en hoe verstoringen het beste kunnen worden
                opgevangen.{" "}
              </p>
              <p>
                Bij SmartBikes kan dit bijvoorbeeld worden toegepast door een
                AI-systeem te gebruiken dat realtime bepaalt welke fietsen
                geproduceerd moeten worden, rekening houdend met
                orderprioriteit, beschikbare capaciteit en verstoringen in het
                productieproces.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1"></div>
          </section>
          <section className="flex flex-row-reverse items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI productie planning?
              </h3>
              <p>
                Het toepassen van AI binnen de planningsafdeling helpt bedrijven
                om beter om te gaan met de dynamiek en onzekerheid van moderne
                productieprocessen. In traditionele situaties is planning vaak
                een handmatig en star proces, waardoor bedrijven moeite hebben
                om snel te reageren op veranderingen zoals spoedorders,
                vertragingen of machine-uitval.{" "}
              </p>
              <p>
                AI maakt het mogelijk om productieplanning continu aan te passen
                op basis van real-time informatie. Hierdoor worden beslissingen
                niet langer alleen gebaseerd op ervaring of vaste regels, maar
                op data en leerervaringen van het systeem zelf.{" "}
              </p>
              <p>
                Daarnaast zorgt AI ervoor dat planningen efficiënter worden
                ingericht. Wachttijden worden verminderd, machines worden beter
                benut en bottlenecks worden sneller herkend. Dit leidt tot
                kortere doorlooptijden en een betrouwbaarder
                productieproces.{" "}
              </p>
              <p>
                Voor SmartBikes betekent dit dat de planning automatisch wordt
                aangepast wanneer er veranderingen optreden. Hierdoor kan het
                bedrijf flexibeler produceren, leverbetrouwbaarheid verhogen en
                kosten verlagen. Dit resulteert in een efficiënter en stabieler
                productieproces.{" "}
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1"></div>{" "}
          </section>
          <section className="flex items-start flex-col pb-4">
            <h3 className="font-semibold text-lg">
              Hoe gebruik je AI Productie Planning?
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 1: Breng het planningsproces en knelpunten in kaart
                </h4>
                <p>Identificeer waar problemen ontstaan, zoals:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Wachttijden</li>
                  <li>Inefficiënte volgordes</li>
                  <li>Veel herplanning</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 2: Verzamel data via technologie
                </h4>
                <p>Verzamel data over de productieprocessen, zoals:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Orders</li>
                  <li>Doorlooptijden</li>
                  <li>Machinecapaciteit</li>
                  <li>Storingen</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 3: Analyse en optimalisatie met AI
                </h4>
                <p>Gebruik AI om productieschema’s te optimaliseren:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Laat het systeem leren van eerdere beslissingen en
                    prestaties
                  </li>
                  <li>Pas de planning automatisch aan bij veranderingen</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 4: Integreer in het planningssysteem
                </h4>
                <p>Koppel AI aan bestaande planningssoftware zodat:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Realtime updates beschikbaar zijn</li>
                  <li>Planners dashboards en inzicht krijgen</li>
                </ul>
              </div>
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 5: Continu verbeteren</h4>
                <p>
                  Gebruik inzichten uit de data om planning verder te
                  optimaliseren:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Verminder doorlooptijden</li>
                  <li>Verhoog flexibiliteit</li>
                  <li>Verbeter benutting van machines en capaciteit</li>
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
