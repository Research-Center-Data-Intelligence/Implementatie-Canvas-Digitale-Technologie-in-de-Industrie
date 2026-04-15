"use client";

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
import { useEffect, useState } from "react";

export default function Inkoop() {
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

  const aiInkoopSteps = [
    {
      titel: "Stap 1: Breng het inkoopproces in kaart",
      beschrijving: "Identificeer waar knelpunten ontstaan, zoals:",
      punten: [
        "Onvoorspelbare prijsstijgingen",
        "Onbetrouwbare leveranciers",
        "Voorraadtekorten of overschotten",
        "Slechte timing van inkoopmomenten",
      ],
    },
    {
      titel: "Stap 2: Verzamel data via technologie",
      beschrijving: "Verzamel relevante data voor AI-modellen:",
      punten: [
        "Historische inkoopprijzen",
        "Leveranciersprestaties (levertijd, kwaliteit)",
        "Marktdata (grondstofprijzen, koersen)",
        "Vraagvoorspellingen uit sales/productie",
      ],
    },
    {
      titel: "Stap 3: Analyse en voorspelling met AI",
      beschrijving: "Optimaliseer beslissingen met machine learning:",
      punten: [
        "Prijsontwikkelingen voorspellen (time-series)",
        "Leveranciers classificeren en clusteren",
        "Inkoopvolumes optimaliseren",
        "Continu leren van nieuwe marktdata",
      ],
    },
    {
      titel: "Stap 4: Integreer in ERP-systemen",
      beschrijving: "Koppel AI aan bestaande inkoopsoftware voor:",
      punten: [
        "Realtime prijsupdates",
        "Automatische alerts bij prijsstijgingen",
        "Inzichtelijke dashboards voor inkopers",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren en bijsturen",
      beschrijving: "Gebruik AI-inzichten voor strategische groei:",
      punten: [
        "Contractstrategieën optimaliseren",
        "Risico's in de supply chain beperken",
        "Betere samenwerking met Finance & Productie",
      ],
    },
  ];

  const nmtSteps = [
    {
      titel: "Stap 1: Analyseer het inkoopproces",
      beschrijving: "Breng in kaart welke informatie wordt gebruikt, zoals:",
      punten: [
        "Offertes en prijsafspraken",
        "Contracten en leveringsvoorwaarden",
        "Productspecificaties en documentatie",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer documentatie",
      beschrijving: "Zorg dat relevante informatie beschikbaar is, zoals:",
      punten: [
        "Leveranciersdocumenten",
        "Inkoopcontracten",
        "Product- en materiaalspecificaties",
      ],
    },
    {
      titel: "Stap 3: Implementatie van AI (NMT)",
      beschrijving: "Gebruik NMT om deze informatie te vertalen en:",
      punten: [
        "Offertes automatisch te vertalen",
        "Contracten begrijpelijk te maken",
        "Communicatie met leveranciers te ondersteunen",
        "Inkoopbeslissingen te versnellen",
      ],
    },
    {
      titel: "Stap 4: Integratie in inkoopsystemen",
      beschrijving: "Koppel het systeem aan inkoopprocessen zodat:",
      punten: [
        "Vertalingen automatisch plaatsvinden",
        "Documenten centraal worden beheerd",
        "Inkopers direct inzicht krijgen in informatie",
        "Beslissingen efficiënter worden genomen",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Gebruik de inzichten om:",
      punten: [
        "Inkoopprocessen te optimaliseren",
        "Leverancierscommunicatie te verbeteren",
        "Fouten te verminderen",
        "Vertalingen nauwkeuriger te maken",
      ],
    },
  ];

  const StepCarousel = ({
    data,
  }: {
    data: typeof aiInkoopSteps | typeof nmtSteps;
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
          src="/Banner inkoop.png"
          alt="banner inkoop"
          fill
          priority
          className="object-cover brightness-50"
        />

        <div className="relative z-10 flex flex-col items-center gap-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wider text-center">
            Inkoop
          </h1>

          <div className="flex flex-wrap justify-center gap-4 px-4">
            <a
              href="#ai-inkoop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              1. AI-gestuurde inkoopplanning
            </a>
            <a
              href="#nmt-inkoop"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-lg border border-blue-400"
            >
              2. Neural Machine Translation (NMT)
            </a>
          </div>
        </div>
      </header>

      <main className="m-16 flex flex-col gap-4">
        <div className="flex flex-col gap-4 pb-4">
          <h2 id="ai-inkoop" className="text-2xl font-bold pb-4">
            1. AI-gestuurde inkoopplanning
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Wat is AI-gestuurde inkoopplanning?
              </h3>
              <p>
                Inkoopprocessen worden steeds complexer door fluctuerende
                grondstofprijzen, geopolitieke invloeden en een onvoorspelbare
                vraag. Waar traditionele inkoop vaak reactief is en leunt op
                historische prijzen, maakt AI een voorspellende aanpak mogelijk.
                Door gebruik te maken van Machine Learning (ML) kunnen grote
                hoeveelheden data, zoals leveranciersprijzen en
                marktschommelingen, worden geanalyseerd om patronen te
                herkennen.
              </p>
              <br />
              <p>
                Bij SmartBikes kan dit bijvoorbeeld betekenen dat het AI-systeem
                voorspelt wanneer fietscomponenten zoals staal of elektronica
                het beste ingekocht kunnen worden. Het systeem houdt hierbij
                rekening met prijsontwikkelingen, levertijden en de
                betrouwbaarheid van leveranciers, waardoor een zelflerend
                ecosysteem ontstaat.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/inkoop-1.png"
                alt="AI Inkoop Concept"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI-gestuurde inkoopplanning?
              </h3>
              <p>
                Het toepassen van AI helpt bedrijven proactief te handelen in
                plaats van achteraf prijsstijgingen te analyseren. Het stelt
                inkopers in staat om strategischer te onderhandelen en risico's
                in de supply chain tijdig te signaleren. Door marktdata te
                combineren met interne productiegegevens, worden
                kostvoorspellingen veel realistischer.
              </p>
              <p className="mt-4 font-medium">
                Voor SmartBikes resulteert dit in:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Lagere inkoopkosten door optimale timing</li>
                <li>Hogere leverbetrouwbaarheid van onderdelen</li>
                <li>
                  Betere marges door minder afhankelijkheid van
                  prijsschommelingen
                </li>
                <li>Een strategisch sterkere positie in de markt</li>
              </ul>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/inkoop-strategie.png"
                alt="Voordelen AI Inkoop"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe gebruik je AI-gestuurde inkoopplanning?
            </h3>
            <p className="max-w-1/2 pb-4">
              De implementatie van AI binnen inkoop verloopt stapsgewijs en
              begint met het in kaart brengen van knelpunten en relevante data.
              Voor SmartBikes kan dit als volgt worden aangepakt:
            </p>
            <StepCarousel data={aiInkoopSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              className="text-blue-500 hover:underline"
              href="https://doi.org/10.56294/dm2024395"
            >
              Lees meer...
            </Link>
          </section>
        </div>

        <div className="flex flex-col gap-4 pb-4">
          <h2 id="nmt-inkoop" className="text-2xl font-bold pb-4">
            2. Neural Machine Translation (NMT)
          </h2>

          <section className="flex flex-row items-start">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                Neural Machine Translation (NMT) is een AI-techniek die wordt
                gebruikt om teksten en communicatie automatisch te vertalen naar
                verschillende talen. Binnen de inkoopafdeling wordt deze
                techniek ingezet om communicatie met internationale leveranciers
                en inkoopdocumentatie toegankelijk te maken.
              </p>
              <p>
                In een globale supply chain werken bedrijven samen met
                leveranciers uit verschillende landen. Hierbij komen documenten
                zoals offertes, contracten en productspecificaties in
                verschillende talen voor. NMT maakt het mogelijk om deze
                informatie automatisch te vertalen, zodat inkopers deze direct
                kunnen begrijpen en gebruiken bij het nemen van beslissingen.
              </p>
              <p>
                Bij SmartBikes kan deze techniek bijvoorbeeld worden toegepast
                bij het beoordelen van offertes van buitenlandse leveranciers.
                Productinformatie, prijsafspraken en leveringsvoorwaarden worden
                automatisch vertaald, zodat inkopers snel inzicht krijgen in de
                inhoud en verschillende opties kunnen vergelijken.
              </p>
            </div>

            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/NMT Inkoop 1.png"
                alt="NMT Inkoop Concept"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-words flex-1">
              <h3 className="text-lg font-semibold">
                Waarom zouden bedrijven dit moeten toepassen?
              </h3>
              <p>
                Het toepassen van NMT binnen de inkoopafdeling maakt het
                mogelijk om efficiënter en beter onderbouwde beslissingen te
                nemen. Taalbarrières kunnen leiden tot misverstanden bij het
                interpreteren van offertes of contracten, wat risico’s met zich
                meebrengt.
              </p>
              <p>
                Met AI-gedreven vertaling kunnen bedrijven informatie sneller
                verwerken en beter vergelijken, waardoor het inkoopproces
                versnelt en betrouwbaarder wordt. Daarnaast wordt het
                eenvoudiger om samen te werken met internationale leveranciers.
              </p>
              <p>Voor SmartBikes betekent dit bijvoorbeeld dat:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>offertes sneller en beter kunnen worden beoordeeld</li>
                <li>communicatie met leveranciers eenvoudiger verloopt</li>
                <li>meer leveranciers wereldwijd kunnen worden benaderd</li>
              </ul>
              <p>
                Daarnaast zorgt deze techniek ervoor dat inkopers minder
                afhankelijk zijn van taalvaardigheden, wat flexibiliteit en
                snelheid in het proces verhoogt.
              </p>
              <p>
                Wel is het belangrijk om rekening te houden met beperkingen van
                AI, zoals het minder goed interpreteren van juridische of
                contractuele nuances. Daarom blijft controle bij belangrijke
                documenten noodzakelijk.
              </p>
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold text-center w-full pb-1 text-lg">
              Hoe implementeer je NMT binnen inkoop?
            </h3>
            <p className="text-center w-full pb-2">Bekijk deze 5 stappen:</p>

            <StepCarousel data={nmtSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link
              href="https://egarp.lt/index.php/aghel/article/view/105/108"
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
