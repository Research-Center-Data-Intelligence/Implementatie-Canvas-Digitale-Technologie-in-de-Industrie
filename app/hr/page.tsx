import HomeButton from "@/components/homeButton";
import Image from "next/image";

export default function HRPage() {
  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>

        <h1 className="flex-none text-center">Human Resources</h1>

        <div className="flex-1"></div>
      </header>

      <main className="m-8 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold">
            1. Vision AI: visuele medewerkers veiligheid door AI gestuurde
            beeldanalyse
          </h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="font-semibold text-lg">Wat is Vision AI?</h3>
              <p>
                Voorspellende productkost AI gebruikt kunstmatige intelligentie
                en machine learning om continu de kosten van productie te
                berekenen en te voorspellen. In plaats van te vertrouwen op
                historische gemiddelden of vaste aannames, analyseert het
                systeem realtime gegevens zoals materiaalprijzen, arbeidskosten,
                machine-uren en indirecte productiekosten. Het systeem monitort
                de kostencomponenten, evalueert patronen en afwijkingen in de
                kostprijsontwikkeling en kan automatisch acties ondernemen door
                kostprijsramingen aan te passen en productiebes lissingen te
                optimaliseren. Bij SmartBikes kan deze technologie worden
                toegepast om voor verschillende fietstypen, zoals stadsfietsen,
                racefietsen en e-bikes, nauwkeurige kostprijsberekeningen te
                maken. Zo houdt het systeem rekening met fluctuaties in
                materiaalprijzen, arbeid en productiecapaciteit, waardoor het
                bedrijf beter kan sturen op kosten en winstgevendheid.
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1">
              <Image
                src="/HR 1.1.png"
                alt="HR 1.1"
                fill
                className="object-contain"
              />
            </div>
          </section>
          <section className="flex flex-row-reverse items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Waarom Vision AI?</h3>
              <p>
                Het toepassen van voorspellende productkost AI helpt bedrijven
                om beter grip te krijgen op productiekosten en winstgevendheid.
                In veel organisaties worden kostprijsberekeningen vaak handmatig
                uitgevoerd of gebaseerd op historische gemiddelden, wat leidt
                tot onnauwkeurigheden en vertragingen in de besluitvorming. Deze
                traditionele aanpak is meestal reactief, niet continu en
                moeilijk schaalbaar. Voorspellende productkost AI maakt het
                mogelijk om kostprijsberekeningen realtime te actualiseren en te
                objectiveren. Hierdoor krijgen bedrijven nauwkeurige en actuele
                informatie over de productiekosten, kunnen ze strategisch
                beslissen over productlijnen en optimalisatie en sneller
                reageren op marktveranderingen en schommelingen in
                materiaalkosten. Voor SmartBikes betekent dit dat de kosten en
                verkoopprijzen continu geoptimaliseerd worden, waardoor het
                bedrijf efficiënter produceert, winstgevender is en beter kan
                anticiperen op veranderingen in de markt.
              </p>
            </div>
            <div className="relative h-100 w-auto flex-1"></div>
          </section>
          <section className="flex items-start flex-col pb-4">
            <h3 className="text-lg font-semibold">
              Hoe implementeer je Vision AI binnen HR?
            </h3>
            <div className="grid grid-cols-3 gap-6">
              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 1: Breng kostprijscomponenten in kaart
                </h4>
                <p>Identificeer alle relevante kostenfactoren, zoals:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>
                    Materiaalkosten per product (frames, wielen, remmen, etc.)
                  </li>
                  <li>Arbeidskosten per productielijn of taak</li>
                  <li>
                    Indirecte kosten en overhead (energie, onderhoud,
                    machine-uren)
                  </li>
                  <li>Historische data uit ERP- en MES-systemen</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 2: Verzamel en organiseer data
                </h4>
                <p>
                  Zorg dat alle kosteninformatie beschikbaar en gestructureerd
                  is:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Realtime data over grondstoffen en materialen</li>
                  <li>Arbeidstijden en inzet van medewerkers</li>
                  <li>Machine-uren, energieverbruik en onderhoudskosten</li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 3: Analyseer en voorspel met AI
                </h4>
                <p>
                  Gebruik voorspellende algoritmen om patronen en toekomstige
                  kosten te voorspellen:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Detecteer trends en afwijkingen in kosten</li>
                  <li>
                    Voorspel kostprijs voor nieuwe orders of productmodellen
                  </li>
                  <li>
                    Optimaliseer productiebeslissingen op basis van
                    kostprijsinformatie
                  </li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">
                  Stap 4: Integreer in systemen en processen
                </h4>
                <p>
                  Koppel het AI-systeem aan bestaande ERP- en productiesystemen
                  zodat:
                </p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Kostprijsberekeningen automatisch worden bijgewerkt</li>
                  <li>
                    Planners en controllers realtime dashboards krijgen met
                    inzicht in kosten en afwijkingen
                  </li>
                  <li>
                    Beslissingen en interventies datagedreven kunnen worden
                    genomen
                  </li>
                </ul>
              </div>

              <div className="border-3 rounded-lg border-black p-2">
                <h4 className="font-semibold">Stap 5: Continu verbeteren</h4>
                <p>Gebruik de inzichten van het AI-systeem om:</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Kostprijsmodellen verder te verfijnen</li>
                  <li>Productie- en resourceplanning te optimaliseren</li>
                  <li>Winstgevendheid te verhogen en kosten te verlagen</li>
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
