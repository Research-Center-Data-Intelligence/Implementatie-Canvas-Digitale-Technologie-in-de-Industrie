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

export default function InkomendeLogistiekPage() {
  const logistiekSteps = [
    {
      titel: "Stap 1: Breng het logistieke proces in kaart",
      beschrijving: "Identificeer waar knelpunten ontstaan, zoals:",
      punten: [
        "Onbetrouwbare levertijden",
        "Tekorten of overschotten in voorraad",
        "Slechte afstemming met de productie",
        "Gebrek aan inzicht in leveranciersprestaties",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving: "Verzamel relevante data voor AI-modellen:",
      punten: [
        "Leveranciersdata (levertijden, betrouwbaarheid)",
        "Historische voorraadniveaus",
        "Actuele vraagvoorspellingen",
        "Bestel- en leveringshistorie",
      ],
    },
    {
      titel: "Stap 3: Analyse en voorspelling met AI",
      beschrijving: "Optimaliseer logistieke stromen met machine learning:",
      punten: [
        "Levertijden en mogelijke vertragingen voorspellen",
        "Optimale voorraadniveaus berekenen",
        "Automatische bestelmomenten bepalen",
        "Risico's in de supply chain vroegtijdig detecteren",
      ],
    },
    {
      titel: "Stap 4: Integreer in ERP-systemen",
      beschrijving: "Koppel AI aan logistieke software voor:",
      punten: [
        "Realtime inzicht in inkomende goederenstromen",
        "Automatische alerts bij dreigende voorraadtekorten",
        "Dashboards met aanbevelingen voor planners",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik AI-inzichten voor procesoptimalisatie:",
      punten: [
        "Voorraadstrategieën aanscherpen",
        "Leveranciersselectie verbeteren op basis van data",
        "Verspilling en opslagkosten minimaliseren",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof logistiekSteps }) => (
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
        <h1 className="flex-none text-center">Inkomende Logistiek</h1>
        <div className="flex-1 "></div>
      </header>

      <main className="m-8">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. AI Inkomende Logistiek</h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Wat is AI Inkomende Logistiek?
              </h3>
              <p>
                Inkomende logistiek omvat het ontvangen, opslaan en beheren van
                grondstoffen en componenten. Dit proces wordt steeds uitdagender
                door wisselende levertijden en verstoringen in de wereldwijde
                keten. Waar traditionele methoden vertrouwen op vaste
                bestelpunten, maakt AI gebruik van machine learning om patronen
                te herkennen in grote hoeveelheden data.
              </p>
              <br />
              <p>
                Voor SmartBikes betekent dit een verschuiving naar een
                zelflerend systeem. De AI voorspelt exact wanneer onderdelen
                zoals frames of batterijen zullen arriveren en bepaalt volledig
                automatisch het optimale moment voor nieuwe bestellingen,
                rekening houdend met de actuele vraag en
                leveranciersbetrouwbaarheid.
              </p>
            </div>
            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/logistiek-1.png"
                alt="AI Inkomende Logistiek Concept"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI in de logistiek?
              </h3>
              <p>
                Het toepassen van AI helpt bedrijven om proactief om te gaan met
                onzekerheden. In plaats van te reageren op een leeg magazijn,
                voorspelt het systeem toekomstige tekorten en past het de
                logistieke stroom daarop aan. Dit resulteert in een stabielere
                supply chain en nauwkeurigere planningen.
              </p>
              <p className="mt-4 font-medium">Voor SmartBikes levert dit op:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>
                  Onderdelen zijn altijd op tijd beschikbaar voor productie
                </li>
                <li>Lagere voorraadkosten door minder 'dood kapitaal'</li>
                <li>
                  Minder productiestilstand door tijdige signalering van
                  risico's
                </li>
                <li>Hogere leverbetrouwbaarheid naar de eindklant</li>
              </ul>
            </div>
            <div className="relative flex-1 h-100 mr-8 w-auto">
              <Image
                src="/logistiek-efficiency.png"
                alt="Voordelen van AI Logistiek"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI inkomende logistiek?
            </h3>
            <StepCarousel data={logistiekSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.63332/joph.v5i12.3860 "
            >
              Lees meer...
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
