"use client";

import HomeButton from "@/components/homeButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "@/components/next-image";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function AdministrationPage() {
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
    return () => window.removeEventListener("scroll", handleScroll);
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

  const stepsConsistency = [
    {
      titel: "Stap 1: Ontwikkel een MVP",
      beschrijving:
        "Ontwikkel een MVP (Minimum Viable Product) tool die administratieve teksten scant en controleert op basis van vooraf gedefinieerde merkrichtlijnen.",
      punten: [],
    },
    {
      titel: "Stap 2: Gebruik RAG",
      beschrijving:
        "Gebruik RAG (Retrieval-Augmented Generation) om alle officiële stijlgidsen en branding-documentatie direct toegankelijk te maken voor de AI.",
      punten: [],
    },
    {
      titel: "Stap 3: Integreer systemen",
      beschrijving:
        "Realiseer technische integraties met systemen zoals het CMS en DAM om te waarborgen dat alle uitgaande administratieve content automatisch wordt gecontroleerd.",
      punten: [],
    },
    {
      titel: "Stap 4: Real-time AI",
      beschrijving:
        "Implementeer geavanceerde AI-functies die real-time suggesties doen tijdens het schrijfproces, zodat alle documenten vóór verzending ‘on-brand’ zijn.",
      punten: [],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving:
        "Analyseer feedback en nuances van de ‘brand voice’ om het systeem continu te verbeteren, met focus op maximale winstverhoging.",
      punten: [],
    },
  ];

  const stepsDataQuality = [
    {
      titel: "Stap 1: MVP Analyse",
      beschrijving:
        "Start met een MVP dat bestaande administratieve data in ERP- en PIM-systemen analyseert en ontbrekende of foutieve velden signaleert.",
      punten: [],
    },
    {
      titel: "Stap 2: Externe Integratie",
      beschrijving:
        "Integreer externe databronnen, zoals GS1 of leveranciersdatabases, zodat ontbrekende gegevens automatisch kunnen worden aangevuld.",
      punten: [],
    },
    {
      titel: "Stap 3: Machine Learning",
      beschrijving:
        "Implementeer machine learning-modellen die patronen herkennen in foutieve invoer en voorspellen waar correcties nodig zijn.",
      punten: [],
    },
    {
      titel: "Stap 4: NLP Implementatie",
      beschrijving:
        "Voeg NLP-functionaliteiten toe om tekstvelden, factuurbeschrijvingen en productinformatie slim te interpreteren en standaardiseren.",
      punten: [],
    },
    {
      titel: "Stap 5: Real-time Monitoring",
      beschrijving:
        "Breid uit naar real-time monitoring, zodat administratieve fouten direct worden gecorrigeerd voordat ze doorwerken in rapportages.",
      punten: [],
    },
  ];

  const StepCarousel = ({ data }: { data: any[] }) => {
    const [api, setApi] = useState<any>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!api) return;

      setCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());

      const onSelect = () => {
        setCurrent(api.selectedScrollSnap());
      };

      api.on("select", onSelect);

      return () => {
        api.off("select", onSelect); // 🔥 BELANGRIJK (cleanup!)
      };
    }, [api]);

    return (
      <div className="px-12 w-full">
        <Carousel
          setApi={setApi}
          opts={{ align: "start" }}
          className="w-full mx-auto"
        >
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

          {/* DOTS */}
          <div className="flex justify-center gap-2 mt-4">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  current === index ? "bg-black scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

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
  };

  return (
    <div>
      <header className="relative flex items-center justify-center border-b overflow-hidden h-80">
        <Image
          src="/Banner administratie.png"
          alt="Banner Administratie"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Administratie
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#consistenties"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. Consistenties
            </a>
            <a
              href="#datakwaliteit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Datakwaliteit Assistent
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-12">
        <div
          id="consistenties"
          className="flex flex-col gap-4 pb-4 border-b border-gray-200"
        >
          <h2 className="text-2xl font-bold pb-4">1. Consistenties</h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                De techniek betreft een AI-systeem voor contentgeneratie dat
                administratieve documenten en communicatie controleert op
                naleving van merkrichtlijnen.
              </p>
              <p className="mt-2">
                Dit systeem werkt als een geavanceerde controletool die niet
                alleen let op spelling en grammatica, maar ook op stijl, toon,
                boodschap en opmaak.
              </p>
              <p className="mt-2">
                De kerntechnologieën hiervoor zijn LLM (Large Language Model) en
                RAG (Retrieval-Augmented Generation; een interface die relevante
                documentatie en merkrichtlijnen opslaat en gebruikt).
              </p>
            </div>

            <div className="relative flex-1 h-80 w-auto">
              <Image
                src="/admin-1.png"
                alt="AI Content Controle"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom?</h3>
              <p>
                Binnen de administratie is het behouden van merkconsistentie in
                alle officiële uitingen een grote uitdaging. Inconsistenties
                kunnen de merkidentiteit verzwakken en klanten in verwarring
                brengen.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Verhoging van de merkconsistentiescore met 35%</li>
                <li>Verkorting van de contentproductiecyclus met 25%</li>
                <li>Halvering van de foutmarge in gepubliceerde content</li>
              </ul>
            </div>

            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/admin-2.png"
                alt="Voordelen"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col pb-10">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe gebruik je dit?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>
            <StepCarousel data={stepsConsistency} />
          </section>
          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              href="https://www.youweagency.nl/webwinkelvakdagen/ai-toepassingen"
              className="text-blue-500 hover:underline"
            >
              Lees meer...
            </Link>
          </section>
        </div>

        <div id="datakwaliteit" className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">
            2. AI-gestuurde Datakwaliteit Assistent
          </h2>

          <section className="flex flex-row items-start pb-8">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Wat is de techniek?</h3>
              <p>
                Een AI-gestuurde Datakwaliteit Assistent wordt ingezet om
                administratieve gegevens automatisch te controleren, aanvullen
                en corrigeren binnen ERP- en PIM-platformen.
              </p>
              <p className="mt-2">
                De technologie gebruikt{" "}
                <strong>LLM (Large Language Model)</strong> om tekstuele
                gegevens zoals productomschrijvingen en factuurregels te
                interpreteren. Daarnaast detecteren{" "}
                <strong>machine learning-algoritmen</strong> inconsistenties en
                ontbrekende velden.
              </p>
              <p className="mt-2">
                Door koppelingen met externe databronnen, zoals{" "}
                <strong>GS1-databases</strong>, kan het systeem informatie
                automatisch aanvullen, waardoor de betrouwbaarheid van de
                administratie stijgt.
              </p>
            </div>

            <div className="relative flex-1 h-80 w-auto">
              <Image
                src="/admin-1.png"
                alt="Datakwaliteit Techniek"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="font-semibold text-lg">Waarom?</h3>
              <p>
                Administratieve afdelingen hebben vaak te maken met incomplete
                of foutieve data, wat leidt tot vertragingen en fouten in
                facturatie.
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Minder administratieve fouten en correctiewerk</li>
                <li>Snellere verwerking van documenten</li>
                <li>Hogere operationele efficiëntie</li>
                <li>Sterke balans tussen kostenreductie en winstverhoging</li>
              </ul>
            </div>

            <div className="flex-1 relative h-80 w-auto">
              <Image
                src="/admin-2.png"
                alt="Voordelen Datakwaliteit"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col pb-10">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je dit?
            </h3>
            <p className="text-center w-full pb-2">
              Bekijk het implementatieplan:
            </p>
            <StepCarousel data={stepsDataQuality} />
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
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
