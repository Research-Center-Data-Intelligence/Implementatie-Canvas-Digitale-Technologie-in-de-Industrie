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

  const steps = [
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

  const StepCarousel = ({ data }: { data: typeof steps }) => (
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
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div id="consistenties" className="flex flex-col gap-4 pb-4">
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
                De kerntechnologieën hiervoor zijn LLM (Large Language Model;
                een model voor het controleren en aanpassen van tekst) en RAG
                (Retrieval-Augmented Generation; een interface die relevante
                documentatie en merkrichtlijnen opslaat en gebruikt).
              </p>
              <p className="mt-2">
                Voor de administratie start dit als een MVP (Minimum Viable
                Product; de eerste basisversie) die suggesties geeft voor de
                juiste toon en taalgebruik. De geavanceerde versie leert van
                feedback en begrijpt subtiele nuances van de ‘brand voice’ om
                real-time suggesties te doen of teksten automatisch aan te
                passen.
              </p>
              <p className="mt-2">
                Het systeem integreert met bronnen zoals het CMS (Content
                Management System), DAM (Digital Asset Management), PIM (Product
                Information Management) en Marketing Automation.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
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
                alle officiële uitingen en kanalen een grote uitdaging, vooral
                bij organisaties met meerdere merken.
              </p>

              <p className="mt-2">
                Inconsistenties in documentatie kunnen de merkidentiteit
                verzwakken en klanten in verwarring brengen.
              </p>

              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>Verhoging van de merkconsistentiescore met 35%</li>
                <li>Verkorting van de contentproductiecyclus met 25%</li>
                <li>Halvering van de foutmarge in gepubliceerde content</li>
              </ul>

              <p className="mt-2">
                Volgens de radargrafiek zorgt dit voor een significante
                winstverhoging en kostenreductie, terwijl het gebruiksgemak voor
                de administratief medewerker zeer hoog is.
              </p>
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

          <section className="flex items-start flex-col pb-20">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe gebruik je dit?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>
            <StepCarousel data={steps} />
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
