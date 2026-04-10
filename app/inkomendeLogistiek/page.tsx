"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function InkomendeLogistiekPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

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

  const nmtSteps = [
    {
      titel: "Stap 1: Analyseer inkomende logistieke processen",
      beschrijving: "Breng in kaart welke informatie wordt verwerkt, zoals:",
      punten: [
        "Leveringsdocumenten en pakbonnen",
        "Product- en materiaalspecificaties",
        "Communicatie met leveranciers",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer documentatie",
      beschrijving: "Zorg dat relevante informatie beschikbaar is, zoals:",
      punten: [
        "Leveranciersdocumenten",
        "Transport- en douanedocumentatie",
        "Productinformatie en specificaties",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI (NMT)",
      beschrijving: "Gebruik NMT om deze informatie te vertalen en:",
      punten: [
        "Documenten automatisch toegankelijk te maken",
        "Leveringsinformatie snel te begrijpen",
        "Communicatie met leveranciers te ondersteunen",
        "Fouten bij verwerking te verminderen",
      ],
    },
    {
      titel: "Stap 4: Integratie in logistieke systemen",
      beschrijving: "Koppel het systeem aan logistieke processen zodat:",
      punten: [
        "Vertalingen automatisch plaatsvinden bij ontvangst",
        "Documenten centraal worden opgeslagen",
        "Medewerkers direct inzicht krijgen in leveringen",
        "Verwerking van goederen efficiënter verloopt",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de inzichten om:",
      punten: [
        "Logistieke processen te optimaliseren",
        "Fouten verder te verminderen",
        "Communicatie te verbeteren",
        "Vertalingen nauwkeuriger te maken",
      ],
    },
  ];

  const StepCarousel = ({
    data,
  }: {
    data: typeof logistiekSteps | typeof nmtSteps;
  }) => (
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
      <header className="relative flex items-center justify-center border-b overflow-hidden h-80">
        <Image
          src="/Banner inkomende logistiek.png"
          alt="banner inkomende logistiek"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Inkomende Logistiek
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-inkomende-logistiek"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI Inkomende Logistiek
            </a>
            <a
              href="#nmt-logistiek"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Neural Machine Translation (NMT)
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="ai-inkomende-logistiek" className="text-2xl font-bold pb-4">
            1. AI Inkomende Logistiek
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
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
            <div className="wrap-break-words flex-1">
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

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/logistiek-efficiency.png"
                alt="Voordelen van AI Logistiek"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe gebruik je AI Inkomende Logistiek?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={logistiekSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.63332/joph.v5i12.3860"
            >
              Lees meer...
            </Link>
          </section>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="nmt-logistiek" className="text-2xl font-bold pb-4">
            2. Neural Machine Translation (NMT)
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                Neural Machine Translation (NMT) is een AI-techniek die wordt
                gebruikt om teksten en communicatie automatisch te vertalen naar
                verschillende talen. Binnen de inkomende logistiek wordt deze
                techniek ingezet om communicatie met internationale leveranciers
                en logistieke documentatie toegankelijk te maken.
              </p>
              <p>
                In een globale supply chain werken productiebedrijven vaak samen
                met leveranciers uit verschillende landen. Hierbij komen
                documenten zoals pakbonnen, leveringsspecificaties en
                transportdocumenten in verschillende talen voor. NMT maakt het
                mogelijk om deze informatie automatisch te vertalen, zodat deze
                direct begrijpelijk is voor medewerkers binnen het bedrijf.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden toegepast
                bij het ontvangen van onderdelen van buitenlandse leveranciers.
                Documenten zoals leveringsbonnen, productbeschrijvingen en
                specificaties worden automatisch vertaald, zodat
                magazijnmedewerkers en planners direct inzicht hebben in de
                inhoud en verwerking van de goederen.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Het toepassen van NMT binnen de inkomende logistiek maakt het
                mogelijk om efficiënter te werken en fouten te verminderen.
                Taalbarrières kunnen leiden tot misverstanden bij het verwerken
                van leveringen, wat kan resulteren in vertragingen of fouten in
                het magazijn.
              </p>
              <p>
                Met AI-gedreven vertaling kunnen bedrijven deze problemen
                voorkomen door informatie direct beschikbaar te maken in de
                juiste taal. Hierdoor wordt het verwerken van inkomende goederen
                sneller en betrouwbaarder.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>leveringen sneller verwerkt kunnen worden</li>
                <li>fouten bij ontvangst en registratie worden verminderd</li>
                <li>
                  communicatie met internationale leveranciers eenvoudiger wordt
                </li>
              </ul>
              <p>
                Daarnaast zorgt deze techniek ervoor dat medewerkers minder
                afhankelijk zijn van specifieke taalvaardigheden, wat de
                flexibiliteit binnen het logistieke proces vergroot.
              </p>
              <p>
                Wel is het belangrijk om rekening te houden met beperkingen van
                AI, zoals het minder goed begrijpen van specifieke technische
                termen. Daarom blijft controle bij belangrijke documenten
                noodzakelijk.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto"></div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je NMT binnen inkomende logistiek?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={nmtSteps} />
          </section>
          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              href=" https://egarp.lt/index.php/aghel/article/view/105/108"
              className="text-blue-500 hover:underline"
            >
              Lees meer...
            </Link>
          </section>
        </div>
      </main>

      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed top-8 right-1/2 cursor-pointer z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center border-2 border-blue-400"
          aria-label="Terug naar boven"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
