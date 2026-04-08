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

export default function CustomerServicePage() {
  const chatbotSteps = [
    {
      titel: "Stap 1: Bepaal klantbehoeften",
      beschrijving: "Identificeer veelgestelde vragen (FAQ), zoals:",
      punten: [
        "Productinformatie (modellen, specs)",
        "Levertijden en beschikbaarheid",
        "Service- en onderhoudsaanvragen",
        "Status van bestellingen en retouren",
      ],
    },
    {
      titel: "Stap 2: Verzamel en structureer informatie",
      beschrijving: "Zorg dat de AI toegang heeft tot de juiste bronnen:",
      punten: [
        "Gedetailleerde productcatalogus",
        "Bestaande FAQ-lijsten",
        "Klantprocessen (garantie, handleidingen)",
        "Interne kennisbanken",
      ],
    },
    {
      titel: "Stap 3: Ontwikkel en train de chatbot",
      beschrijving: "Gebruik NLP (Natural Language Processing) om:",
      punten: [
        "Klantvragen in natuurlijke taal te begrijpen",
        "Verschillende formuleringen te herkennen",
        "Contextueel relevante antwoorden te geven",
        "De bot te laten leren van elke interactie",
      ],
    },
    {
      titel: "Stap 4: Integreer in de website",
      beschrijving: "Plaats de chatbot strategisch zodat:",
      punten: [
        "Klanten 24/7 direct antwoord krijgen",
        "Antwoorden realtime worden gegenereerd",
        "Complexe zaken vloeiend naar medewerkers gaan",
      ],
    },
    {
      titel: "Stap 5: Continu verbeteren",
      beschrijving: "Analyseer gespreksdata voor optimalisatie:",
      punten: [
        "Antwoorden verfijnen op basis van feedback",
        "Nieuwe onderwerpen en vragen toevoegen",
        "Servicekwaliteit en klanttevredenheid meten",
      ],
    },
  ];

  const StepCarousel = ({ data }: { data: typeof chatbotSteps }) => (
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
        <h1 className="flex-none text-center">Customer Service</h1>
        <div className="flex-1 "></div>
      </header>

      <main className="m-8">
        <div className="flex flex-col gap-4 pb-4">
          <h2 className="text-2xl font-bold pb-4">1. AI-Chatbot</h2>
          <section className="flex flex-row items-start">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">Wat is de techniek?</h3>
              <p>
                Een AI-gestuurde chatbot is een intelligent systeem dat
                gebruikmaakt van Natuurlijke Taalverwerking (NLP) om
                klantinteracties te automatiseren. In plaats van te wachten op
                een beschikbare medewerker, kunnen klanten via de website direct
                communiceren met een systeem dat hun vragen begrijpt en
                beantwoordt.
              </p>
              <br />
              <p>
                Voor SmartBikes betekent dit dat klanten direct informatie
                kunnen opvragen over specifieke fietsmodellen, actuele
                levertijden of onderhoudsadvies. De AI leert van elke
                interactie, waardoor de chatbot steeds nauwkeuriger wordt in het
                herkennen van klantbehoeften.
              </p>
            </div>
            <div className="relative flex-1 h-100 w-auto">
              <Image
                src="/chatbot-tech.png"
                alt="AI Chatbot Technologie"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex flex-row-reverse items-start pb-4">
            <div className="wrap-break-word flex-1">
              <h3 className="text-lg font-semibold">
                Waarom AI-Chatbots toepassen?
              </h3>
              <p>
                Traditionele klantenservice is gebonden aan openingstijden en
                personele capaciteit. Een AI-chatbot lost dit op door 24/7
                directe ondersteuning te bieden. Dit verhoogt niet alleen de
                klanttevredenheid door snelle responstijden, maar vermindert ook
                de druk op het service-team door standaardvragen automatisch af
                te handelen.
              </p>
              <p className="mt-4 font-medium">Voor SmartBikes leidt dit tot:</p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Minder telefoontjes en e-mails over standaardzaken</li>
                <li>
                  Hogere efficiëntie: medewerkers focussen op complexe cases
                </li>
                <li>Consistente antwoorden en 24/7 bereikbaarheid</li>
                <li>
                  Schaalbaarheid bij piekdrukte (bijv. tijdens nieuwe
                  lanceringen)
                </li>
              </ul>
            </div>
            <div className="relative flex-1 h-100 mr-8 w-auto">
              <Image
                src="/chatbot-benefits.png"
                alt="Voordelen van AI Chatbots"
                fill
                className="object-contain"
              />
            </div>
          </section>

          <section className="flex items-start flex-col">
            <h3 className="font-semibold pb-4 text-lg">
              Hoe implementeer je een AI-chatbot?
            </h3>
            <StepCarousel data={chatbotSteps} />
          </section>

          <section className="flex flex-row gap-4 items-center pb-20">
            <h3 className="font-semibold text-lg">Bron:</h3>
            <Link className="text-blue-500 hover:underline" href="#">
              Lees meer...
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
