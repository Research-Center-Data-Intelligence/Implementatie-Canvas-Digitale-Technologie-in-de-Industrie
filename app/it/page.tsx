"use client";

import HomeButton from "@/components/homeButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowUp } from "lucide-react";
import Image from "@/components/next-image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ItPage() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  // Scroll detectie voor de knop
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Vloeiend naar boven scrollen en URL opschonen
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    if (window.history.pushState) {
      window.history.pushState(null, "", window.location.pathname);
    }
  };

  const aiOpsSteps = [
    {
      titel: "Stap 1: Breng de IT-omgeving in kaart",
      beschrijving: "Identificeer kritische systemen zoals:",
      punten: [
        "ERP-systemen (productie, voorraad)",
        "Servers en cloudomgevingen",
        "Netwerken en databronnen",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via IT-systemen",
      beschrijving: "Verzamel data uit verschillende bronnen zoals:",
      punten: [
        "Server- en applicatielogs",
        "Systeemmetrics (CPU, RAM)",
        "Foutmeldingen en incidentdata",
      ],
    },
    {
      titel: "Stap 3: Analyse met AI",
      beschrijving: "Gebruik AI om:",
      punten: [
        "Incidenten automatisch detecteren",
        "Afwijkingen herkennen",
        "Storingen voorspellen",
        "Root causes achterhalen",
      ],
    },
    {
      titel: "Stap 4: Integreer in IT-processen",
      beschrijving: "Koppel AI aan systemen zodat:",
      punten: [
        "Automatische meldingen ontstaan",
        "Systemen zichzelf herstellen",
        "Resources automatisch schalen",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik data om:",
      punten: [
        "IT-processen te optimaliseren",
        "Storingen te verminderen",
        "Performance te verbeteren",
      ],
    },
  ];

  const dataQualitySteps = [
    {
      titel: "Stap 1: MVP voor datascans",
      beschrijving: "Ontwikkel een eerste AI-tool voor analyse:",
      punten: [
        "Scan ERP, PIM en CMS systemen",
        "Signaleer duplicaten en hiaten",
        "Richt IT-dashboards in",
      ],
    },
    {
      titel: "Stap 2: Systeemintegraties",
      beschrijving: "Verbind interne en externe bronnen:",
      punten: [
        "Koppel ERP, PIM en CMS via API's",
        "Verbind GS1 voor productverificatie",
        "Real-time data-uitwisseling",
      ],
    },
    {
      titel: "Stap 3: Machine Learning Training",
      beschrijving: "Train modellen voor foutdetectie:",
      punten: [
        "Herken historische foutpatronen",
        "Voorspel toekomstige dataproblemen",
        "Automatiseer correctievoorstellen",
      ],
    },
    {
      titel: "Stap 4: NLP Standaardisatie",
      beschrijving: "Gebruik NLP voor tekstuele data:",
      punten: [
        "Interpreteer metadata en tekstvelden",
        "Uniformeer schrijfwijzen automatisch",
        "Minimaliseer handmatige invoerfouten",
      ],
    },
    {
      titel: "Stap 5: Real-time Monitoring",
      beschrijving: "Implementeer feedbackloops:",
      punten: [
        "Monitor live datastromen",
        "Sla handmatige correcties op als leerdata",
        "Zelflerende systeemoptimalisatie",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: any[] }) => (
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
                    {stap.punten.map((punt: string, i: number) => (
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
          src="/Banner IT.png"
          alt="Banner IT"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            IT Operations
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-ops"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI-OPS
            </a>
            <a
              href="#datakwaliteit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Datakwaliteit Monitor
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-16">
        <div id="ai-ops" className="flex flex-col gap-4 pb-8 border-b">
          <h2 className="text-2xl font-bold pb-4">1. AI-OPS</h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is AI-OPS?</h3>
              <p>
                AI-OPS (Artificial Intelligence for IT Operations) is een
                technologie waarbij kunstmatige intelligentie wordt ingezet om
                IT-processen te automatiseren en te optimaliseren. In moderne
                IT-omgevingen worden grote hoeveelheden data gegenereerd in de
                vorm van logs, metrics en systeemmeldingen.
              </p>
              <p className="mt-2">
                Kunstmatige intelligentie speelt hierin een belangrijke rol
                doordat het in staat is om deze grote hoeveelheden data te
                analeren en om te zetten in bruikbare inzichten. Hierdoor worden
                IT-systemen proactief aangestuurd.
              </p>
            </div>

            <div className="relative flex-1 h-80 w-auto">
              <Image
                src="/IT 1.png"
                alt="AI-OPS Visual"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom AI-OPS?</h3>
              <p>
                Het maakt IT-systemen betrouwbaarder en efficiënter.
                Traditionele monitoring is reactief, terwijl AI-OPS incidenten
                sneller opspoort en zelfs voorspelt.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Uitval van ERP-systemen wordt voorkomen</li>
                <li>Productieprocessen vallen niet stil door IT-fouten</li>
                <li>IT-personeel bespaart tijd op repetitieve taken</li>
              </ul>
            </div>
            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/aiops.png"
                alt="AI-OPS Voordelen"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe gebruik je AI-OPS?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>
            <StepCarousel data={aiOpsSteps} />
          </section>
        </div>

        <div id="datakwaliteit" className="flex flex-col gap-4 pb-8">
          <h2 className="text-2xl font-bold pb-4">2. Datakwaliteit Monitor</h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                Een AI-gestuurde Datakwaliteit Monitor bewaakt en optimaliseert
                automatisch de gegevenskwaliteit in ERP-, PIM- en CMS-systemen.
                De technologie combineert <strong>LLM</strong>,{" "}
                <strong>machine learning</strong> en <strong>NLP</strong> om
                grote hoeveelheden systeemdata te analyseren.
              </p>
              <p className="mt-2">
                Het systeem detecteert ontbrekende velden en corrigeert
                inconsistente data automatisch. Door koppelingen met externe
                bronnen zoals <strong>GS1-databases</strong>
                wordt productinformatie geverifieerd en aangevuld, wat de
                integriteit van de bedrijfsinformatie waarborgt.
              </p>
            </div>

            <div className="relative flex-1 h-80 w-auto">
              <Image
                src="/Datakwaliteit Monitor 1.png"
                alt="Datakwaliteit Monitor"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom?</h3>
              <p>
                Onnauwkeurige data heeft direct invloed op systeemintegraties en
                prestaties. Slechte datakwaliteit verhoogt de beheerlast en de
                kans op storingen in koppelingen.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2 font-medium">
                <li>Aanzienlijke winstverhoging en kostenreductie</li>
                <li>Minder storingen in systeemkoppelingen</li>
                <li>Lagere beheerlast voor IT-teams</li>
                <li>Grip op betrouwbare data-uitwisseling</li>
              </ul>
            </div>
            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/Datakwaliteit Monitor 2.png"
                alt="Voordelen Datamonitor"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je dit?
            </h3>
            <p className="text-center w-full pb-2">
              Bekijk het implementatieplan:
            </p>
            <StepCarousel data={dataQualitySteps} />
          </section>
        </div>

        <section className="flex flex-row gap-4 items-center pb-20">
          <h3 className="font-semibold text-lg">Bron:</h3>
          <Link
            href="https://www.youweagency.nl/webwinkelvakdagen/ai-toepassingen"
            className="text-blue-500 hover:underline"
          >
            Lees meer...
          </Link>
        </section>
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
