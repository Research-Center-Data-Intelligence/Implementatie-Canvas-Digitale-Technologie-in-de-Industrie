import InteractiveImage from "@/components/interactiveImage";

export default function Home() {
  return (
    <div className="flex flex-col text-start justify-center">
      <header className="items-center text-center p-2 text-bold text-2xl border-b ">
        Home{" "}
      </header>
      <main className="flex flex-col m-4 items-center gap-2 justify-center">
        <p>
          Welkom bij <b>Smart Bikes</b>.
        </p>
        <div className="w-4xl gap-2 text-center flex flex-col wrap-break-word">
          <p>
            Deze website verduidelijkt hoe mkb-bedrijven digitale technologieën
            kunnen integreren in bestaande afdelingen en processen.
          </p>
          <p>
            Dit wordt beantwoord aan de hand van de fictieve fietsenbedrijf
            genaamd SmartBikes. In dit fictief productiebedrijf, worden de
            digitale technologieën (ofwel AI-toepassingen) weergegeven per
            afdeling. Zo wordt duidelijk hoe deze AI-toepassingen concreet
            toepasbaar kunnen zijn binnen jouw eigen industrie, dit zodat deze
            technologieën schaalbaar en overzichtelijk zijn voor mkb-bedrijven
            in de regio Limburg.
          </p>
          <p>
            In onderstaande afbeelding is de fictieve fietsenfabriek te zien,
            met hierin de benoemde afdelingen. Per afdeling zijn concrete
            voorbeelden uitgewerkt. Zie deze afbeeldingen voor het vatbaar maken
            van digitale technologieën.
          </p>
        </div>
        <InteractiveImage />
      </main>
    </div>
  );
}
