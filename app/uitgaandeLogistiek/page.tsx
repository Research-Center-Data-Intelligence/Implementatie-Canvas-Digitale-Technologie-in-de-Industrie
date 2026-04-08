import HomeButton from "@/components/homeButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

export default function UitgaandeLogistiekPage() {
  const scoAiSteps = [
    {
      titel: "Stap 1: Breng het distributieproces in kaart",
      beschrijving: "Identificeer hoe producten worden verzonden:",
      punten: [
        "Leveringsroutes en transportmiddelen",
        "Klantlocaties en afleverpunten",
        "Doorlooptijden van bestellingen",
      ],
    },
    {
      titel: "Stap 2: Verzamel data uit bronnen",
      beschrijving: "Zorg dat diverse datastromen beschikbaar zijn:",
      punten: [
        "Orderinformatie en klantvraag",
        "Actuele voorraad en verzendmomenten",
        "Verkeerssituaties en externe factoren",
        "Historische transportprestaties",
      ],
    },
    {
      titel: "Stap 3: Analyse met SCO-AI",
      beschrijving: "Gebruik predictive analytics om te voorspellen:",
      punten: [
        "Bepalen van de meest optimale routes",
        "Nauwkeurige levertijden voorspellen",
        "Vraag en distributie op elkaar afstemmen",
        "Verstoringen vroegtijdig signaleren",
      ],
    },
    {
      titel: "Stap 4: Integreer in logistieke processen",
      beschrijving: "Koppel AI aan de operatie voor automatisering:",
      punten: [
        "Automatische aanpassing van transportplanning",
        "Realtime route-optimalisatie",
        "Datagedreven besluitvorming bij verzending",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Optimaliseer de keten op basis van AI-inzichten:",
      punten: [
        "Structureel verlagen van transportkosten",
        "Verhogen van de leverbetrouwbaarheid",
        "Flexibiliteit in distributie vergroten",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof scoAiSteps }) => (
    <div className="px-12 w-full">
      <Carousel opts={{ align: "start" }} className="w-full mx-auto">
        <CarouselContent>
          {data.map((stap, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2 h-full">
                <div className="border-3 rounded-lg border-black p-6 h-full flex flex-col bg-card">
                  <h4 className="font-semibold mb-2">{stap.titel}</h4>
                  <p className="text-sm mb-2">{stap.beschrijving}</p>
                  <ul className="list-disc list-inside ml-2 space-y-1 text-sm">
                    {stap.punten.map((punt, i) => (
                      <li key={i}>{punt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          size="icon-lg"
          variant="ghost"
          className="border-black border-3"
        />
        <CarouselNext
          size="icon-lg"
          variant="ghost"
          className="border-black border-3"
        />
      </Carousel>
    </div>
  );

  return (
    <div>
      <header className="flex items-center p-2 text-bold text-2xl border-b relative">
        <div className="flex-1 flex justify-start">
          <HomeButton />
        </div>
        <h1 className="flex-none text-center">Uitgaande Logistiek</h1>
        <div className="flex-1 "></div>
      </header>

      <main className="m-8">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">
            1. SCO-AI (Predictive Analytics)
          </h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                SCO-AI (Supply Chain Optimization using AI) maakt gebruik van
                predictive analytics om logistieke processen aan te sturen op
                basis van realtime data. In plaats van statische schema's,
                analyseert het systeem continu data uit bronnen zoals
                verkeersinformatie, orderstatussen en externe factoren om een
                dynamisch en zelflerend distributienetwerk te vormen.
              </p>
              <br />
              <p>
                Bij SmartBikes wordt SCO-AI ingezet om de levering van
                stadsfietsen, e-bikes en racefietsen te optimaliseren. Het
                systeem bepaalt automatisch welke routes het meest efficiënt
                zijn en wanneer producten verzonden moeten worden om
                vertragingen te voorkomen.
              </p>
            </div>
            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/uitgaand-1.png"
                alt="SCO-AI Technologie"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom SCO-AI toepassen?
              </h3>
              <p>
                Traditionele uitgaande logistiek is vaak reactief, waardoor
                onverwachte verkeersdrukte of pieken in de vraag direct leiden
                tot vertragingen. Door vooruit te kijken met AI kunnen
                transportmiddelen optimaal worden benut en worden routes
                realtime bijgestuurd. Dit zorgt voor een sneller en
                betrouwbaarder leveringsproces.
              </p>
              <p className="mt-4 font-medium">Voor SmartBikes betekent dit:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Fietsen zijn sneller bij de klant of dealer</li>
                <li>
                  Lagere transportkosten door efficiëntere belading en routes
                </li>
                <li>
                  Hogere leverbetrouwbaarheid, ook tijdens drukke seizoenen
                </li>
                <li>
                  Een adaptieve keten die direct reageert op marktveranderingen
                </li>
              </ul>
            </div>
            <div className="relative flex-1 h-100 mr-8 w-auto">
              <Image
                src="/uitgaand-efficiency.png"
                alt="Voordelen SCO-AI"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe implementeer je SCO-AI?
            </h3>
            <StepCarousel data={scoAiSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.56294/dm2024395"
            >
              Lees meer over Supply Chain Optimization...
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
